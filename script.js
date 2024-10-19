const quests = {
    year1: [
    {
        title: "Community Engagement",
        type: "Experiential Learning",
        description: "Participate in community projects, charities, or organizations related to biochemistry or healthcare.",
        skillTree: "leadership-teamwork",
        reason: "Demonstrates commitment to your field and community while providing hands-on experience in scientific or healthcare settings.",
        url: "https://www.aston.ac.uk/careers/get-experience/part-time-jobs-and-volunteering",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image1.jpg",
        year: 1
    },
    {
        title: "Professional Experience Acquisition",
        type: "Work Experience",
        description: "Seek part-time employment or summer internships in laboratories or biotech companies.",
        skillTree: "leadership-teamwork",
        reason: "Develops professional skills, demonstrates responsibility, and enhances time management abilities.",
        url: "https://www.aston.ac.uk/careers/get-experience/part-time-jobs-and-volunteering",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image2.jpg",
        year: 1
    },
    {
        title: "Career Services Introduction",
        type: "Career Development",
        description: "Familiarize yourself with the Careers and Placements team and their resources.",
        skillTree: "networking-communication",
        reason: "Early engagement with career services provides valuable support for future professional development.",
        url: "https://www.aston.ac.uk/careers/contact-us",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image12.jpg",
        year: 1
    },
    {
        title: "Independent Research Initiatives",
        type: "Professional Development",
        description: "Initiate a science blog or conduct a small research project in an area of interest.",
        skillTree: "leadership-teamwork",
        reason: "Demonstrates initiative, creativity, and genuine interest in biochemistry beyond coursework.",
        url: "https://astonfutures.aston.ac.uk/",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image3.jpg",
        year: 1
    },
    {
        title: "Extracurricular Engagement",
        type: "Skill Development",
        description: "Join relevant societies such as Aston's BioSoc or the Biochemical Society.",
        skillTree: "networking-communication",
        reason: "Develops soft skills and provides opportunities for leadership experience.",
        url: "https://www.astonsu.com/activities/clubsandsocieties/",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image4.jpg",
        year: 1
    },
    {
        title: "Early Placement Preparation",
        type: "Career Planning",
        description: "Begin researching and preparing for placement opportunities well in advance.",
        skillTree: "networking-communication",
        reason: "Early preparation is crucial as many large employers open applications in October of the second year.",
        url: "https://www.aston.ac.uk/careers/placements",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image7.jpg",
        year: 1
    },
    {
        title: "Career Exploration",
        type: "Self-Assessment",
        description: "Utilize resources to explore career options and identify personal strengths and motivations.",
        skillTree: "networking-communication",
        reason: "Self-awareness and career exploration help identify suitable and enjoyable career paths.",
        url: "https://www.aston.ac.uk/careers/which-career/explore-your-options",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image13.jpg",
        year: 1
    },
    {
        title: "Professional Development Events",
        type: "Skill Enhancement",
        description: "Attend networking events, seminars, and inaugural professorial talks.",
        skillTree: "academic-excellence",
        reason: "Enhances presentation skills and expands professional network.",
        url: "https://www.youtube.com/@astonoriginals/videos",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image5.jpg",
        year: 1
    },
    {
        title: "Summer Skill Development",
        type: "Career Preparation",
        description: "Gain work experience, research industries, and practice psychometric tests during the summer break.",
        skillTree: "networking-communication",
        reason: "Builds skills, industry knowledge, and prepares for future placement applications.",
        url: "https://www.aston.ac.uk/careers/cv/psychometric-testing-and-assessment-centres",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image14.jpg",
        year: 1
    },
    {
        title: "Career Podcast Engagement",
        type: "Self-Directed Learning",
        description: "Listen to career-focused podcasts about placements and next steps.",
        skillTree: "networking-communication",
        reason: "Provides accessible information about career development and placement opportunities.",
        url: "https://open.spotify.com/episode/6ZpVkF69yhvKVIgXLEG1RS",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image15.jpg",
        year: 1
    },
    {
        title: "Critical Analysis in Biochemistry",
        type: "Cognitive Development",
        description: "Engage in workshops to enhance critical thinking and analytical skills in scientific contexts.",
        skillTree: "academic-excellence",
        reason: "Crucial for analyzing complex information and developing innovative solutions in biochemistry.",
        url: "https://www.edx.org/course/critical-thinking-skills-for-university-success",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image16.jpg",
        year: 1
    },
    {
        title: "Research Ethics Foundation",
        type: "Professional Development",
        description: "Complete a course on ethics in biochemical research and practice.",
        skillTree: "professional-skills",
        reason: "Essential for maintaining integrity and making responsible decisions in scientific research.",
        url: "https://www.edx.org/course/ethics-in-life-sciences-and-healthcare",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image17.jpg",
        year: 1
    },
    {
        title: "Fundamental Microbiology Skills",
        type: "Technical Training",
        description: "Master basic microbiology techniques including aseptic technique, culture methods, and microscopy.",
        skillTree: "technical-proficiency",
        reason: "Foundational skills essential for various areas of biochemistry research and industry applications.",
        url: "https://www.asmscience.org/content/education",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image19.jpg",
        year: 1
    },
    {
        title: "Nucleic Acid Extraction Techniques",
        type: "Laboratory Skill",
        description: "Participate in hands-on workshops on DNA and RNA extraction methods.",
        skillTree: "technical-proficiency",
        reason: "Fundamental skill in molecular biology and biochemistry research.",
        url: "https://www.promega.com/resources/guides/nucleic-acid-analysis/",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image19.jpg",
        year: 1
    },
    {
        title: "PCR and Electrophoresis Training",
        type: "Technical Skill",
        description: "Engage in practical sessions on PCR techniques and gel electrophoresis for DNA analysis.",
        skillTree: "technical-proficiency",
        reason: "Essential techniques in molecular biology and genetic engineering.",
        url: "https://www.ncbi.nlm.nih.gov/probe/docs/techpcr/",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image19.jpg",
        year: 1
    },
    {
        title: "Biochemistry Critical Thinking",
        type: "Analytical Skill",
        description: "Develop critical thinking skills applied to biochemical concepts and research methodologies.",
        skillTree: "academic-excellence",
        reason: "Fundamental for analyzing complex biochemical processes and evaluating scientific literature.",
        url: "https://www.nature.com/articles/s41578-020-0212-3",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image16.jpg",
        year: 1
    },
    {
        title: "Scientific Method Mastery",
        type: "Research Methodology",
        description: "Learn principles of the scientific method and design of robust biochemistry experiments.",
        skillTree: "academic-excellence",
        reason: "Crucial for conducting valid and reproducible research in biochemistry.",
        url: "https://www.nature.com/articles/nmeth.2613",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image16.jpg",
        year: 1
    },
    {
        title: "Literature Review Proficiency",
        type: "Research Skill",
        description: "Develop skills in finding, reading, and critically analyzing scientific papers in biochemistry.",
        skillTree: "academic-excellence",
        reason: "Essential for staying current in the field and conducting thorough background research.",
        url: "https://www.sciencedirect.com/science/article/pii/S0968000416300646",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image16.jpg",
        year: 1
    },
    {
        title: "Biochemical Calculations",
        type: "Quantitative Skill",
        description: "Master fundamental calculations used in biochemistry, including solution preparation and enzyme kinetics.",
        skillTree: "academic-excellence",
        reason: "Crucial for accurate experimental work and data analysis in biochemistry.",
        url: "https://www.rsc.org/Education/Teachers/Resources/cfb/calculations.htm",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image16.jpg",
        year: 1
    },
    {
        title: "Scientific Writing for Biochemistry",
        type: "Communication Skill",
        description: "Learn principles of academic writing specific to biochemistry, including lab reports and research papers.",
        skillTree: "academic-excellence",
        reason: "Essential for effectively communicating research findings and ideas in biochemistry.",
        url: "https://chem.libretexts.org/Courses/University_of_Arkansas_Little_Rock/CHEM_1406%3A_Introduction_to_Chemistry/00%3A_Front_Matter/0.5%3A_Writing_Lab_Reports",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image16.jpg",
        year: 1
    },
    {
        title: "Collaborative Laboratory Skills",
        type: "Teamwork",
        description: "Engage in paired and small group laboratory exercises, focusing on effective collaboration.",
        skillTree: "leadership-teamwork",
        reason: "Crucial for success in biochemistry research and industry roles.",
        url: "https://www.nature.com/articles/d41586-018-05515-0",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image18.jpg",
        year: 1
    },
    {
        title: "Biochemical Processes Presentation",
        type: "Group Project",
        description: "Work in a team to research and present on a complex biochemical process.",
        skillTree: "leadership-teamwork",
        reason: "Develops teamwork, delegation, and presentation skills while reinforcing biochemistry knowledge.",
        url: "https://www.lifescied.org/doi/10.1187/cbe.18-07-0120",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image18.jpg",
        year: 1
    },
    {
        title: "Peer Study Group Leadership",
        type: "Leadership Development",
        description: "Participate in and eventually lead study groups focusing on challenging biochemistry topics.",
        skillTree: "leadership-teamwork",
        reason: "Develops leadership skills and deepens understanding of biochemistry concepts.",
        url: "https://www.tandfonline.com/doi/full/10.1080/09500693.2018.1521531",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image18.jpg",
        year: 1
    },
    {
        title: "Laboratory Safety Management",
        type: "Professional Responsibility",
        description: "Take on the role of lab safety officer during practical sessions.",
        skillTree: "leadership-teamwork",
        reason: "Builds leadership skills and instills a sense of responsibility in lab work.",
        url: "https://www.acs.org/content/acs/en/chemical-safety/basics.html",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image18.jpg",
        year: 1
    },
    {
        title: "Interdisciplinary Collaboration",
        type: "Cross-functional Teamwork",
        description: "Participate in team challenges requiring collaboration with students from other scientific disciplines.",
        skillTree: "leadership-teamwork",
        reason: "Develops ability to work in diverse teams and apply biochemistry knowledge in broader contexts.",
        url: "https://www.nature.com/articles/d41586-019-00350-3",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image18.jpg",
        year: 1
    },
    {
        title: "Biochemistry Career Pathways",
        type: "Career Exploration",
        description: "Attend seminars exploring various career paths in biochemistry, including academia, industry, and government roles.",
        skillTree: "placement-preparation",
        reason: "Helps identify potential placement opportunities and long-term career goals in biochemistry.",
        url: "https://www.biochemistry.org/education/careers/",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image21.jpg",
        year: 1
    },
    {
        title: "CV Crafting for Biochemists",
        type: "Professional Documentation",
        description: "Learn to create and tailor a CV for biochemistry placements and entry-level positions.",
        skillTree: "placement-preparation",
        reason: "Essential for securing placement interviews and making a strong first impression.",
        url: "https://www.prospects.ac.uk/careers-advice/cvs-and-cover-letters/example-cvs/science-cv",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image21.jpg",
        year: 1
    },
    {
        title: "CV Crafting for Biochemists",
        type: "Professional Documentation",
        description: "Learn to create and tailor a CV for biochemistry placements and entry-level positions.",
        skillTree: "placement-preparation",
        reason: "Essential for securing placement interviews and making a strong first impression.",
        url: "https://www.prospects.ac.uk/careers-advice/cvs-and-cover-letters/example-cvs/science-cv",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image21.jpg",
        year: 1
    },
    {
        title: "Laboratory Skills Documentation",
        type: "Professional Portfolio",
        description: "Develop a comprehensive portfolio documenting all laboratory techniques and skills acquired.",
        skillTree: "placement-preparation",
        reason: "Provides concrete evidence of practical abilities to potential placement providers.",
        url: "https://www.asbmb.org/education/student-chapters/resources/career-resources",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image21.jpg",
        year: 1
    },
    {
        title: "Digital Professional Presence",
        type: "Online Branding",
        description: "Create and maintain a professional online presence on platforms like LinkedIn.",
        skillTree: "placement-preparation",
        reason: "Attracts potential placement providers and demonstrates digital literacy.",
        url: "https://www.nature.com/articles/d41586-018-05823-5",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image21.jpg",
        year: 1
    },
    {
        title: "Placement Application Strategies",
        type: "Career Preparation",
        description: "Attend workshops on searching and applying for biochemistry placements, including cover letter writing.",
        skillTree: "placement-preparation",
        reason: "Increases chances of success by understanding the placement application process early.",
        url: "https://www.prospects.ac.uk/jobs-and-work-experience/work-experience-and-internships",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image21.jpg",
        year: 1
    },
    {
        title: "Scientific Presentation Techniques",
        type: "Communication Skill",
        description: "Learn to create and deliver effective presentations on biochemistry topics.",
        skillTree: "networking-communication",
        reason: "Critical for academic success and future career prospects in biochemistry.",
        url: "https://www.nature.com/articles/d41586-019-01723-4",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image20.jpg",
        year: 1
    },
    {
        title: "Scientific Writing Proficiency",
        type: "Communication Skill",
        description: "Participate in workshops on writing clear lab reports, research summaries, and scientific abstracts.",
        skillTree: "networking-communication",
        reason: "Essential for effectively communicating research findings in academia and industry.",
        url: "https://www.nature.com/articles/d41586-019-02918-5",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image20.jpg",
        year: 1
    },
    {
        title: "Professional Networking in Science",
        type: "Career Development",
        description: "Learn basics of professional networking in scientific contexts.",
        skillTree: "networking-communication",
        reason: "Can lead to collaboration opportunities, placements, and job prospects in biochemistry.",
        url: "https://www.sciencemag.org/careers/2019/11/how-network-effectively",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image20.jpg",
        year: 1
    },
    {
        title: "Digital Scientific Communication",
        type: "Modern Skills",
        description: "Develop skills in using digital platforms for scientific communication.",
        skillTree: "networking-communication",
        reason: "Increasingly important for disseminating research, networking, and staying current in biochemistry.",
        url: "https://www.nature.com/articles/d41586-019-00535-w",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image20.jpg",
        year: 1
    },
    {
        title: "Cross-Disciplinary Communication",
        type: "Versatile Communication",
        description: "Practice explaining biochemistry concepts to non-experts and collaborating across scientific disciplines.",
        skillTree: "networking-communication",
        reason: "Valuable for collaborative research and applying biochemistry in diverse contexts.",
        url: "https://www.nature.com/articles/d41586-018-06819-x",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image20.jpg",
        year: 1
    }  
    ],
    
    year2: [
    {
        title: "Placement Coordinator Consultation",
        type: "Career Planning",
        description: "Have a one-on-one meeting with the Placement Coordinator to discuss your career goals.",
        skillTree: "professional-skills",
        reason: "This meeting helps you understand the placement process and align your career goals with potential opportunities.",
        url: "https://www.aston.ac.uk/careers/contact-us",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image6.jpg",
        year: 2
    },
    {
        title: "Comprehensive Placement Preparation",
        type: "Professional Development",
        description: "Participate in all scheduled Placement Workshops to prepare for your placement year.",
        skillTree: "professional-skills",
        reason: "These workshops provide essential information and skills for securing and succeeding in your placement.",
        url: "https://www.aston.ac.uk/careers/placements",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image7.jpg",
        year: 2
    },
    {
        title: "Career Fair Engagement",
        type: "Networking",
        description: "Attend the Big Careers Fair and engage with at least 3 employers about opportunities.",
        skillTree: "networking-communication",
        reason: "Career fairs provide valuable opportunities to make connections with potential employers and explore career options.",
        url: "https://www.aston.ac.uk/careers/find-a-job/researching-employers",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image8.jpg",
        year: 2
    },
    {
        title: "Advanced Scientific Writing",
        type: "Communication",
        description: "Complete a course on effective scientific writing and reporting for biochemistry.",
        skillTree: "networking-communication",
        reason: "Strong writing skills are crucial for communicating research findings, preparing reports, and publishing papers in biochemistry.",
        url: "https://www.naturemastersclasses.com/courses/scientific-writing",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image20.jpg",
        year: 2
    },
    {
        title: "Biochemical Data Analysis",
        type: "Technical Skill",
        description: "Attend workshops on data analysis techniques using software like R or Python for biochemical data.",
        skillTree: "technical-proficiency",
        reason: "Proficiency in data analysis is essential in modern biochemistry research and industry roles.",
        url: "https://www.datacamp.com/courses/introduction-to-r",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image19.jpg",
        year: 2
    },
    {
        title: "Biochemistry Industry Networking",
        type: "Professional Development",
        description: "Attend biochemistry industry networking events or career fairs.",
        skillTree: "networking-communication",
        reason: "Building a professional network is crucial for finding placement opportunities and future career prospects in biochemistry.",
        url: "https://www.biochemistry.org/events/",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image20.jpg",
        year: 2
    },
    {
        title: "Applied Bioinformatics Project",
        type: "Technical Skill",
        description: "Undertake a bioinformatics project using tools like BLAST, Swiss-Model, or Python libraries for biological data analysis.",
        skillTree: "technical-proficiency",
        reason: "Bioinformatics skills are increasingly important in biochemistry for analyzing large datasets and understanding molecular structures.",
        url: "https://www.coursera.org/learn/bioinformatics",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image19.jpg",
        year: 2
    },
    {
        title: "Industry Placement Readiness",
        type: "Career Development",
        description: "Attend workshops focused on preparing for industry placements, including CV writing and interview skills.",
        skillTree: "placement-preparation",
        reason: "These workshops help you present your skills effectively and prepare for the placement application process.",
        url: "https://www.prospects.ac.uk/careers-advice/getting-a-job/interviews",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image21.jpg",
        year: 2
    },
    {
        title: "Science Communication Challenge",
        type: "Communication",
        description: "Participate in a science communication contest, explaining a complex biochemical concept to a general audience.",
        skillTree: "networking-communication",
        reason: "The ability to explain complex scientific ideas to non-experts is valuable in many careers, from research to science policy.",
        url: "https://www.britishscienceassociation.org/science-communication-competition",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image20.jpg",
        year: 2
    },
    {
        title: "Advanced Protein Purification",
        type: "Laboratory Skill",
        description: "Learn and practice various protein purification methods including chromatography and electrophoresis.",
        skillTree: "technical-proficiency",
        reason: "Protein purification is crucial for studying protein structure and function, a key aspect of biochemistry.",
        url: "https://www.gelifesciences.com/en/us/solutions/protein-research",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image19.jpg",
        year: 2
    },
    {
        title: "Spectroscopy and Chromatography Techniques",
        type: "Analytical Technique",
        description: "Comprehensive course covering theory and practice of various spectroscopic and chromatographic techniques.",
        skillTree: "technical-proficiency",
        reason: "These analytical methods are widely used in biochemistry for compound identification and quantification.",
        url: "https://www.edx.org/course/introduction-to-spectroscopy",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image19.jpg",
        year: 2
    },
    {
        title: "Advanced Cell Culture Techniques",
        type: "Laboratory Skill",
        description: "Learn mammalian and bacterial cell culture techniques, including maintenance, passaging, and transfection.",
        skillTree: "technical-proficiency",
        reason: "Cell culture is essential for many biochemistry experiments, particularly in areas like protein production and drug testing.",
        url: "https://www.thermofisher.com/uk/en/home/references/gibco-cell-culture-basics.html",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image19.jpg",
        year: 2
    },
    {
        title: "Biostatistics for Biochemistry Research",
        type: "Data Analysis",
        description: "Course covering statistical methods commonly used in biochemistry research, including experimental design and data interpretation.",
        skillTree: "academic-excellence",
        reason: "Strong statistical skills are crucial for designing experiments and interpreting results in biochemistry research.",
        url: "https://www.coursera.org/learn/biostatistics",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image16.jpg",
        year: 2
    },
    {
        title: "Scientific Programming for Biochemists",
        type: "Computational Skill",
        description: "Introduction to Python programming with a focus on applications in biochemistry data analysis and modeling.",
        skillTree: "technical-proficiency",
        reason: "Programming skills are valuable for data analysis, automation of tasks, and computational modeling in biochemistry.",
        url: "https://www.codecademy.com/learn/learn-python-3",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image19.jpg",
        year: 2
    },
    {
        title: "Good Laboratory Practice (GLP) Certification",
        type: "Professional Skills",
        description: "Training on GLP principles and their application in biochemistry research and industry.",
        skillTree: "professional-skills",
        reason: "Understanding and following GLP is crucial for ensuring the quality and integrity of laboratory work, especially important for placements and future employment.",
        url: "https://www.who.int/tdr/publications/documents/glp-handbook.pdf",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image17.jpg",
        year: 2
    },
    {
        title: "Biochemical Data Visualization Workshop",
        type: "Data Analysis",
        description: "Workshop on creating effective visualizations for biochemical data using tools like R or Python.",
        skillTree: "technical-proficiency",
        reason: "The ability to create clear, informative visualizations is crucial for communicating complex biochemical data and results.",
        url: "https://www.datacamp.com/courses/data-visualization-with-ggplot2-1",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image19.jpg",
        year: 2
    },
    {
        title: "Advanced Biochemical Data Analysis",
        type: "Analytical Skill",
        description: "Learn advanced statistical methods and data analysis techniques specific to biochemistry research.",
        skillTree: "academic-excellence",
        reason: "Proficiency in data analysis is crucial for interpreting experimental results and drawing valid conclusions in biochemistry research.",
        url: "https://www.coursera.org/learn/biostatistics",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image16.jpg",
        year: 2
    },
    {
        title: "Research Proposal Writing for Biochemistry",
        type: "Research Skill",
        description: "Learn how to write compelling research proposals for biochemistry projects.",
        skillTree: "academic-excellence",
        reason: "The ability to write strong research proposals is valuable for securing funding and opportunities in both academic and industry settings.",
        url: "https://www.nature.com/articles/d41586-019-03914-5",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image16.jpg",
        year: 2
    },
    {
        title: "Advanced Molecular Biology Theory",
        type: "Theoretical Knowledge",
        description: "Deep dive into advanced molecular biology concepts relevant to current biochemistry research.",
        skillTree: "academic-excellence",
        reason: "A strong theoretical foundation in advanced molecular biology is essential for understanding cutting-edge biochemistry research and techniques.",
        url: "https://www.nature.com/scitable/topic/molecular-biology-13",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image16.jpg",
        year: 2
    },
    {
        title: "Cutting-Edge Biochemistry Techniques Seminar",
        type: "Research Skill",
        description: "Attend seminars on current research techniques in biochemistry, including their applications and limitations.",
        skillTree: "academic-excellence",
        reason: "Understanding a wide range of research techniques and their appropriate applications is crucial for designing effective experiments and interpreting results.",
        url: "https://www.biochemistry.org/education/events-and-training/",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image16.jpg",
        year: 2
    },
    {
        title: "Advanced Programming for Biochemists",
        type: "Technical Skill",
        description: "Learn advanced programming skills (e.g., Python or R) specifically applied to biochemistry data analysis and modeling.",
        skillTree: "academic-excellence",
        reason: "Programming skills are increasingly important in biochemistry for data analysis, simulation, and modeling of biological systems.",
        url: "https://www.coursera.org/learn/python-genomics",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image16.jpg",
        year: 2
    },
    {
        title: "Biochemistry Journal Club",
        type: "Critical Analysis Skill",
        description: "Regularly participate in journal clubs focusing on recent significant publications in biochemistry.",
        skillTree: "academic-excellence",
        reason: "Journal club participation hones critical thinking skills, keeps students updated on current research, and improves scientific communication abilities.",
        url: "https://www.nature.com/articles/d41586-019-03938-x",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image16.jpg",
        year: 2
    },
    {
        title: "Interdisciplinary Biochemistry Applications",
        type: "Integrative Skill",
        description: "Explore the applications of biochemistry in related fields such as medicine, environmental science, or biotechnology.",
        skillTree: "academic-excellence",
        reason: "Understanding the broader applications of biochemistry enhances students' ability to see connections and potential research opportunities across disciplines.",
        url: "https://www.frontiersin.org/articles/10.3389/fmolb.2019.00001/full",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image16.jpg",
        year: 2
    },
    {
        title: "Biochemistry Research Team Simulation",
        type: "Leadership and Teamwork Skill",
        description: "Participate in a simulated research team environment, rotating through different roles including team leader, data analyst, and lab technician.",
        skillTree: "leadership-teamwork",
        reason: "This simulation provides hands-on experience in research team dynamics and leadership in a biochemistry context.",
        url: "https://www.nature.com/articles/d41586-018-05515-0",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image18.jpg",
        year: 2
    },
    {
        title: "Biochemistry Peer Mentoring",
        type: "Leadership Skill",
        description: "Mentor first-year biochemistry students, providing academic support and guidance.",
        skillTree: "leadership-teamwork",
        reason: "Peer mentoring develops leadership and communication skills while reinforcing fundamental biochemistry concepts.",
        url: "https://www.tandfonline.com/doi/full/10.1080/0305764X.2019.1645151",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image18.jpg",
        year: 2
    },
    {
        title: "Biochemistry Community Outreach",
        type: "Leadership and Communication Skill",
        description: "Lead a team in developing and delivering a biochemistry outreach project for local schools or community groups.",
        skillTree: "leadership-teamwork",
        reason: "This project develops leadership, teamwork, and science communication skills in a real-world context.",
        url: "https://www.biochemistry.org/education/public-engagement/",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image18.jpg",
        year: 2
    },
    {
        title: "Laboratory Equipment Management",
        type: "Leadership Skill",
        description: "Take on responsibility for managing and maintaining specific lab equipment, training peers on proper use.",
        skillTree: "leadership-teamwork",
        reason: "This develops leadership skills in a technical context and builds responsibility for shared resources.",
        url: "https://www.labmanager.com/management-tips/2019/09/four-tips-for-a-smooth-running-lab",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image18.jpg",
        year: 2
    },
    {
        title: "Collaborative Biochemistry Research Proposal",
        type: "Teamwork Skill",
        description: "Work in a team to develop a comprehensive research proposal for a novel biochemistry project.",
        skillTree: "leadership-teamwork",
        reason: "This project develops collaborative skills in a research context and prepares students for more advanced research planning.",
        url: "https://www.nature.com/articles/d41586-019-03914-5",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image18.jpg",
        year: 2
    },
    {
        title: "Biochemistry Society Leadership Role",
        type: "Leadership Skill",
        description: "Take on a leadership role in the university's biochemistry student society, organizing events and initiatives.",
        skillTree: "leadership-teamwork",
        reason: "This provides practical experience in leadership, event planning, and community building within the field of biochemistry.",
        url: "https://www.biochemistry.org/education/careers/",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image18.jpg",
        year: 2
    },
    {
        title: "Laboratory Conflict Resolution Workshop",
        type: "Teamwork Skill",
        description: "Participate in workshops focusing on managing conflicts and disagreements in laboratory and research team settings.",
        skillTree: "leadership-teamwork",
        reason: "Developing conflict resolution skills is crucial for maintaining productive and harmonious working relationships in biochemistry careers.",
        url: "https://www.nature.com/articles/d41586-018-07501-y",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image18.jpg",
        year: 2
    },
    {
        title: "Mock Biochemistry Placement Interviews",
        type: "Interview Skills",
        description: "Participate in mock interviews specific to biochemistry placements, receiving feedback on technical knowledge and communication skills.",
        skillTree: "placement-preparation",
        reason: "Practice interviews build confidence and help students articulate their knowledge and skills effectively to potential placement providers.",
        url: "https://www.sciencemag.org/careers/2019/11/how-put-your-best-foot-forward-faculty-job-interviews",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image21.jpg",
        year: 2
    },
    {
        title: "Biochemistry Industry-Academia Networking",
        type: "Networking Skills",
        description: "Attend networking events with representatives from biochemistry-related industries and academic research groups.",
        skillTree: "placement-preparation",
        reason: "Networking can lead to placement opportunities and helps students understand current trends and requirements in the field.",
        url: "https://www.nature.com/articles/d41586-019-00611-1",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image21.jpg",
        year: 2
    },
    {
        title: "Biochemistry Placement Proposal Development",
        type: "Project Planning",
        description: "Develop a mock proposal for a placement project, integrating current biochemistry research trends with industry or academic needs.",
        skillTree: "placement-preparation",
        reason: "This exercise helps students align their skills and interests with potential placement opportunities and demonstrates initiative to providers.",
        url: "https://www.nature.com/articles/d41586-019-03914-5",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image21.jpg",
        year: 2
    },
    {
        title: "Biochemistry Research Ethics Course",
        type: "Professional Ethics",
        description: "Complete a course on research ethics and integrity in biochemistry, covering topics like data management and responsible conduct.",
        skillTree: "placement-preparation",
        reason: "Understanding ethical considerations is crucial for any research-based placement and demonstrates professionalism to potential providers.",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6438430/",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image21.jpg",
        year: 2
    },
    {
        title: "Advanced Technical Writing for Biochemistry",
        type: "Communication Skills",
        description: "Enhance technical writing skills specific to biochemistry, including lab reports, research summaries, and standard operating procedures.",
        skillTree: "placement-preparation",
        reason: "Strong technical writing skills are valuable in both industry and academic placements, and demonstrate professional communication abilities.",
        url: "https://chem.libretexts.org/Courses/University_of_Arkansas_Little_Rock/CHEM_1406%3A_Introduction_to_Chemistry/00%3A_Front_Matter/0.5%3A_Writing_Lab_Reports",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image21.jpg",
        year: 2
    },
    {
        title: "Biochemistry Placement Experience Seminar",
        type: "Peer Learning",
        description: "Attend seminars where previous year's students share their placement experiences in various biochemistry settings.",
        skillTree: "placement-preparation",
        reason: "Learning from peers' experiences provides valuable insights into the placement process and helps set realistic expectations.",
        url: "https://www.timeshighereducation.com/student/advice/10-tips-choosing-work-placement",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image21.jpg",
        year: 2
    },
    {
        title: "Biochemistry Professional Certification Preparation",
        type: "Skill Enhancement",
        description: "Prepare for relevant professional certifications in biochemistry or related fields (e.g., Good Laboratory Practice, PCR techniques).",
        skillTree: "placement-preparation",
        reason: "Professional certifications can make students stand out to placement providers and demonstrate commitment to the field.",
        url: "https://www.asbmb.org/education/certification-program",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image21.jpg",
        year: 2
    },
    {
        title: "Advanced Biochemistry Presentation Techniques",
        type: "Communication Skill",
        description: "Learn advanced techniques for presenting complex biochemical data, including effective use of visual aids and handling Q&A sessions.",
        skillTree: "networking-communication",
        reason: "Advanced presentation skills are crucial for conferences, seminars, and job interviews in the biochemistry field.",
        url: "https://www.nature.com/articles/d41586-019-01723-4",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image20.jpg",
        year: 2
    },
    {
        title: "Biochemistry Poster Design and Presentation",
        type: "Communication Skill",
        description: "Design and present a scientific poster on a biochemistry research topic, learning best practices for visual communication of scientific data.",
        skillTree: "networking-communication",
        reason: "Poster presentations are common in scientific conferences and are an excellent way to network and share research findings.",
        url: "https://www.nature.com/articles/d41586-019-01932-x",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image20.jpg",
        year: 2
    },
    {
        title: "Networking at Biochemistry Conferences",
        type: "Networking Skill",
        description: "Learn strategies for effective networking at scientific conferences, including preparing elevator pitches and following up with contacts.",
        skillTree: "networking-communication",
        reason: "Conferences are key networking opportunities in the scientific community, often leading to collaborations and career opportunities.",
        url: "https://www.nature.com/articles/d41586-019-00611-1",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image20.jpg",
        year: 2
    },
    {
        title: "Public Engagement in Biochemistry",
        type: "Communication Skill",
        description: "Develop skills in communicating biochemistry concepts to the general public through workshops, writing, or multimedia projects.",
        skillTree: "networking-communication",
        reason: "Public engagement skills are valuable for careers in science policy, education, and research institutions focusing on outreach.",
        url: "https://www.nature.com/articles/d41586-019-03869-9",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image20.jpg",
        year: 2
    },
    {
        title: "Professional Communication in Biochemistry",
        type: "Communication Skill",
        description: "Learn to write professional emails, cover letters, and business documents relevant to the biochemistry industry and academia.",
        skillTree: "networking-communication",
        reason: "Effective written communication is crucial for professional networking, job applications, and day-to-day operations in any biochemistry career.",
        url: "https://www.nature.com/articles/d41586-018-06967-0",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image20.jpg",
        year: 2
    },
    {
        title: "Collaborative Research Communication in Biochemistry",
        type: "Communication Skill",
        description: "Practice communicating within a research team setting, including progress reports, team meetings, and collaborative problem-solving.",
        skillTree: "networking-communication",
        reason: "Effective team communication is essential for success in collaborative research environments common in biochemistry.",
        url: "https://www.nature.com/articles/d41586-018-07033-5",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image20.jpg",
        year: 2
    },
    {
        title: "Building a Biochemistry Professional Online Presence",
        type: "Networking Skill",
        description: "Develop and maintain a professional online presence through platforms like LinkedIn, ResearchGate, or a personal website.",
        skillTree: "networking-communication",
        reason: "An online professional presence can attract networking opportunities, showcase skills, and is increasingly important in the scientific community.",
        url: "https://www.nature.com/articles/d41586-018-05823-5",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image20.jpg",
        year: 2
    } 
        
    ], //keep
    
    year4: [ //keep

    {
        title: "Graduate Programme Applications",
        type: "Career Planning",
        description: "Research and apply for at least 3 graduate programmes (e.g., STP).",
        skillTree: "professional-skills",
        reason: "Applying for graduate programmes helps you transition from university to professional life in the biochemistry field.",
        url: "https://www.aston.ac.uk/careers/find-a-job/researching-employers",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image9.jpg",
        year: 4
    },
    {
        title: "Career Consultant Consultation",
        type: "Professional Development",
        description: "Schedule and attend a meeting with a Careers Consultant to discuss post-graduation plans in biochemistry.",
        skillTree: "professional-skills",
        reason: "Career consultants provide valuable guidance on your biochemistry career path and job search strategies.",
        url: "https://www.aston.ac.uk/careers/contact-us",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image6.jpg",
        year: 4
    },
    {
        title: "Alumni Networking in Biochemistry",
        type: "Professional Networking",
        description: "Connect with Alumni on LinkedIn and professionals working at companies of interest in the biochemistry sector.",
        skillTree: "networking-communication",
        reason: "Alumni connections can provide insights into different biochemistry career paths and potential job opportunities.",
        url: "https://www.aston.ac.uk/careers/cv/cvs-and-cover-letters",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image10.jpg",
        year: 4
    },
    {
        title: "Laboratory Leadership Development",
        type: "Professional Growth",
        description: "Participate in a program designed to develop leadership skills in a biochemistry laboratory setting.",
        skillTree: "leadership-teamwork",
        reason: "Leadership skills are valuable for managing research projects and teams in both academic and industry biochemistry settings.",
        url: "https://www.ibms.org/resources/news/laboratory-leadership-programme/",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image18.jpg",
        year: 4
    },
    {
        title: "Research Grant Writing Workshop",
        type: "Academic Skill",
        description: "Participate in a workshop where you write and present a mock biochemistry research grant proposal.",
        skillTree: "academic-excellence",
        reason: "Grant writing is a crucial skill in academic biochemistry research and helps develop your ability to articulate research ideas clearly and persuasively.",
        url: "https://www.nature.com/articles/d41586-019-03914-5",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image16.jpg",
        year: 4
    },
    {
        title: "Interdisciplinary Biochemistry Project",
        type: "Research Experience",
        description: "Collaborate on a research project that combines biochemistry with another field, such as computer science or environmental science.",
        skillTree: "academic-excellence",
        reason: "Interdisciplinary research experience demonstrates your ability to apply biochemistry knowledge in diverse contexts and collaborate across fields.",
        url: "https://www.nature.com/articles/d41586-019-03408-4",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image16.jpg",
        year: 4
    },
    {
        title: "Biochemistry Lab Management Simulation",
        type: "Leadership Training",
        description: "Participate in a simulation exercise focusing on managing a biochemistry research laboratory.",
        skillTree: "leadership-teamwork",
        reason: "This experience provides insight into the operational aspects of running a lab, a valuable skill for future biochemistry research leaders.",
        url: "https://www.labmanager.com/management-tips",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image18.jpg",
        year: 4
    },
    {
        title: "Biochemistry Job Application Strategies",
        type: "Career Preparation",
        description: "Attend workshops on job searching strategies, application techniques, and interview skills specific to biochemistry graduates.",
        skillTree: "graduate-employment",
        reason: "These skills are crucial for securing employment after graduation in the competitive field of biochemistry.",
        url: "https://www.biochemistry.org/education/careers/",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image22.jpg",
        year: 4
    },
    {
        title: "Biochemistry Software Development",
        type: "Technical Skill",
        description: "Develop a small software tool or script to solve a biochemistry-related problem.",
        skillTree: "technical-proficiency",
        reason: "Programming skills are increasingly valuable in biochemistry for data analysis, automation, and developing new research tools.",
        url: "https://www.codecademy.com/learn/learn-python-3",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image19.jpg",
        year: 4
    },
    {
        title: "Biochemistry Peer Mentoring",
        type: "Leadership Development",
        description: "Serve as a peer mentor for first-year biochemistry students.",
        skillTree: "leadership-teamwork",
        reason: "Mentoring develops your leadership skills and deepens your understanding of biochemistry concepts as you explain them to others.",
        url: "https://www.researchgate.net/publication/328912667_Peer_Mentoring",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image18.jpg",
        year: 4
    },
    {
        title: "Advanced Bioinformatics Workshop",
        type: "Technical Skill",
        description: "Hands-on workshop on using advanced bioinformatics tools for sequence analysis, structure prediction, and database searching in biochemistry.",
        skillTree: "technical-proficiency",
        reason: "Advanced bioinformatics skills are increasingly important in modern biochemistry for analyzing large datasets and understanding molecular structures.",
        url: "https://www.ebi.ac.uk/training/online/courses/",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image19.jpg",
        year: 4
    },
    {
        title: "Cutting-edge Molecular Biology Techniques",
        type: "Laboratory Skill",
        description: "Learn advanced techniques such as CRISPR-Cas9, RNA-seq, and ChIP-seq for biochemistry research.",
        skillTree: "technical-proficiency",
        reason: "Familiarity with cutting-edge molecular biology techniques is crucial for staying current in biochemistry research.",
        url: "https://www.nature.com/scitable/topic/scientific-approaches-and-techniques-16676555/",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image19.jpg",
        year: 4
    },
    {
        title: "Advanced Enzyme Kinetics Studies",
        type: "Research Skill",
        description: "Practical course on designing and conducting advanced enzyme kinetics experiments and inhibition studies.",
        skillTree: "technical-proficiency",
        reason: "Deep understanding of enzyme kinetics is fundamental to biochemistry and is crucial for areas like drug development and metabolic studies.",
        url: "https://www.khanacademy.org/science/biology/energy-and-enzymes/enzyme-regulation/v/basics-of-enzyme-kinetics-graphs",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image19.jpg",
        year: 4
    },
    {
        title: "Mass Spectrometry for Biochemists",
        type: "Analytical Technique",
        description: "Learn the principles and applications of mass spectrometry in advanced biochemical analysis, including proteomics and metabolomics.",
        skillTree: "technical-proficiency",
        reason: "Mass spectrometry is a powerful tool in biochemistry for analyzing complex biological samples and identifying molecules.",
        url: "https://www.thermofisher.com/uk/en/home/industrial/mass-spectrometry.html",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image19.jpg",
        year: 4
    },
    {
        title: "Advanced Structural Biology Techniques",
        type: "Research Skill",
        description: "Advanced course on techniques used in structural biology, including X-ray crystallography and NMR spectroscopy.",
        skillTree: "technical-proficiency",
        reason: "Understanding protein structures is crucial in biochemistry, with applications in drug design and understanding molecular mechanisms.",
        url: "https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/methods-for-determining-structure",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image19.jpg",
        year: 4
    },
    {
        title: "Advanced Bioinformatics Project",
        type: "Research Experience",
        description: "Undertake an advanced bioinformatics project, such as protein structure prediction or genomic data analysis in biochemistry.",
        skillTree: "technical-proficiency",
        reason: "Advanced bioinformatics skills are essential for modern biochemistry research, especially in areas like personalized medicine and drug discovery.",
        url: "https://www.coursera.org/specializations/bioinformatics",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image19.jpg",
        year: 4
    },
    {
        title: "Biochemistry Research Project Management",
        type: "Professional Skill",
        description: "Learn to plan, execute, and manage a substantial biochemistry research project.",
        skillTree: "leadership-teamwork",
        reason: "Project management skills are crucial for success in both academic research and industry roles in biochemistry.",
        url: "https://www.nature.com/articles/d41586-018-07860-6",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image18.jpg",
        year: 4
    },
    {
        title: "Scientific Paper Writing and Publication",
        type: "Academic Skill",
        description: "Workshop on writing and submitting scientific papers for publication in peer-reviewed biochemistry journals.",
        skillTree: "networking-communication",
        reason: "The ability to effectively communicate research findings through publications is essential for a career in biochemistry research.",
        url: "https://www.nature.com/articles/d41586-019-02918-5",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image20.jpg",
        year: 4
    },
    {
        title: "Ethics in Modern Biochemistry",
        type: "Professional Development",
        description: "Advanced seminar on ethical considerations in cutting-edge biochemistry and biotechnology research.",
        skillTree: "professional-skills",
        reason: "As biochemistry advances into new frontiers, understanding and navigating ethical issues becomes increasingly important for researchers and industry professionals.",
        url: "https://www.who.int/ethics/topics/human-genome-editing/en/",
        imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image17.jpg",
        year: 4
    }
        
    ], //keep
    anytime: [
        {
            title: "Develop your skills",
            type: "Skills Development",
            description: "Focus on developing and polishing skills that employers look for.",
            skillTree: "Technical Proficiency",
            reason: "Developing transferable skills makes you more versatile and valuable to potential employers.",
            links: [
                { name: "Careers and Placements", url: "https://www.aston.ac.uk/careers/cv/resource-library" },
                { name: "Skills need improving", url: "https://www.aston.ac.uk/current-students/support-services/disability-support/resources" },
                { name: "Polishing overall skills", url: "https://www.aston.ac.uk/current-students/learning-development-centre/academic-writing-and-study-support" }
            ],
            imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image11.jpg", //skills develop
            year: "anytime"
        },
        {
            title: "Set up a LinkedIn profile",
            type: "Professional Development",
            description: "Create a professional LinkedIn profile to start building your online presence.",
            skillTree: "Networking & Communication",
            reason: "A strong professional online presence showcases your seriousness about your career.",
            url: "https://www.aston.ac.uk/careers/cv/cvs-and-cover-letters",
            imageUrl: "https://raw.githubusercontent.com/simmsj3/cv-builder-5/main/images/image10.jpg", //linkedin
            year: "anytime"
        }
    ]
};

