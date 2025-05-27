import { PersonalInfo, Publication, Experience, EducationItem, Certification, SkillCategory, ContactLink, NavLink, PublicationType, ConsultancyService, Testimonial } from './types';

export const personalInfoData: PersonalInfo = {
  name: "Dr. Jaskirat Singh, Postdoc & Ph.D.",
  title: "Researcher, Educator, Innovator",
  subtitle: "(Former Postdoctoral Fellow, ICSSR, Ministry of Education, India)",
  tagline: "Driving Socio-Economic Impact through Research, Technology, and Collaborative Innovation.",
  consultancyOfferSummary: "Offering pro-bono consultancy for NGOs and tailored research support for academics and organizations. Let's collaborate to make a difference.",
  email: "jasky786@gmail.com",
  linkedIn: "https://www.linkedin.com/in/dr-jaskirat-singh/", 
  googleScholar: "https://scholar.google.com/citations?user=YOUR_USER_ID", // Replace YOUR_USER_ID
  orcid: "https://orcid.org/0000-0003-0337-7885",
  profileImageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQFtCAgc4PbKGg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1684786723981?e=1753920000&v=beta&t=Ec4F_16-ETRI7L_W_TAAR4ShnDFHRANcjz-dSeJE6Bw",
  professionalSummary: "Highly accomplished and results-oriented researcher, educator, and published author with over 10 years of experience specializing in finance, technology, and socio-economic development. Proven ability to secure prestigious fellowships (ICSSR Postdoctoral, UGC JRF/SRF) and lead impactful research projects from conception to publication in high-ranking Q1/Q2 Scopus and ABDC journals. Expertise spans quantitative (SPSS, R, SEM AMOS, STATA) and qualitative methodologies, grant acquisition, data analysis, and policy-relevant insight generation. Demonstrated success in postgraduate/doctoral teaching, curriculum design, thesis supervision, and peer review. Possesses exceptional administrative, project management, and cross-cultural communication skills, committed to driving international collaboration and positive social change. Passionate about leveraging research for practical solutions, especially for non-profit organizations and community development.",
  ssrnProfileUrl: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=7349141", 
  cvUrl: "/path-to-your-cv.pdf", // Replace with actual CV path
  keyStats: [
    { id: "ks1", label: "Years of Experience", value: 10, suffix: "+", icon: "fas fa-briefcase" },
    { id: "ks2", label: "Peer-Reviewed Publications", value: 15, suffix: "+", icon: "fas fa-book-open" }, // Update count based on actuals
    { id: "ks3", label: "Prestigious Fellowships", value: 2, icon: "fas fa-award" },
    { id: "ks4", label: "Research Impact", value: "Q1/Q2", icon: "fas fa-chart-line" },
    { id: "ks5", label: "Peer Reviews (Q1/Q2 Journals)", value: 20, suffix: "+", icon: "fas fa-file-signature" }
  ]
};

