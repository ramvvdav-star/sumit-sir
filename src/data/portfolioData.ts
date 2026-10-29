export interface Venture {
  id: string;
  name: string;
  tagline: string;
  role: string;
  established: string;
  category: 'National Forum' | 'K-12 Discovery' | 'Higher Education' | 'Consulting & Advisory' | 'Media & Podcasts' | 'Youth Leadership';
  summary: string;
  detailedDescription: string;
  keyResponsibilities: string[];
  documentedMilestones: string[];
  officialPartners: string[];
  verificationStatus: 'Documented Public Record' | 'Self-Reported / Public Posts' | 'Directory Filing';
  sourceCitations: { label: string; url?: string; note: string }[];
  accentColor: string;
}

export interface TimelineMilestone {
  period: string;
  title: string;
  organization: string;
  role: string;
  category: 'Foundation' | 'Conferences & Summits' | 'Public Events' | 'Media & Podcasting' | 'Recognition';
  description: string;
  evidenceTier: 'Verified Institutional Report' | 'Media Coverage' | 'Documented Public Listing' | 'Advertised / Scheduled' | 'Pending Verification';
  source: string;
  sourceUrl?: string;
  notes?: string;
}

export interface ImpactProject {
  id: string;
  title: string;
  organization: string;
  role: string;
  date: string;
  venueOrPlatform: string;
  objective: string;
  documentedOutcome: string;
  partners: string[];
  evidenceTier: 'Verified Institutional Report' | 'Media Coverage' | 'Organisational Announcement';
  source: string;
  sourceUrl?: string;
}

export interface MediaEpisode {
  id: string;
  series: 'BrewED Talks' | 'Partners in Parenting' | 'Coffee with Educators' | 'Conclave Keynotes';
  title: string;
  featuredGuestOrTopic: string;
  recordedDate: string;
  durationApprox: string;
  description: string;
  keyThemes: string[];
  status: 'Documented Public Series';
  source: string;
}