// Variables to track progress and the current year
let completedQuests = JSON.parse(localStorage.getItem('completedQuests')) || {};
let skillsProgress = JSON.parse(localStorage.getItem('skillsProgress')) || [];
let incompleteQuests = JSON.parse(localStorage.getItem('incompleteQuests')) || {};
let userPoints = JSON.parse(localStorage.getItem('userPoints')) || 0;
let currentYear = 'year1';

// Points map for each quest
const pointsMap = {
    "Volunteering": 50,
    "Part-time Job": 60,
    "Meet the Careers and Placements team": 40,
    "Personal Projects": 40,
    "Join a society or sports club": 20,
    "You can never start too early with placements": 30,
    "What are your options": 30,
    "Attend events, workshops, or external talks": 40,
    "Over the Summer": 30,
    "Prefer something to listen to?": 20,
    "Meet with Placement Coordinator": 80,
    "Attend All Placement Workshops": 70,
    "Attend The Big Careers Fair": 100,
    "Apply for Graduate Programmes": 70,
    "Meet with Careers Consultant": 60,
    "Connect with Alumni": 50,
    "Develop your skills": 40,
    "Set up a LinkedIn profile": 40
};

// Function to display quests based on selected year and skill category
function showQuests(year, skillCategory) {
    const questArea = document.getElementById('quest-area');
    const skillsArea = document.getElementById('skills-progress-area');
    skillsArea.style.display = "none";
    questArea.style.display = "block";
    questArea.innerHTML = ''; // Clear existing quests

    // Get the quests for the selected year
    let filteredQuests = quests[year] || [];

    // Filter quests based on the selected skill category
    if (skillCategory) {
        filteredQuests = filteredQuests.filter(quest => 
            quest.skillTree.toLowerCase().replace(/\s/g, '-') === skillCategory
        );
    }

    // Filter out completed quests
    filteredQuests = filteredQuests.filter(quest => !completedQuests[quest.title]);

    if (filteredQuests.length === 0) {
        questArea.innerHTML = "<p>No quests available for this category.</p>";
        return;
    }

    filteredQuests.forEach(quest => {
        const questDiv = document.createElement('div');
        questDiv.className = 'quest-item';

        // Generate links HTML
        let linksHtml = '';
        if (quest.links && Array.isArray(quest.links)) {
            quest.links.forEach(link => {
                linksHtml += `<a href="${link.url}" target="_blank">${link.name}</a><br>`;
            });
        } else if (quest.url) {
            linksHtml = `<a href="${quest.url}" target="_blank">Learn More</a>`;
        }

        questDiv.innerHTML = `
            <img src="${quest.imageUrl}" alt="${quest.title} image" class="task-image" style="width: 100px; height: auto; margin-right: 20px; float: left;">
            <h4>${quest.title}</h4>
            <p><strong>Type:</strong> ${quest.type}</p>
            <p>${quest.description}</p>
            <p><strong>Skills Developed:</strong> ${quest.skillTree}</p>
            <p><strong>Why it's Important:</strong> ${quest.reason}</p>
            <div>${linksHtml}</div>
            <button onclick="openModal('${quest.title}')">Mark as Completed</button>
            <div style="clear: both;"></div>
        `;
        questArea.appendChild(questDiv);
    });
}