export const publicationsData: Publication[] = [
  { 
    id: "prja1", 
    type: PublicationType.Journal, 
    authors: "Singh, J., & Singh, M.", 
    title: "Addressing unproductive credit consumption and beneficiary malpractices in social welfare programs for slum-dwellers: A study from India.", 
    source: "Cities", 
    year: 2024, 
    details: "145, 104729. [IF: 6.7]", 
    doiLink: "https://doi.org/10.1016/j.cities.2023.104729",
    insightSnippet: "Examines how unproductive loan usage and malpractices hinder welfare program effectiveness in urban slums, offering policy recommendations.",
    featuredImageUrl: "https://picsum.photos/seed/cities2024/400/250",
    tags: ["Urban Poverty", "Social Welfare", "Policy", "India"],
    impactMetrics: [{ name: "Scopus Quartile", value: "Q1", icon: "fas fa-star" }, { name: "Impact Factor", value: "6.7" }]
  },
  { 
    id: "prja2", 
    type: PublicationType.Journal, 
    authors: "Singh, J., & Singh, M.", 
    title: "Alleviating urban poverty in India: The role of capabilities and entrepreneurship development.", 
    source: "International Journal of Social Economics", 
    year: 2024, 
    details: "51(10), 1314-1335. [IF: 1.9]", 
    doiLink: "https://doi.org/10.1108/IJSE-07-2023-0514",
    tags: ["Urban Poverty", "Capability Approach", "Entrepreneurship"],
    impactMetrics: [{ name: "Scopus Quartile", value: "Q2" }, { name: "ABDC", value: "B" }]
  },
  { 
    id: "prja3", 
    type: PublicationType.Journal, 
    authors: "Singh, J., & Singh, M.", 
    title: "Accelerating Financial Inclusion of the Urban Poor: Role of Innovative e-Payment Systems and JAM Trinity in Alleviating Poverty in India.", 
    source: "Global Business Review", 
    year: 2024, 
    details: "09721509231222609 (Online First). [IF: 2.4]", 
    doiLink: "https://doi.org/10.1177/09721509231222609",
    insightSnippet: "Investigates the impact of e-payment systems and the JAM Trinity on financial inclusion and poverty among India's urban poor.",
    featuredImageUrl: "https://picsum.photos/seed/gbr2024/400/250",
    tags: ["Financial Inclusion", "Fintech", "E-Payments", "Poverty Alleviation"],
    impactMetrics: [{ name: "Scopus Quartile", value: "Q1" }, { name: "ABDC", value: "C" }]
  },
  { 
    id: "prja5", 
    type: PublicationType.Journal, 
    authors: "Singh, J., & Singh, M.", 
    title: "Fintech applications in social welfare schemes during Covid times: An extension of the classic TAM model in India.", 
    source: "International Social Science Journal", 
    year: 2023, 
    details: "73(250), 979–998.", 
    doiLink: "https://doi.org/10.1111/issj.12406", 
    insightSnippet: "Explores the adoption of Fintech in social welfare during the COVID-19 pandemic using an extended Technology Acceptance Model (TAM).",
    featuredImageUrl: "https://picsum.photos/seed/issj2023/400/250",
    tags: ["Fintech", "Social Welfare", "COVID-19", "TAM Model"],
    impactMetrics: [{ name: "Scopus Quartile", value: "Q3" }, { name: "ABDC", value: "B" }]
  },
  // Add tags and impactMetrics to other publications as needed
  { 
    id: "prja4", 
    type: PublicationType.Journal, 
    authors: "Singh, V., & Singh, J.", 
    title: "Quantifying the relationship between e-advertising capabilities and marketing mix cost savings.", 
    source: "International Journal of Applied Management Science", 
    year: 2024, 
    details: "16(1), 44-67.", 
    doiLink: "https://doi.org/10.1504/IJAMS.2024.136369",
    tags: ["E-Advertising", "Marketing", "Cost Savings"]
  },
  { 
    id: "prja6", 
    type: PublicationType.Journal, 
    authors: "Singh, J., & Singh, M.", 
    title: "Does financial inclusion impact socio-economic stability? A study of social safety net in Indian slums.", 
    source: "International Journal of Social Economics", 
    year: 2023, 
    details: "50(8), 1060-1084.", 
    doiLink: "https://doi.org/10.1108/IJSE-04-2022-0261",
    tags: ["Financial Inclusion", "Socio-Economic Stability", "Urban Slums"],
    impactMetrics: [{ name: "Scopus Quartile", value: "Q2" }, { name: "ABDC", value: "B" }]
  },
  { 
    id: "prja7", 
    type: PublicationType.Journal, 
    authors: "Singh, J., Sharma, D., & Batra, G. S.", 
    title: "Does Credit Utilization Pattern Promote Poverty Alleviation? An Evidence from India.", 
    source: "Global Business Review", 
    year: 2023, 
    details: "24(6), 1227-1250.", 
    doiLink: "https://doi.org/10.1177/0972150920918967",
    tags: ["Credit Utilization", "Poverty Alleviation", "India"],
    impactMetrics: [{ name: "Scopus Quartile", value: "Q1" }, { name: "ABDC", value: "C" }]
  },
  { 
    id: "prja8", 
    type: PublicationType.Journal, 
    authors: "Singh, J., Batra, G. S., Sharma, D., & Singh, V.", 
    title: "Microcredit Usage Pattern and its Impact on Economic Activities of the Urban Deprived: A Study of Punjab State, India.", 
    source: "South Asian Journal of Management", 
    year: 2021, 
    details: "28(1), 128.", 
    link: "https://www.researchgate.net/publication/350089657_Microcredit_usage_pattern_and_its_impact_on_economic_activities_of_the_urban_deprived_A_study_of_Punjab_State_India",
    tags: ["Microcredit", "Urban Poor", "Economic Impact"],
    impactMetrics: [{ name: "ABDC", value: "C" }]
  },
  { 
    id: "prja9", 
    type: PublicationType.Journal, 
    authors: "Singh, J., & Sharma, D.", 
    title: "Credit Expansion Programmes for Urban Poor: A Literature Review and Conceptual Framework.", 
    source: "International Journal of Advanced in Management, Technology and Engineering Sciences", 
    year: 2018,
    details: "Volume/Issue not specified in list.",
    tags: ["Credit Expansion", "Urban Poor", "Literature Review"]
  },
  { 
    id: "prja10", 
    type: PublicationType.Journal, 
    authors: "Singh, J., & Sharma, D.", 
    title: "Credit Expansion Programmes for Urban Poor: An Empirical Study.", 
    source: "Journal of Communication Engineering & Systems", 
    year: 2018, 
    details: "8(2), 51-56.",
    tags: ["Credit Expansion", "Urban Poor", "Empirical Study"]
  },

  // Book Chapters
  { 
    id: "bc1", 
    type: PublicationType.BookChapter, 
    authors: "Singh, J., & Sharma, D.", 
    title: "Contemporary Challenges of Management Education in India: Review and Assessment.", 
    source: "Chapter 9 in Interdisciplinary Approaches in Management Education.", 
    year: 2024, 
    details: "Apple Academic Press (CRC Press/Taylor & Francis Group). [ISBN: 9781774916469]",
    tags: ["Management Education", "India", "Challenges"]
  },
  { 
    id: "bc2", 
    type: PublicationType.BookChapter, 
    authors: "Singh, J.", 
    title: "Integrating Microcredit, Fintech, and Social Safety Nets for Holistic Financial Inclusion: Empirical Insights from Urban Slums in India.", 
    source: "In (Book Title TBD). River Publishers.", 
    year: "2025 (Expected)", 
    status: "Targeting Q1-Scopus, In Press",
    tags: ["Microcredit", "Fintech", "Financial Inclusion", "Social Safety Nets"]
  },
  { 
    id: "bc3", 
    type: PublicationType.BookChapter, 
    authors: "Singh, J.", 
    title: "Blockchain for Urban Welfare in the Global South: A Capability-Driven Framework for Digital Inclusion and Sustainable Impact.", 
    source: "In (Book Title TBD). Wiley.", 
    year: "2025 (Expected)", 
    status: "Targeting Q1-Scopus, In Press",
    tags: ["Blockchain", "Urban Welfare", "Digital Inclusion", "Global South"]
  },

  // Conference Papers
  { 
    id: "cp1", 
    type: PublicationType.Conference, 
    authors: "Singh, J.", 
    title: "Self-Help Groups (SHGs): A Tool for Developing Economies' Socio-Economic Development.", 
    source: "International Social Marketing Conference", 
    year: 2025, 
    details: "Poster Accepted. Presentation: 13-15 May 2025, QT Canberra, Australia.",
    tags: ["Self-Help Groups", "Socio-Economic Development", "Conference"]
  },
  
  // Working Papers / Preprints / Communicated
   { 
    id: "wp1", 
    type: PublicationType.WorkingPaper, 
    authors: "Singh, J., Batra, G.S., & Chatrath, S.K.", 
    title: "Blockchain's Role in Social Welfare, Financial Inclusion, and Public Sector Innovations in India: A Multi-Sector Analysis of Government-Led Initiatives.", 
    source: "SSRN Electronic Journal", 
    year: "2024/2025", 
    details: "Targeting: Cities. SSRN ID 5105250.",
    link: "https://ssrn.com/abstract=5105250", 
    status: "Communicated 2024 / SSRN Preprint",
    tags: ["Blockchain", "Social Welfare", "Financial Inclusion", "Public Sector Innovation"]
  },
  { 
    id: "wp2", 
    type: PublicationType.WorkingPaper, 
    authors: "Singh, J., Batra, G.S., & Chatrath, S.K.", 
    title: "Harnessing Fintech for Poverty Alleviation: Enhancing Credit Utilization and Livelihoods in Urban Slums of North-western India through the Capability Approach and Sustainable Livelihoods Framework.", 
    source: "SSRN Electronic Journal", 
    year: "2024/2025", 
    details: "Targeting: Technological Forecasting & Social Change. SSRN ID 5207210.",
    link: "https://ssrn.com/abstract=5207210",
    status: "Communicated 2024 / SSRN Preprint",
    tags: ["Fintech", "Poverty Alleviation", "Capability Approach", "Sustainable Livelihoods"]
  },
  { 
    id: "wp3", 
    type: PublicationType.InProgress, 
    authors: "Singh, J.", 
    title: "Empowering India's Informal Workers Through AI and Blockchain: An ICT4D Framework for Skills, Trust, and Inclusive Growth.", 
    source: "Targeting: Information Technology for Development.", 
    year: "Communicated 2024", 
    status: "Communicated 2024",
    tags: ["AI", "Blockchain", "Informal Workers", "ICT4D", "Inclusive Growth"]
  },
];