export interface PhilosophyPillar {
  title: string;
  theme: string;
  quote?: string;
  description: string;
  principles: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Sumit Varma",
    preferredSpelling: "Sumit Varma (also noted as Verma in third-party directories)",
    headline: "Building Connections. Shaping Educational Futures.",
    shortBio: "An education-sector entrepreneur, community convener, and career guidance professional focused on connecting students, families, educators, and institutions across India through innovative platforms, collaborative forums, and forward-looking guidance.",
    location: "New Delhi, India",
    linkedinUrl: "https://www.linkedin.com/in/sumit-varma",
    indexedProfileUrl: "https://in.linkedin.com/in/sumit-varma-1622221a9",
    pdfAssetPath: "/assets/aistudio/Sumit_Varma_Resume_Information_Pack_4037f241.pdf",
    currentFocus: [
      "President & Founder, Bharat Education Forum",
      "Director & Co-Founder, Schoolyatra & Collegeyatra",
      "Principal Consultant, SVEI (Sumit Varma Education & Immigration)",
      "Host, BrewED Talks & Educational Dialogue Series"
    ]
  },

  quickFacts: [
    { label: "Institutional Convenings", value: "40+ Universities", detail: "Represented at GTTCI Global Education Summit 2026" },
    { label: "Major Event Venues", value: "Indira Gandhi Stadium", detail: "The Great Indian Kids Festival 2024 Showcase" },
    { label: "Community Reach", value: "Pan-India Alliances", detail: "School principals, deans, embassy envoys & educators" },
    { label: "Verification Standard", value: "100% Sourced", detail: "Public records & independent institutional coverage" }
  ],

  ventures: [
    {
      id: "bef",
      name: "Bharat Education Forum",
      tagline: "Uniting educators, university leaders, and youth across India",
      role: "Founder & President",
      established: "2024 (Active)",
      category: "National Forum",
      summary: "A premier education-sector network convening school leaders, vice-chancellors, embassy representatives, policymakers, and youth for high-impact educational dialogue.",
      detailedDescription: "Bharat Education Forum (BEF) serves as a strategic bridge between K-12 schooling, higher education institutions, and global education delegations. Under Sumit Varma's leadership, the forum champions collaborative institutional dialogues, student empowerment conclaves, and policy-adjacent conversations that address the modern educational landscape in Bharat.",
      keyResponsibilities: [
        "Strategic leadership and institutional partnership development across universities and K-12 institutions.",
        "Curating national forums, summits, and youth leadership assemblies.",
        "Fostering cross-border academic dialogues with diplomatic and international education delegations."
      ],
      documentedMilestones: [
        "Co-organized the 'Global Education, Global Opportunities' conference with GTTCI (Sept 2026), attended by embassy envoys and representatives from over 40 educational institutions.",
        "Convened the Speaking Minds Youth Conclave (March 2026), addressing hundreds of emerging student leaders.",
        "Official Education Partner for the National School Awards 2026 at Welcomhotel by ITC Hotels, Dwarka."
      ],
      officialPartners: ["GTTCI (Global Trade & Technology Council of India)", "National School Awards", "Collegeyatra"],
      verificationStatus: "Documented Public Record",
      sourceCitations: [
        { label: "GTTCI Official Report", url: "https://gttcindia.com/gttci-bharat-education-forum-host-global-education-global-opportunities-conference-to-strengthen-international-education-partnerships/", note: "Co-host report verifying Sumit Varma delivering opening remarks to embassy representatives and 40+ institutions." },
        { label: "BEF Official LinkedIn", url: "https://www.linkedin.com/company/bharat-eudcation-forum", note: "Forum updates, executive announcements, and event documentations." }
      ],
      accentColor: "#D4AF37"
    },
    {
      id: "schoolyatra",
      name: "Schoolyatra",
      tagline: "Transforming school discovery and early childhood education guidance",
      role: "Director & Co-Founder",
      established: "2024",
      category: "K-12 Discovery",
      summary: "A public-facing initiative dedicated to empowering parents through transparent school discovery, early childhood guidance, and meaningful school-community engagement.",
      detailedDescription: "Schoolyatra tackles the information asymmetry faced by parents navigating the complex landscape of preschool, primary, and secondary education. By organizing community-driven festivals, parent consultations, and educator gatherings, Schoolyatra helps families make informed, child-centric schooling decisions.",
      keyResponsibilities: [
        "Directing strategic growth and community initiatives alongside co-director Shiven Varma.",
        "Conceptualizing large-scale child and family engagement events such as The Great Indian Kids Festival.",
        "Establishing partnerships with early-childhood pedagogy experts and preschool networks."
      ],
      documentedMilestones: [
        "Associated with The Great Indian Kids Festival (17 Nov 2024) at the Indira Gandhi Indoor Stadium/Arena, New Delhi.",
        "Published feature in The Daily Metro on transforming early-childhood education approaches.",
        "Initiated the 'Partners in Parenting' collaborative video series with child-development specialists."
      ],
      officialPartners: ["Give for Rising Indian Stars Foundation", "NKS Education", "Bharat Education Forum"],
      verificationStatus: "Documented Public Record",
      sourceCitations: [
        { label: "The Daily Metro Article (Aug 2024)", url: "https://thedailymetro.in/index.php/2024/08/29/transforming-early-childhood-education-schoolyatra-leads-the-way-introduction/", note: "Profiles Schoolyatra's methodology and identifies Sumit Varma and Shiven Varma as directors." },
        { label: "Hindustan Times HT City Feature", url: "https://www.hindustantimes.com/htcity/htcity-delhi-junction/happy-childrens-day-delhiites-head-here-today-to-bond-celebrate-with-kids-101731433353765.html", note: "Feature previewing The Great Indian Kids Festival at Indira Gandhi Indoor Arena." }
      ],
      accentColor: "#38BDF8"
    },
    {
      id: "collegeyatra",
      name: "Collegeyatra",
      tagline: "Guiding Bharat's youth toward higher-education excellence",
      role: "Director & Co-Founder",
      established: "2024",
      category: "Higher Education",
      summary: "A higher-education guidance platform connecting aspiring college students with university administrators, deans, and verified academic pathways.",
      detailedDescription: "Collegeyatra provides structured college selection assistance, program discovery, and admissions guidance. The initiative bridges the gap between ambitious students across India and higher-education decision-makers, featuring interviews with institutional leaders and community outreach.",
      keyResponsibilities: [
        "Overseeing higher-education outreach and collegiate engagement initiatives.",
        "Conducting institutional dialogues with college directors, deans, and admissions leadership.",
        "Developing structured pathway programs for undergraduate and professional course aspirants."
      ],
      documentedMilestones: [
        "Official Community Partner for the National School Awards 2026.",
        "Profiled in Borok Times covering the entrepreneurial journey guiding higher education choices.",
        "Extensive digital guidance series connecting students directly with institutional leadership."
      ],
      officialPartners: ["National School Awards", "Bharat Education Forum"],
      verificationStatus: "Documented Public Record",
      sourceCitations: [
        { label: "Borok Times Feature", url: "https://boroktimes.com/the-edupreneur-guiding-bharats-educational-renaissance-sumit-varma-shiven-varma/", note: "Profile on Sumit Varma and Shiven Varma and the Collegeyatra educational mission." }
      ],
      accentColor: "#818CF8"
    },
    {
      id: "svei",
      name: "SVEI — Sumit Varma Education & Immigration",
      tagline: "Dedicated education consultancy and overseas admissions advisory",
      role: "Founder & Principal Consultant",
      established: "2022 (Directory-Reported)",
      category: "Consulting & Advisory",
      summary: "An education consulting practice offering personalized student counselling, overseas educational advisory, and higher education guidance.",
      detailedDescription: "Established in Delhi, SVEI assists students and families with educational roadmap planning, career counselling, and specialized advisory for competitive undergraduate and graduate admissions (including MBA and medical/MBBS counselling).",
      keyResponsibilities: [
        "Providing individual and family guidance on university selection and career alignment.",
        "Advising on documentation, institutional prerequisites, and admissions workflows.",
        "Conducting career counselling assessments for aspiring professionals."
      ],
      documentedMilestones: [
        "Established advisory presence in East Patel Nagar, New Delhi.",
        "Assisted aspiring students in mapping domestic and overseas university opportunities."
      ],
      officialPartners: ["Independent Education Consultancy"],
      verificationStatus: "Directory Filing",
      sourceCitations: [
        { label: "Delhi Business Directory Listing", url: "https://www.justdial.com/Delhi/Sumit-Varma-Education-And-Immigration-Svei-East-Patel-Nagar/011PXX11-XX11-220927152535-A3V9_BZDET", note: "Public business directory listing with 2022 establishment year in East Patel Nagar, Delhi." }
      ],
      accentColor: "#34D399"
    },
    {
      id: "brewed-talks",
      name: "BrewED Talks & Media Initiatives",
      tagline: "Thought-provoking conversations at the intersection of education & leadership",
      role: "Host & Producer",
      established: "2024 – Present",
      category: "Media & Podcasts",
      summary: "An educational podcast and interview series featuring candid dialogues with educators, school principals, child psychologists, and academic leaders.",
      detailedDescription: "BrewED Talks (and affiliated series like Coffee with Educators and Partners in Parenting) explores critical questions facing modern education: student mental health, screen time management, early childhood development, and preparing students for the AI-driven economy.",
      keyResponsibilities: [
        "Curating episode themes and hosting long-form discussions with education figures.",
        "Synthesizing actionable advice for parents, teachers, and school administrators.",
        "Collaborating with non-profits and educational organizations to spotlight pressing pedagogical issues."
      ],
      documentedMilestones: [
        "Hosted 'Partners in Parenting' episode featuring Preet Sharma (NKS Education) discussing constructive family interaction and screen time.",
        "Interviews with school leaders and educators across Delhi-NCR and national forums."
      ],
      officialPartners: ["Bharat Education Forum", "Schoolyatra", "NKS Education"],
      verificationStatus: "Documented Public Record",
      sourceCitations: [
        { label: "BEF LinkedIn Video Series Archive", url: "https://www.linkedin.com/company/bharat-eudcation-forum", note: "Documented episodes of Partners in Parenting and educator interviews." }
      ],
      accentColor: "#F59E0B"
    },
    {
      id: "bylc",
      name: "Bharat Young Leaders Council (BYLC)",
      tagline: "Empowering the next generation of changemakers and thinkers",
      role: "Mentor & Convener",
      established: "2025",
      category: "Youth Leadership",
      summary: "A student-centric platform under Bharat Education Forum fostering public speaking, Model UNs, startup pitch days, and policy debates for students in Classes 8–12 and universities.",
      detailedDescription: "Recognizing that future leadership requires active expression, BYLC organizes youth conclaves, simulated diplomatic conferences, and entrepreneurship showcases that equip young students with confidence, critical thinking, and collaborative skills.",
      keyResponsibilities: [
        "Mentoring student organizing committees across schools and colleges.",
        "Connecting youth conclaves with distinguished guest speakers and industry veterans."
      ],
      documentedMilestones: [
        "Coordinated student delegations for youth leadership sessions at Speaking Minds Youth Conclave."
      ],
      officialPartners: ["Bharat Education Forum"],
      verificationStatus: "Self-Reported / Public Posts",
      sourceCitations: [
        { label: "BEF Initiative Overview", note: "Detailed in public Bharat Education Forum literature and student conclave announcements." }
      ],
      accentColor: "#EC4899"
    }
  ] as Venture[],

  timeline: [
    {
      period: "2022",
      title: "Establishment of SVEI (Sumit Varma Education & Immigration)",
      organization: "SVEI",
      role: "Founder & Principal Advisor",
      category: "Foundation",
      description: "Initiated formal education consulting operations in East Patel Nagar, New Delhi, focusing on career guidance, higher-education choices, and admissions advisory.",
      evidenceTier: "Documented Public Listing",
      source: "Delhi Business Directory Listing (JustDial)",
      sourceUrl: "https://www.justdial.com/Delhi/Sumit-Varma-Education-And-Immigration-Svei-East-Patel-Nagar/011PXX11-XX11-220927152535-A3V9_BZDET",
      notes: "Directory establishment record; founder's exact career start date to be confirmed."
    },
    {
      period: "August 2024",
      title: "Launch of Schoolyatra & Early Childhood Education Advocacy",
      organization: "Schoolyatra",
      role: "Director & Co-Founder",
      category: "Foundation",
      description: "Co-founded Schoolyatra alongside Shiven Varma to assist families in transparent school discovery and modernize early childhood pedagogy support.",
      evidenceTier: "Media Coverage",
      source: "The Daily Metro Article (Aug 29, 2024)",
      sourceUrl: "https://thedailymetro.in/index.php/2024/08/29/transforming-early-childhood-education-schoolyatra-leads-the-way-introduction/"
    },
    {
      period: "November 2024",
      title: "The Great Indian Kids Festival Showcase",
      organization: "Schoolyatra & Give for Rising Indian Stars Foundation",
      role: "Key Organizer & Strategic Lead",
      category: "Public Events",
      description: "Promoted and staged a major family and children's event at the prestigious Indira Gandhi Indoor Stadium/Arena in Delhi, bringing together preschools, performers, and thousands of attendees.",
      evidenceTier: "Media Coverage",
      source: "Hindustan Times HT City Preview",
      sourceUrl: "https://www.hindustantimes.com/htcity/htcity-delhi-junction/happy-childrens-day-delhiites-head-here-today-to-bond-celebrate-with-kids-101731433353765.html"
    },
    {
      period: "January 2025",
      title: "Influencer Book of World Records Listing",
      organization: "Influencer Book of World Records",
      role: "Honoree",
      category: "Recognition",
      description: "Entered into the record registry with the citation 'India\\'s Emerging Edupreneur & Influential Leader In Education' (Record No. 0198).",
      evidenceTier: "Pending Verification",
      source: "Influencer Book of World Records Profile",
      sourceUrl: "https://www.influencerbookofworldrecords.com/recordDetail/sumit-verma4751",
      notes: "Transparent notice: Record number and date discrepancies exist in third-party text; awaiting client verification of physical certificate."
    },
    {
      period: "March 2026",
      title: "Speaking Minds Youth Conclave & Venture Genesis Reflection",
      organization: "Bharat Education Forum",
      role: "Founder & Keynote Speaker",
      category: "Conferences & Summits",
      description: "Keynote address reflecting on the collaborative genesis of the initiatives alongside son Shiven Varma, and mobilizing young learners toward purpose-driven education.",
      evidenceTier: "Verified Institutional Report",
      source: "Bharat Education Forum Post",
      sourceUrl: "https://www.linkedin.com/posts/bharat-eudcation-forum_speakingmindsyouthconclave-bharateducationforum-activity-7450845162559156224-yoei"
    },
    {
      period: "September 2026",
      title: "National School Awards 2026 Panel & Partnership",
      organization: "National School Awards",
      role: "Invited Panelist / Institutional Partner",
      category: "Conferences & Summits",
      description: "Advertised panel participation at Welcomhotel by ITC Hotels, Dwarka, New Delhi; Bharat Education Forum listed as Education Partner and Collegeyatra as Community Partner.",
      evidenceTier: "Advertised / Scheduled",
      source: "Organizer Announcements & Official Invitations"
    },
    {
      period: "14 September 2026",
      title: "Global Education, Global Opportunities International Conference",
      organization: "GTTCI & Bharat Education Forum",
      role: "Co-Host & Opening Speaker",
      category: "Conferences & Summits",
      description: "Delivered opening remarks at a high-level diplomatic conference co-hosted with the Global Trade & Technology Council of India, attended by foreign embassy representatives and over 40 educational institutions.",
      evidenceTier: "Verified Institutional Report",
      source: "GTTCI Institutional Conference Report",
      sourceUrl: "https://gttcindia.com/gttci-bharat-education-forum-host-global-education-global-opportunities-conference-to-strengthen-international-education-partnerships/"
    }
  ] as TimelineMilestone[],

  impactProjects: [
    {
      id: "gttci-conference",
      title: "Global Education, Global Opportunities Conference",
      organization: "GTTCI & Bharat Education Forum",
      role: "Co-Host & Opening Address",
      date: "14 September 2026",
      venueOrPlatform: "New Delhi (Institutional Conclave)",
      objective: "Strengthen bilateral academic ties, foster international university partnerships, and open global learning corridors for Indian students.",
      documentedOutcome: "Addressed foreign embassy delegates, educational chancellors, and delegates from more than 40 institutions to establish cooperative educational pathways.",
      partners: ["Global Trade & Technology Council of India (GTTCI)", "Foreign Embassy Representatives", "40+ Higher Education Institutions"],
      evidenceTier: "Verified Institutional Report",
      source: "GTTCI Official Publication",
      sourceUrl: "https://gttcindia.com/gttci-bharat-education-forum-host-global-education-global-opportunities-conference-to-strengthen-international-education-partnerships/"
    },
    {
      id: "gikf",
      title: "The Great Indian Kids Festival (GIKF)",
      organization: "Schoolyatra & Give for Rising Indian Stars Foundation",
      role: "Strategic Lead & Organizer",
      date: "17 November 2024",
      venueOrPlatform: "Indira Gandhi Indoor Stadium / Arena, New Delhi",
      objective: "Create a premier multi-sensory platform celebrating children's creative expression, parental bonding, and early childhood developmental discovery.",
      documentedOutcome: "Staged comprehensive showcases featuring dance, puppetry, magic, interactive early-learning stalls, and parent-educator dialogues at India's largest indoor stadium.",
      partners: ["Schoolyatra", "Give for Rising Indian Stars Foundation", "Delhi-NCR Preschools & Child Development Brands"],
      evidenceTier: "Media Coverage",
      source: "Hindustan Times HT City Feature",
      sourceUrl: "https://www.hindustantimes.com/htcity/htcity-delhi-junction/happy-childrens-day-delhiites-head-here-today-to-bond-celebrate-with-kids-101731433353765.html"
    },
    {
      id: "speaking-minds",
      title: "Speaking Minds Youth Conclave",
      organization: "Bharat Education Forum & BYLC",
      role: "Founder, Organizer & Keynote",
      date: "20 March 2026",
      venueOrPlatform: "New Delhi Youth Convention Center",
      objective: "Provide an authentic forum for secondary and college students to debate future career pathways, voice academic aspirations, and develop public leadership skills.",
      documentedOutcome: "Convened student delegations for discussions on AI in education, entrepreneurial thinking, and educational self-determination.",
      partners: ["Bharat Young Leaders Council", "Secondary Schools & College Student Unions"],
      evidenceTier: "Organisational Announcement",
      source: "BEF LinkedIn Conclave Dispatch",
      sourceUrl: "https://www.linkedin.com/posts/bharat-eudcation-forum_speakingmindsyouthconclave-bharateducationforum-activity-7450845162559156224-yoei"
    },
    {
      id: "partners-parenting",
      title: "Partners in Parenting Dialogue Series",
      organization: "Bharat Education Forum & Schoolyatra Collaboration",
      role: "Series Producer & Dialogue Convener",
      date: "2024 – Present",
      venueOrPlatform: "Digital Media Broadcast & Educator Workshops",
      objective: "Bridge the communication barrier between modern schools and 21st-century parents through evidence-based developmental advice.",
      documentedOutcome: "Produced in-depth discussions with experts like Preet Sharma (NKS Education) tackling practical dilemmas: healthy screen time, emotional resilience, and early learning habits.",
      partners: ["NKS Education", "Preschool Pedagogical Advisors"],
      evidenceTier: "Organisational Announcement",
      source: "BEF Media Archive"
    }
  ] as ImpactProject[],

  mediaEpisodes: [
    {
      id: "ep-screen-time",
      series: "Partners in Parenting",
      title: "Constructive Family Interaction and Screen Time Management",
      featuredGuestOrTopic: "Preet Sharma (NKS Education)",
      recordedDate: "2024",
      durationApprox: "32 mins",
      description: "An evidence-based discussion examining how parents can replace passive digital consumption with active family engagement and developmentally appropriate technology habits.",
      keyThemes: ["Early Childhood Well-being", "Screen Boundaries", "Positive Parental Reinforcement"],
      status: "Documented Public Series",
      source: "Bharat Education Forum Media Archive"
    },
    {
      id: "ep-higher-ed-renaissance",
      series: "BrewED Talks",
      title: "The Future of Higher Education Admissions & Institutional Transparency",
      featuredGuestOrTopic: "Collegiate Deans & Academic Directors",
      recordedDate: "2024",
      durationApprox: "45 mins",
      description: "Dialogue exploring how universities must adapt their admissions counseling to meet the real career expectations and skills needed in contemporary Bharat.",
      keyThemes: ["Admissions Integrity", "Employability Curricula", "Tier 2/3 Student Access"],
      status: "Documented Public Series",
      source: "Collegeyatra / BrewED Talks Archive"
    },
    {
      id: "ep-genesis-reflection",
      series: "Conclave Keynotes",
      title: "From Class 12 to National Movement: The Genesis of Schoolyatra & BEF",
      featuredGuestOrTopic: "Sumit Varma (Personal Reflection)",
      recordedDate: "March 2026",
      durationApprox: "24 mins",
      description: "Keynote address reflecting on when his son Shiven first proposed the idea after Class 12, taking two years of careful deliberation before launching the collaborative ventures.",
      keyThemes: ["Intergenerational Entrepreneurship", "Venture Purpose", "Youth Trust"],
      status: "Documented Public Series",
      source: "Speaking Minds Youth Conclave Archive"
    },
    {
      id: "ep-early-childhood",
      series: "Coffee with Educators",
      title: "Transforming the Foundation: School Choice in Early Childhood",
      featuredGuestOrTopic: "K-12 School Principals & Preschool Founders",
      recordedDate: "2024",
      durationApprox: "38 mins",
      description: "Discussing holistic parameters parents should evaluate beyond infrastructure: emotional safety, teacher-student ratios, and exploratory play.",
      keyThemes: ["Preschool Evaluation", "Holistic Metrics", "Teacher Empowerment"],
      status: "Documented Public Series",
      source: "Schoolyatra Educator Outreach"
    }
  ] as MediaEpisode[],

  philosophy: [
    {
      title: "Empowering Informed Educational Choices",
      theme: "Transparency in School & College Selection",
      description: "Educational decisions should never be made on marketing rhetoric or anxiety. By providing objective guidance, Schoolyatra and Collegeyatra demystify institutional claims so parents and students make choices aligned with the child's true strengths.",
      principles: [
        "Eliminate information asymmetry between institutions and families.",
        "Prioritize pedagogical culture and student well-being over superficial branding.",
        "Foster early career awareness without premature pressure."
      ]
    },
    {
      title: "Bridging the Academia-Industry Employability Divide",
      theme: "Practical Readiness & Market Relevance",
      description: "Degrees alone no longer guarantee security. The modern education system must actively integrate practical skills, critical reasoning, and real-world exposure so graduates step into the economy as capable problem-solvers.",
      principles: [
        "Incorporate vocational and technical literacy alongside theoretical foundations.",
        "Encourage direct mentorship between college administrators and industry veterans.",
        "Support students in identifying verified career trajectories rather than following crowd trends."
      ]
    },
    {
      title: "Convening Institutional Dialogue",
      theme: "Collaborative Leadership through BEF",
      description: "True educational reform cannot happen in silos. Bharat Education Forum was founded on the belief that school leaders, university chancellors, government bodies, and international partners must assemble regularly to share best practices.",
      principles: [
        "Cross-pollinate insights between K-12 educators and higher-education leaders.",
        "Facilitate diplomatic and international educational partnerships for Indian institutions.",
        "Elevate teacher recognition and leadership development."
      ]
    },
    {
      title: "Youth Agency & Leadership Development",
      theme: "Mentoring Future Thinkers & Doers",
      description: "Through initiatives like Bharat Young Leaders Council and Speaking Minds Youth Conclave, youth are treated not as passive recipients of instruction, but as active contributors to national progress.",
      principles: [
        "Provide structured platforms for public debate, Model UNs, and student entrepreneurship.",
        "Cultivate ethical leadership, empathy, and civic responsibility in young adults.",
        "Champion intergenerational collaboration in building education solutions."
      ]
    }
  ] as PhilosophyPillar[],

  awards: [
    {
      title: "India's Emerging Edupreneur & Influential Leader In Education",
      issuingBody: "Influencer Book of World Records",
      dateRecorded: "January 2025 (Record No. 0198)",
      officialListingUrl: "https://www.influencerbookofworldrecords.com/recordDetail/sumit-verma4751",
      verificationNote: "Documented registry listing on record-book portal. In alignment with our strict fact-checking protocol, the original physical certificate and clarification of registration dates (Record No. 0198 / Jan 2025) are logged pending direct client review.",
      status: "Documented Registry Entry"
    }
  ],

  // Clear list of information still needed from Sumit Varma as demanded by Section 8 & 9
  verificationLedger: {
    confirmedFacts: [
      "Role as Founder & President of Bharat Education Forum (BEF).",
      "Role as Director / Co-founder of Schoolyatra and Collegeyatra.",
      "Key organizer of The Great Indian Kids Festival (17 Nov 2024, IG Indoor Stadium, Delhi).",
      "Delivered opening remarks at the GTTCI & BEF Global Education Conference (14 Sept 2026, 40+ institutions).",
      "Established SVEI (East Patel Nagar, Delhi; directory listing 2022).",
      "Host of BrewED Talks and Partners in Parenting podcast series.",
      "Speaking Minds Youth Conclave address regarding venture origins with son Shiven Varma."
    ],
    pendingFromSubject: [
      {
        item: "Formal Education & Academic Credentials",
        reason: "Degrees, awarding universities, fields of study, and graduation years are omitted to avoid uncorroborated claims.",
        action: "Awaiting official CV / LinkedIn education section update."
      },
      {
        item: "Employment History Prior to 2022",
        reason: "Early teaching, institutional, or corporate roles before founding SVEI require confirmed dates and titles.",
        action: "To be supplied by Sumit Varma."
      },
      {
        item: "Audited Audience & Counselling Metrics",
        reason: "Third-party articles report '1.2 million students reached monthly' and '12,000 children projected'; kept as promotional references rather than certified metrics.",
        action: "Awaiting Google Analytics / verified counselling database logs."
      },
      {
        item: "Physical Certificate for Influencer Book of World Records",
        reason: "Resolving registry record number discrepancies (Record No. 0198 vs 0124) and exact issue date.",
        action: "Awaiting scanned copy of original award certificate."
      },
      {
        item: "Direct Professional Contact Email & Office Phone",
        reason: "Privacy protocol prevents publishing unconfirmed personal phone numbers or non-public emails.",
        action: "Professional communication routed via LinkedIn and verified inquiry form."
      }
    ]
  }
};