// Display skill icons for selection
function showSkillIcons() {
    document.getElementById('skills-icons').style.display = 'flex';
    document.getElementById('quest-area').style.display = 'none';
}

// Event listener for skill icon clicks
document.querySelectorAll('.skill-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const skillCategory = icon.getAttribute('data-skill');
        showQuests(currentYear, skillCategory);
        document.getElementById('skills-icons').style.display = 'none';
    });
});

// Modal handling for completing quests
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");
const skillsForm = document.getElementById('skills-form');

modalClose.onclick = function() {
    modal.style.display = "none";
    skillsForm.innerHTML = ''; // Clear form when modal is closed
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        skillsForm.innerHTML = ''; // Clear form when modal is closed
    }
};

function openModal(questTitle) {
    modal.style.display = "block";
    skillsForm.innerHTML = `
        <label for="completion-date">Completion Date:</label>
        <input type="date" id="completion-date" name="completion-date">
        <h4>Select Skills Demonstrated</h4>
        <input type="checkbox" id="academic-excellence" name="skills" value="Academic Excellence">
        <label for="academic-excellence">Academic Excellence</label><br>
        <input type="checkbox" id="professional-skills" name="skills" value="Professional Skills">
        <label for="professional-skills">Professional Skills</label><br>
        <input type="checkbox" id="leadership-teamwork" name="skills" value="Leadership & Teamwork">
        <label for="leadership-teamwork">Leadership & Teamwork</label><br>
        <input type="checkbox" id="technical-proficiency" name="skills" value="Technical Proficiency">
        <label for="technical-proficiency">Technical Proficiency</label><br>
        <input type="checkbox" id="networking-communication" name="skills" value="Networking & Communication">
        <label for="networking-communication">Networking & Communication</label><br>
        <input type="checkbox" id="placements" name="skills" value="Placements">
        <label for="placements">Placements</label><br>
        <input type="checkbox" id="graduate-careers" name="skills" value="Graduate Careers">
        <label for="graduate-careers">Graduate Careers</label><br>
    `;

    const saveBtn = document.createElement('button');
    saveBtn.type = 'button';
    saveBtn.textContent = 'Save';
    saveBtn.id = 'save-completion';
    skillsForm.appendChild(saveBtn);

    document.getElementById('save-completion').onclick = function() {
        completeQuest(questTitle);
    };
}

