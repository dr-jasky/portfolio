
import { Publication, PublicationType } from '../types';

/**
 * Formats author strings for APA style.
 * This is a basic formatter; more complex scenarios might need refinement.
 * @param authors - The raw authors string.
 * @returns Formatted authors string.
 */
function formatAuthorsAPA(authors: string): string {
  return authors.trim().replace(/,$/, ''); // Remove trailing comma if any
}

/**
 * Extracts journal parts (volume, issue, pages) from the details string.
 * @param details - The details string of a journal publication.
 * @returns An object containing volume, issue, pages, and the cleaned full details.
 */
export function getJournalParts(details?: string): { volume?: string, issue?: string, pages?: string, fullDetails?: string } {
  if (!details) return { fullDetails: '' };

  // Remove [IF:...] or any [...] part first
  const bracketMatch = details.match(/\[[^\]]+\]/);
  let cleanDetails = bracketMatch ? details.substring(0, bracketMatch.index).trim() : details.trim();
  // Also remove trailing commas or periods from the cleaned string before parsing
  cleanDetails = cleanDetails.replace(/[.,\s]+$/, '');


  // Try to match Volume(Issue), Pages pattern e.g., 51(10), 1314-1335 or 51(10), 1314–1335 or 73(250), 979–998.
  const volIssuePagesMatch = cleanDetails.match(/^([\w\d-]+)\s*\(([\w\d-]+)\)\s*,\s*([\w\d-]+(?:–|-)[\w\d-]+|[a-zA-Z0-9]+)$/);
  if (volIssuePagesMatch) {
    return { volume: volIssuePagesMatch[1], issue: volIssuePagesMatch[2], pages: volIssuePagesMatch[3], fullDetails: cleanDetails };
  }

  // Try to match Volume, Pages/ArticleNumber pattern e.g., 145, 104729 or 145, 104729–104735 or 24(6), 1227-1250.
  const volPagesMatch = cleanDetails.match(/^([\w\d-]+)\s*,\s*([\w\d-]+(?:–|-)[\w\d-]+|[a-zA-Z0-9]+)$/);
  if (volPagesMatch) {
    return { volume: volPagesMatch[1], pages: volPagesMatch[2], fullDetails: cleanDetails };
  }
  
  // Try to match Volume(Issue). for cases like 28(1).
  const volIssueOnlyMatch = cleanDetails.match(/^([\w\d-]+)\s*\(([\w\d-]+)\)$/);
  if (volIssueOnlyMatch) {
    return { volume: volIssueOnlyMatch[1], issue: volIssueOnlyMatch[2], fullDetails: cleanDetails };
  }

  // If details only contain pages/article number after cleaning.
  if (/^([\w\d-]+(?:–|-)[\w\d-]+|[a-zA-Z0-9]+)$/.test(cleanDetails)) {
    return { pages: cleanDetails, fullDetails: cleanDetails };
  }

  return { fullDetails: cleanDetails }; // Fallback
}

/**
 * Generates an APA-style citation string for a given publication.
 * @param publication - The publication object.
 * @returns An APA-formatted citation string.
 */