export const experienceData: Experience[] = [
  {
    id: "exp1",
    role: "Postdoctoral Fellow",
    organization: "Indian Council of Social Science Research (ICSSR), Ministry of Education",
    location: "New Delhi, India",
    period: "Jan 2022 – Jan 2024",
    descriptionPoints: [
      "Led pioneering government-funded research on \"Innovative E-Payment Portal Systems in Social Welfare Schemes,\" analyzing digital financial inclusion pathways for urban poor households in India.",
      "Authored and published multiple high-impact articles in Q1/Q2 Scopus-indexed journals.",
      "Mentored junior researchers, providing expert guidance on thesis design, literature review, data analysis, and academic writing.",
      "Conceptualized and organized national-level webinars and conferences to disseminate research findings."
    ]
  },
  {
    id: "exp_freelance", 
    role: "Independent Academic Consultant, Mentor & Educator",
    organization: "Freelance & Collaborative Projects",
    location: "Global / Remote",
    period: "2018 – Present", 
    descriptionPoints: [
      "Provide expert academic mentorship to postgraduate and doctoral students, including thesis supervision, research design, and publication strategies.",
      "Develop and deliver specialized training modules on grant writing, advanced research methodologies, data analysis, and academic publishing for diverse audiences.",
      "Engage in freelance research projects, offering expertise in quantitative/qualitative analysis, fintech, financial inclusion, and socio-economic development.",
      "Offer career development coaching and guidance to students and early-career researchers, helping them navigate the academic and professional landscape.",
      "Collaborate with NGOs and research institutions on grant proposals, project implementation, and impact assessment studies.",
      "Conduct peer reviews for academic journals (20+ manuscripts for Q1/Q2 journals) and contribute to curriculum development for university-level courses.",
      "Deliver guest lectures and workshops on specialized topics in finance, technology, and research methods."
    ]
  },
  {
    id: "exp3",
    role: "Junior/Senior Research Fellow (JRF/SRF)",
    organization: "School of Management Studies, Punjabi University",
    location: "Patiala, India",
    period: "Jul 2013 – Jul 2018",
    descriptionPoints: [
      "Conducted extensive interdisciplinary Ph.D. research on \"Credit Expansion Programmes for the Urban Poor.\"",
      "Analyzed large-scale datasets using SPSS, R, and advanced statistical techniques (e.g., SEM).",
      "Taught various post-graduate courses and contributed to departmental research initiatives."
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    id: "edu1",
    degree: "Postdoctoral Research",
    specialization: "Management",
    institution: "Indian Council of Social Science Research (ICSSR), Ministry of Education",
    location: "New Delhi, India",
    period: "2022 – 2024",
    thesisOrDissertation: "Thesis: \"Innovative E-Payment Portal Systems in Social Welfare Schemes: An Empirical Study of Urban Poor Households in India\"",
    achievement: "Awarded prestigious ICSSR Postdoctoral Fellowship (Top 100 out of 3000+ applicants nationwide)."
  },
  {
    id: "edu2",
    degree: "Ph.D. in Business Management",
    institution: "School of Management Studies, Punjabi University",
    location: "Patiala, India",
    period: "2013 – 2019",
    thesisOrDissertation: "\"Credit Expansion Programmes for the Urban Poor: An Empirical Study of Punjab and Chandigarh\"",
    achievement: "Awarded competitive Junior Research Fellowship (JRF) / Senior Research Fellowship (SRF) by UGC.",
    verification: "Degree verified by WES Canada. Canadian Equivalency: Earned doctorate."
  },
  {
    id: "edu3",
    degree: "MBA in Global Business",
    specialization: "Finance/Marketing",
    institution: "School of Management Studies, Punjabi University",
    location: "Patiala, India",
    period: "2010 – 2012",
    achievement: "Ranked #1 Program Topper; Awarded merit-based scholarship.",
    verification: "Degree verified by WES Canada. Canadian Equivalency: Postgraduate diploma (one year)."
  },
  {
    id: "edu4",
    degree: "Bachelor of Commerce (B. Com)",
    institution: "Govt. Bikram College of Commerce, Punjabi University",
    location: "Patiala, India",
    period: "2007 – 2010",
    verification: "Degree verified by WES Canada. Canadian Equivalency: Bachelor's degree (four years)."
  }
];

export const certificationsData: Certification[] = [
  { id: "cert1", name: "Canadian Securities Course (CSC)", institution: "Canadian Securities Institute", year: 2023 },
  { id: "cert2", name: "Data Science: Foundations using R Specialization (5 Courses)", institution: "Johns Hopkins University (Coursera)", year: 2020 },
  { id: "cert3", name: "Google I.T. Support Professional Certificate (5 Courses)", institution: "Google (Coursera)", year: 2020 },
  { id: "cert4", name: "Fundamentals of Digital Marketing", institution: "Google Digital Unlocked", year: 2020 },
  { id: "cert5", name: "AI For Everyone", institution: "DeepLearning.AI (Coursera)", year: 2021},
  { id: "cert6", name: "Blockchain Basics", institution: "University at Buffalo (Coursera)", year: 2022}
];

export const skillCategoriesData: SkillCategory[] = [
  {
    id: "skillcat1",
    name: "Research & Quantitative Analysis",
    skills: ["Quantitative & Mixed-Methods", "Econometrics", "Impact Evaluation", "SPSS, R, STATA, SEM AMOS", "Advanced Excel", "Data Interpretation & Visualization", "Survey Design", "Systematic Reviews", "Bibliometrics"],
    icon: "fas fa-chart-pie", // Changed icon
    description: "Expertise in rigorous data analysis, modeling, and deriving insights from complex datasets using advanced statistical software and methodologies."
  },
  {
    id: "skillcat2",
    name: "Qualitative Research & Academic Output",
    skills: ["Qualitative Research Design", "Case Study Methodology", "Content Analysis", "High-Impact Journal Publication (Q1/Q2 Scopus, ABDC)", "Peer Review (20+ Q1/Q2 Manuscripts)", "Thesis Assessment (PG/Ph.D.)", "Academic Writing & Editing"],
    icon: "fas fa-feather-alt", // Changed icon
    description: "Proficient in qualitative methodologies, scholarly writing, and navigating the academic publishing landscape to produce impactful research."
  },
  {
    id: "skillcat3",
    name: "Domain Expertise",
    skills: ["Finance & Fintech", "Financial Inclusion", "Microfinance", "E-Payments & Digital Wallets", "Blockchain Applications (Conceptual)", "AI in Finance (Conceptual)", "Socio-Economic Development", "Poverty Alleviation", "Capability Approach", "Gender Studies", "Urban Poor/Slums Policy"],
    icon: "fas fa-microchip", // Changed icon
    description: "Deep understanding of financial technologies, economic development theories, and policy frameworks for social impact."
  },
  {
    id: "skillcat4",
    name: "Project Management & Funding",
    skills: ["Grant Writing & Proposal Development", "Project Coordination & Execution", "Reporting & Documentation", "Risk Management", "Stakeholder Management", "Event Organization & Management", "Budgeting"],
    icon: "fas fa-project-diagram", // Changed icon
    description: "Skilled in managing research projects from inception to completion, including securing funding and stakeholder engagement."
  },
  {
    id: "skillcat5",
    name: "Teaching, Mentoring & Supervision",
    skills: ["Postgraduate & Ph.D. Level Teaching", "Curriculum Design & Development", "Student Mentoring & Guidance", "Thesis Supervision (PG & Ph.D.)", "Workshop Facilitation", "Online Teaching Technologies", "Career Development Coaching"],
    icon: "fas fa-users-cog", // Changed icon
    description: "Dedicated to fostering academic growth through effective teaching, mentorship, and curriculum development."
  },
  {
    id: "skillcat6",
    name: "Technical & Communication",
    skills: ["MS Office Suite (Advanced)", "Google Workspace", "Google IT Support Suite (Fundamentals)", "Digital Marketing (Fundamentals)", "Effective Presentation Skills", "Cross-Cultural Communication", "Public Speaking"],
    icon: "fas fa-satellite-dish", // Changed icon
    description: "Proficient with essential software tools and possess strong communication skills for diverse audiences and contexts."
  }
];

export const consultancyServicesData: ConsultancyService[] = [
  { 
    id: "consult1", 
    title: "Pro-Bono for NGOs", 
    description: "Offering free consultancy to non-profit organizations on research design, impact assessment, technology adoption, and grant proposal development to amplify their social impact.", 
    targetAudience: "Non-Profit Organizations, Social Enterprises", 
    iconClass: "fas fa-hand-holding-heart" 
  },
  { 
    id: "consult2", 
    title: "Research Collaboration", 
    description: "Seeking collaborations with academic institutions and researchers on projects related to fintech, financial inclusion, socio-economic development, and sustainable finance.", 
    targetAudience: "Academic Researchers, Universities", 
    iconClass: "fas fa-atom" 
  },
  { 
    id: "consult3", 
    title: "Data Analysis & Interpretation", 
    description: "Providing guidance and support for quantitative and qualitative data analysis, interpretation of results, and data visualization for research projects and reports.", 
    targetAudience: "Students, Researchers, Small Businesses", 
    iconClass: "fas fa-search-dollar" 
  },
  {
    id: "consult4",
    title: "Fintech & Digital Strategy",
    description: "Advising on the strategic implementation of financial technologies, digital transformation, and innovative solutions for businesses and developmental organizations.",
    targetAudience: "Startups, SMEs, Development Agencies",
    iconClass: "fas fa-lightbulb"
  }
];

export const testimonialsData: Testimonial[] = [
  { 
    id: "test1", 
    quote: "Dr. Singh's insights into our research methodology were invaluable. His guidance helped us refine our approach and significantly improve our study's impact. Highly recommended for any research-intensive project.", 
    author: "Dr. Anya Sharma", 
    authorTitle: "Lead Researcher, Development Institute",
    avatarUrl: "https://picsum.photos/seed/anya_sharma/100/100"
  },
  { 
    id: "test2", 
    quote: "The pro-bono consultation provided by Dr. Jaskirat was a game-changer for our NGO. He helped us structure our impact assessment framework, which is crucial for our funding proposals.", 
    author: "Rajesh Kumar", 
    authorTitle: "Director, Community Uplift Foundation",
    avatarUrl: "https://picsum.photos/seed/rajesh_kumar/100/100"
  },
];


export const contactLinksData: ContactLink[] = [
  { id: "cl1", name: "Email", url: `mailto:${personalInfoData.email}`, iconClass: "fas fa-envelope" },
  { id: "cl2", name: "LinkedIn", url: personalInfoData.linkedIn, iconClass: "fab fa-linkedin" },
  { id: "cl3", name: "Google Scholar", url: personalInfoData.googleScholar, iconClass: "fas fa-graduation-cap" }, 
  { id: "cl4", name: "ORCID", url: personalInfoData.orcid, iconClass: "fab fa-orcid" },
  { id: "cl5", name: "SSRN", url: personalInfoData.ssrnProfileUrl || "#", iconClass: "fas fa-file-alt" }
];

export const navLinksData: NavLink[] = [
  { id: "nav1", name: "Home", path: "/" },
  { id: "nav2", name: "About", path: "/about" },
  { id: "nav3", name: "Research", path: "/research" },
  { id: "nav4", name: "Experience", path: "/experience" },
  { id: "nav5", name: "Skills", path: "/skills" },
  { id: "nav7", name: "Consultancy", path: "/consultancy"}, 
  { id: "nav8", name: "Contact", path: "/contact" },
];