function completeQuest(questTitle) {
    const completionDate = document.getElementById('completion-date').value;
    const skillsSelected = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(el => el.value);
    const evidence = skillsSelected.map(skill => ({
        skill: skill,
        evidence: document.getElementById(`evidence-${skill}`) ? document.getElementById(`evidence-${skill}`).value : ""
    }));

    const points = getQuestPoints(questTitle);
    userPoints += points;
    localStorage.setItem('userPoints', JSON.stringify(userPoints));

    if (!completedQuests[questTitle]) {
        completedQuests[questTitle] = [];
    }

    completedQuests[questTitle].push({
        date: completionDate,
        skills: skillsSelected,
        evidence: evidence
    });

    localStorage.setItem('completedQuests', JSON.stringify(completedQuests));
    updateSkillsProgress(skillsSelected, evidence);
    alert(`You've earned ${points} points for completing "${questTitle}"! Total points: ${userPoints}`);
    modal.style.display = "none";
    showQuests(currentYear); // Refresh the quest list
    updateLevelAndBadges(); // Update level and badges after completing the quest
}

// Update skill progress based on completed quests
function updateSkillsProgress(skills, evidence) {
    skills.forEach(skill => {
        skillsProgress.push({ skill: skill, evidence: evidence });
    });
    localStorage.setItem('skillsProgress', JSON.stringify(skillsProgress));
}