export function generateAPA(publication: Publication): string {
  const authors = formatAuthorsAPA(publication.authors);
  const yearString = publication.year.toString();
  const year = yearString.includes('Expected') || yearString.includes('Communicated') ? 
               yearString.replace(/\(([^)]+)\)/, '$1').split(' ')[0] : 
               yearString;

  let titleSegment = publication.title.endsWith('.') || publication.title.endsWith('?') ? publication.title : `${publication.title}.`;
  let sourceSegment = '';
  let detailsSegment = ''; // For [Preprint], [Working Paper], etc.

  switch (publication.type) {
    case PublicationType.Journal:
      // Journal article title is NOT italicized. Journal name IS italicized.
      const { volume, issue, pages, fullDetails } = getJournalParts(publication.details);
      sourceSegment = `*${publication.source}*`; // Italicize journal name
      if (volume) sourceSegment += `, *${volume}*`; // Italicize volume
      if (issue) sourceSegment += `(${issue})`;
      if (pages) sourceSegment += `, ${pages}`;
      else if (fullDetails && !volume && !issue && !pages && fullDetails.trim() && fullDetails.trim() !== '.') {
        sourceSegment += `, ${fullDetails}`; // Article number
      }
      sourceSegment = sourceSegment.trimRight();
      if (!sourceSegment.endsWith('.')) sourceSegment += '.';
      break;

    case PublicationType.BookChapter:
      // Chapter title is NOT italicized. Book title IS italicized.
      let bookTitleString = publication.source;
      // Extract book title from source string like "Chapter X in Actual Book Title."
      const inMatch = publication.source.match(/^(?:In\s+)?(?:Chapter \d+\s+in\s+)?(.*?)(?:\s+\(pp\. .*?\))?\.$/i);
      if (inMatch && inMatch[1]) {
        bookTitleString = `*${inMatch[1].trim()}*`;
      } else {
         // Fallback if "In" or "Chapter X in" is missing but it's a book chapter
         const sourceCleaned = publication.source.replace(/^(?:In\s+)?(?:Chapter \d+\s+in\s+)?/i, '').replace(/\.$/, '').trim();
         bookTitleString = `*${sourceCleaned}*`;
      }
      sourceSegment = `In ${bookTitleString}`;
      
      if (publication.details) {
          const pageMatch = publication.details.match(/pp\.\s*([\d\w-]+)/);
          if (pageMatch) sourceSegment += ` (pp. ${pageMatch[1]})`;
          
          // Extract publisher, ensuring it's not just an ISBN or other detail
          const publisherMatch = publication.details.match(/^([^\[(.,]+)/); 
          if (publisherMatch && publisherMatch[1].trim().length > 1 && !publisherMatch[1].toLowerCase().includes('isbn')) { 
            sourceSegment += `. ${publisherMatch[1].trim()}`;
          }
      }
      sourceSegment = sourceSegment.trimRight();
      if (!sourceSegment.endsWith('.')) sourceSegment += '.';
      break;

    case PublicationType.Conference:
      // Conference paper title IS italicized.
      titleSegment = `*${publication.title.replace(/[.?]$/, '')}*.`; // Italicize title and ensure it ends with a period.
      sourceSegment = `[Paper presentation]. ${publication.source.replace(/\.$/, '')}`; // Conference name
      if (publication.details) {
        const detailsCleaned = publication.details.replace(/\.$/, '').replace('Poster Accepted. Presentation: ', '');
        sourceSegment += `, ${detailsCleaned}`; // Conference location/date
      }
      sourceSegment += '.';
      break;

    case PublicationType.WorkingPaper:
    case PublicationType.InProgress: // Typically treated like preprints or working papers if informal
    case PublicationType.Report:
      // Titles of reports, working papers, and preprints ARE italicized.
      titleSegment = `*${publication.title.replace(/[.?]$/, '')}*.`; // Italicize title

      if (publication.status && publication.status.toLowerCase().includes('preprint')) {
        detailsSegment = '[Preprint]. ';
      } else if (publication.type === PublicationType.WorkingPaper) {
        detailsSegment = '[Working Paper]. ';
      } else if (publication.type === PublicationType.Report) {
        detailsSegment = '[Technical Report]. ';
      }
      // Source (e.g., SSRN, university for report) is NOT italicized for preprints/WPs.
      sourceSegment = `${publication.source.replace(/\.$/, '')}.`;
      break;
      
    case PublicationType.BookProposal:
      // Title of a book proposal is italicized.
      titleSegment = `*${publication.title.replace(/[.?]$/, '')}*.`;
      detailsSegment = `[Book Proposal]. ${publication.source.replace(/\.$/, '')}.`;
      // Source segment might be empty or publisher info if available
      break;

    default:
      // Fallback for any other types, potentially just source name.
      sourceSegment = `${publication.source.replace(/\.$/, '')}.`;
      break;
  }

  // Construct the main part of the citation
  // Using trim() on segments to avoid double spaces if one is empty.
  let apaString = `${authors} (${year}). ${titleSegment.trim()} ${detailsSegment.trim()} ${sourceSegment.trim()}`.trim();
  
  // Add DOI or URL
  if (publication.doiLink) {
    apaString += ` ${publication.doiLink}`;
  } else if (publication.link && (
    publication.type === PublicationType.WorkingPaper || 
    publication.type === PublicationType.InProgress || 
    publication.type === PublicationType.Report || 
    (publication.status && publication.status.toLowerCase().includes('preprint'))
  )) {
    apaString += ` Retrieved from ${publication.link}`;
  }
  
  // Final cleanup for spacing and punctuation
  apaString = apaString.replace(/\s\s+/g, ' ').replace(/\.\.$/, '.').replace(/\s\./g, '.');
  if (!apaString.endsWith('.') && !publication.doiLink && !publication.link) { // Add trailing period if not ending with one, or a URL/DOI
     if(!apaString.endsWith('?') && !apaString.endsWith('!')) {
        apaString += '.';
     }
  }


  return apaString.trim();
}

/**
 * Generates a BibTeX citation string for a given publication.
 * @param publication - The publication object.
 * @returns A BibTeX-formatted citation string.
 */
export function generateBibTeX(publication: Publication): string {
  const authorLastName = publication.authors.split(/,|\s+and\s+/)[0].toLowerCase().replace(/\s/g, '').replace(/[^a-z0-9]/gi, '');
  const yearString = publication.year.toString().split(' ')[0].replace(/\D/g,''); // Get numerical part of year string
  const titleWords = publication.title.split(' ');
  const titleShort = (titleWords.length > 1 ? titleWords[0] + titleWords[1] : titleWords[0]).toLowerCase().replace(/[^a-z0-9]/gi, '');
  const bibKey = `${authorLastName}${yearString}${titleShort}`;
  
  let bibtex = '';
  const authorsBib = publication.authors.replace(/,\s*&/g, ' and').replace(/,\s*(?=[A-Z][a-z]+\s*[A-Z]\.)/g, ' and '); // Improved to handle "Singh, J., & Singh, M."

  const escapeBibValue = (value: string | undefined) => value ? value.replace(/([{}&%$#_])/g, '\\$1') : '';


  switch (publication.type) {
    case PublicationType.Journal:
      const { volume, issue, pages } = getJournalParts(publication.details);
      bibtex = `@article{${bibKey},\n`;
      bibtex += `  author    = {${authorsBib}},\n`;
      bibtex += `  title     = {${escapeBibValue(publication.title)}},\n`;
      bibtex += `  journal   = {${escapeBibValue(publication.source)}},\n`;
      bibtex += `  year      = {${yearString}},\n`;
      if (volume) bibtex += `  volume    = {${escapeBibValue(volume)}},\n`;
      if (issue) bibtex += `  number    = {${escapeBibValue(issue)}},\n`;
      if (pages) bibtex += `  pages     = {${escapeBibValue(pages.replace(/–|-/g, '--'))}},\n`;
      break;
    case PublicationType.BookChapter:
      bibtex = `@incollection{${bibKey},\n`;
      bibtex += `  author    = {${authorsBib}},\n`;
      bibtex += `  title     = {${escapeBibValue(publication.title)}},\n`;
      let bookTitle = publication.source;
      const inMatch = publication.source.match(/^(?:In\s+)?(?:Chapter \d+\s+in\s+)?(.*?)(?:\s+\(pp\. .*?\))?\.$/i);
      if (inMatch && inMatch[1]) {
        bookTitle = inMatch[1].trim();
      } else {
         bookTitle = publication.source.replace(/^(?:In\s+)?(?:Chapter \d+\s+in\s+)?/i, '').replace(/\.$/, '').trim();
      }
      
      bibtex += `  booktitle = {${escapeBibValue(bookTitle)}},\n`;
      if (publication.details) {
        const publisherMatch = publication.details.match(/^([^\[(.,]+)/);
        if(publisherMatch && !publisherMatch[1].toLowerCase().includes('isbn') && publisherMatch[1].trim().length > 1) bibtex += `  publisher = {${escapeBibValue(publisherMatch[1].trim())}},\n`;
        const pageMatch = publication.details.match(/pp\.\s*([\d\w-]+)/);
        if (pageMatch) bibtex += `  pages     = {${escapeBibValue(pageMatch[1].replace(/–|-/g, '--'))}},\n`;
      }
      bibtex += `  year      = {${yearString}},\n`;
      break;
    case PublicationType.Conference:
      bibtex = `@inproceedings{${bibKey},\n`;
      bibtex += `  author    = {${authorsBib}},\n`;
      bibtex += `  title     = {${escapeBibValue(publication.title)}},\n`;
      bibtex += `  booktitle = {Proceedings of the ${escapeBibValue(publication.source.replace(/\.$/, ''))}},\n`; // Common to prefix with "Proceedings of the"
      bibtex += `  year      = {${yearString}},\n`;
      if (publication.details) {
         const detailsCleaned = publication.details.replace('Poster Accepted. Presentation: ', '');
         const addressMatch = detailsCleaned.match(/,\s*([^,]+,\s*[^,]+)$/); // Attempt to get location like "City, Country"
         if (addressMatch && addressMatch[1]) bibtex += `  address   = {${escapeBibValue(addressMatch[1].trim())}},\n`;
         else if (detailsCleaned.includes(',')) bibtex += `  note   = {${escapeBibValue(detailsCleaned)}},\n`; // Use note for other details
      }
      break;
    case PublicationType.WorkingPaper:
    case PublicationType.Report:
      const bibType = publication.type === PublicationType.Report ? '@techreport' : '@unpublished'; // Using @unpublished for working papers/preprints as per some conventions
      bibtex = `${bibType}{${bibKey},\n`;
      bibtex += `  author    = {${authorsBib}},\n`;
      bibtex += `  title     = {${escapeBibValue(publication.title)}},\n`;
      if (publication.type === PublicationType.Report) {
        bibtex += `  institution = {${escapeBibValue(publication.source.replace(/\.$/, ''))}},\n`;
      } else { // WorkingPaper, InProgress
        bibtex += `  note      = {${escapeBibValue(publication.source.replace(/\.$/, ''))}`;
        if (publication.status) bibtex += `. Status: ${escapeBibValue(publication.status)}`;
        bibtex += `},\n`;
      }
      bibtex += `  year      = {${yearString}},\n`;
      if (publication.link) bibtex += `  url       = {${publication.link}},\n`;
      break;
    default: // BookProposal, InProgress (if not caught by WorkingPaper logic)
      bibtex = `@misc{${bibKey},\n`;
      bibtex += `  author    = {${authorsBib}},\n`;
      bibtex += `  title     = {${escapeBibValue(publication.title)}},\n`;
      bibtex += `  year      = {${yearString}},\n`;
      let note = escapeBibValue(publication.source.replace(/\.$/, ''));
      if(publication.details) note += `. ${escapeBibValue(publication.details)}`;
      if(publication.status) note += `. Status: ${escapeBibValue(publication.status)}`;
      bibtex += `  note      = {${note}},\n`;
      if (publication.link) bibtex += `  url       = {${publication.link}},\n`;
      break;
  }

  if (publication.doiLink) {
    bibtex += `  doi       = {${publication.doiLink.replace('https://doi.org/', '')}}\n`;
  }
  // Remove last comma if any before closing brace
  bibtex = bibtex.replace(/,\n$/, '\n');
  bibtex += `}`;
  return bibtex;
}