// Calculate skill progress
function calculateSkillProgress() {
    const skillCounts = {
        "Academic Excellence": 0,
        "Professional Skills": 0,
        "Leadership & Teamwork": 0,
        "Technical Proficiency": 0,
        "Networking & Communication": 0,
        "Placements": 0,
        "Graduate Careers": 0
    };

    skillsProgress.forEach(entry => {
        if (Array.isArray(entry.skills)) {
            entry.skills.forEach(skill => {
                if (skillCounts.hasOwnProperty(skill)) {
                    skillCounts[skill]++;
                }
            });
        }
    });

    return skillCounts;
}

// Generate skill progress charts using Chart.js
function generateSkillProgressCharts() {
    const skillCounts = calculateSkillProgress();
    const skillsContent = document.getElementById('skills-content');
    skillsContent.innerHTML = '';

    const canvas = document.createElement('canvas');
    canvas.id = 'skillProgressChart';
    skillsContent.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(skillCounts),
            datasets: [{
                label: 'Skill Progress',
                data: Object.values(skillCounts),
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Event listeners for year selection
document.getElementById('year1-btn').addEventListener('click', () => {
    showSkillIcons();
    currentYear = 'year1';
});
document.getElementById('year2-btn').addEventListener('click', () => {
    showSkillIcons();
    currentYear = 'year2';
});
document.getElementById('year4-btn').addEventListener('click', () => {
    showSkillIcons();
    currentYear = 'year4';
});
document.getElementById('anytime-btn').addEventListener('click', () => {
    showSkillIcons();
    currentYear = 'anytime';
});
document.getElementById('skills-tab-btn').addEventListener('click', generateSkillProgressCharts);

// Initialize the default view
window.onload = function() {
    showSkillIcons();
    updateLevelAndBadges(); // Display current user level
};

// Get points for a specific quest
function getQuestPoints(questTitle) {
    return pointsMap[questTitle] || 20; // Default to 20 points if the quest isn't in the map
}

function updateLevelAndBadges() {
    let level = "Beginner";
    if (userPoints > 800) {
        level = "Placement Ready";
    } else if (userPoints > 500) {
        level = "Advanced";
    } else if (userPoints > 200) {
        level = "Intermediate";
    }
    document.getElementById('level-display').innerText = `Level: ${level}`;
    document.getElementById('points-display').innerText = `Total Points: ${userPoints}`;
}
