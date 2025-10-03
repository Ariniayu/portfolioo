 import adamokap from '../assets/ui/adamokap.png';
 import wonderful from '../assets/ui/wonderful.png';
 import pos from '../assets/ui/pos.png'
 import egallery from '../assets/web/egallery.png'
 import rekomenweb from '../assets/web/rekomweb.png'
 import uireal from '../assets/ui/uireal.png'

 const projects = [
    {
  id: 1,
  title: "Adajasa Mobile",
  category: "uiux",
  description: "Aplikasi untuk mencari jasa jasa yang terdekat dengan lokasi anda",
  tags: ["Figma", "User Research", "UI Design", "Design System", "Prototyping"],
  image: adamokap,
  link: "https://www.figma.com/proto/nS65OnDgJq7WjfQ4lFO0gC/ADAJASA?node-id=312-1963&t=ncX7BOIoOc3Wezgv-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=312%3A1963&show-proto-sidebar=1",
  designProcess: [
    {
      stage: "Research",
      icon: "🔍",
      description: "Memahami kebutuhan pengguna dalam mencari jasa terdekat",
      deliverables: ["User Interview", "Market Analysis", "Competitor Study"]
    },
    {
      stage: "Define",
      icon: "🎯",
      description: "Menganalisis pain points dan kebutuhan utama pengguna",
      deliverables: ["User Persona", "Journey Map", "Problem Statement"]
    },
    {
      stage: "Ideate",
      icon: "💡",
      description: "Brainstorming solusi fitur pencarian jasa berbasis lokasi",
      deliverables: ["Feature Ideas", "User Flow", "Information Architecture"]
    },
    {
      stage: "Design",
      icon: "🎨",
      description: "Membuat UI design dan design system yang konsisten",
      deliverables: ["Wireframe", "Mockup", "Design System"]
    },
    {
      stage: "Test",
      icon: "🧪",
      description: "Usability testing dengan pengguna potensial",
      deliverables: ["Prototype Test", "Feedback Session", "Iteration"]
    }
  ],
  caseStudy: {
    problem: "Pengguna kesulitan menemukan jasa terdekat yang terpercaya dan berkualitas karena informasi yang tersebar di berbagai platform dengan review yang tidak terverifikasi.",
    solution: "Membangun aplikasi mobile dengan sistem pencarian berbasis lokasi real-time, rating terverifikasi, dan filter jasa yang komprehensif untuk memudahkan pengguna menemukan jasa terdekat yang tepat.",
    features: [
      "Pencarian jasa berbasis lokasi GPS",
      "Sistem rating dan review terverifikasi",
      "Filter jasa berdasarkan kategori dan harga",
      "Chat langsung dengan penyedia jasa",
      "Booking dan payment system terintegrasi"
    ],
    challenges: [
      "Mendesain interface yang sederhana untuk fitur yang kompleks",
      "Memastikan akurasi data lokasi dan ketersediaan jasa",
      "Membangun sistem rating yang terpercaya"
    ],

  },
},
{
  id: 2,
  title: "Wonderfull Yogyakarta",
  category: "uiux",
  description: "Website untuk mencari wisata wisata populer di Yogyakarta dengan User Interface yang user friendly dan lengkap",
  tags: ["Figma", "UI Design", "Design System", "User Research", "Prototyping"],
  image: wonderful,
  link: "https://www.figma.com/proto/mHCoojNhVdQPiSPUlN6dAX/wonderfull-jogjakarta?node-id=118-30&t=lDz5wz35BoosnAQs-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=118%3A30",
  designProcess: [
    {
      stage: "Discover",
      icon: "🧭",
      description: "Research kebutuhan wisatawan lokal dan internasional",
      deliverables: ["User Survey", "Tourist Interview", "Trend Analysis"]
    },
    {
      stage: "Define",
      icon: "📊",
      description: "Menganalisis preferensi dan perilaku wisatawan",
      deliverables: ["Tourist Persona", "Experience Map", "Requirement List"]
    },
    {
      stage: "Develop",
      icon: "🛠️",
      description: "Mengembangkan konsep design yang menarik dan informatif",
      deliverables: ["Content Strategy", "Site Map", "Wireframe"]
    },
    {
      stage: "Design",
      icon: "✨",
      description: "Membuat visual design yang mencerminkan budaya Yogyakarta",
      deliverables: ["Visual Design", "UI Components", "Interactive Prototype"]
    },
    {
      stage: "Deliver",
      icon: "🚀",
      description: "Testing dan finalisasi design untuk development",
      deliverables: ["Usability Test", "Design Handoff", "Developer Guide"]
    }
  ],
  caseStudy: {
    problem: "Wisatawan kesulitan mendapatkan informasi wisata Yogyakarta yang terpercaya, lengkap, dan terupdate dalam satu platform yang mudah diakses.",
    solution: "Mendesain website portal wisata dengan informasi komprehensif, interface yang menarik, dan fitur personalisasi rekomendasi berdasarkan preferensi pengguna.",
    features: [
      "Katalog wisata lengkap dengan foto dan deskripsi",
      "Sistem rekomendasi berdasarkan kategori dan rating",
      "Itinerary planner untuk merencanakan perjalanan",
      "Integrasi map dan transportasi",
      "Review dan tips dari traveler lain"
    ],
    challenges: [
      "Menampilkan banyak informasi tanpa membuat overwhelmed",
      "Mendesain interface yang menarik namun tetap fungsional",
      "Membuat sistem navigasi yang intuitif untuk berbagai jenis wisata"
    ]
  },
},
{
  id: 3,
  title: "POS - Point of Sale",
  category: "uiux",
  description: "Aplikasi POS yang mudah digunakan user friendly dan membuat pekerjaan sistematis",
  tags: ["Figma", "UI Design", "Design System", "User Research", "Prototyping"],
  image: pos,
  link: "https://www.figma.com/proto/FGUYpHmsXmKTTjeHGertTR/POS?node-id=71-3490&t=4opdR1QRN8iBksVv-0&scaling=min-zoom&content-scaling=fixed&page-id=61%3A3118&starting-point-node-id=71%3A3490",
  designProcess: [
    {
      stage: "Analyze",
      icon: "📈",
      description: "Memahami workflow dan kebutuhan bisnis retail",
      deliverables: ["Business Analysis", "User Observation", "Process Mapping"]
    },
    {
      stage: "Define",
      icon: "🎯",
      description: "Mengidentifikasi requirements dan pain points kasir",
      deliverables: ["User Stories", "Requirement Spec", "Use Cases"]
    },
    {
      stage: "Design",
      icon: "💻",
      description: "Membuat interface yang efisien untuk transaksi cepat",
      deliverables: ["Task Flow", "UI Design", "Interaction Design"]
    },
    {
      stage: "Prototype",
      icon: "🔄",
      description: "Membangun prototype untuk testing workflow",
      deliverables: ["Interactive Prototype", "User Testing", "Feedback Loop"]
    },
    {
      stage: "Refine",
      icon: "⚡",
      description: "Optimasi berdasarkan feedback dan performance",
      deliverables: ["Design Iteration", "Performance Review", "Final Design"]
    }
  ],
  caseStudy: {
    problem: "Sistem POS existing memiliki interface yang kompleks, proses transaksi lambat, dan sulit dipelajari oleh kasir baru, menyebabkan antrian panjang dan human error.",
    solution: "Merancang aplikasi POS dengan interface yang sederhana, workflow yang optimal, dan fitur-fitur yang mempercepat proses transaksi tanpa mengurangi akurasi.",
    features: [
      "Interface transaksi yang cepat dan intuitif",
      "Manajemen inventory real-time",
      "Laporan penjualan otomatis",
      "Multi-payment method support",
      "Offline mode capability"
    ],
    challenges: [
      "Menyederhanakan proses kompleks tanpa menghilangkan functionality",
      "Mendesain untuk berbagai skenario transaksi",
      "Memastikan konsistensi data dalam operasi cepat"
    ]
  },
},
{
  id: 4,
  title: "E-Gallery Mahasiswa D3 MI",
  category: "Website",
  description: "Website Portfolio bagi Mahasiswa dan Alumni Manajemen Informatika",
  tags: ["HTML", "Tailwind CSS", "Laravel", "MySQL", "PHP"],
  image: egallery,
  link: "https://www.figma.com/proto/ve2wacAafddSoIzg0QGw9Q/ProjekMi?node-id=1146-1027&t=oEs1Tlgt5Tz6vVFv-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=1146%3A1027",
  designProcess: [
    {
      stage: "Planning",
      icon: "📋",
      description: "Analisis kebutuhan mahasiswa dan perusahaan recruiter",
      deliverables: ["Requirement Analysis", "Stakeholder Interview", "Feature Planning"]
    },
    {
      stage: "Design",
      icon: "🎨",
      description: "Membuat wireframe dan UI design yang profesional",
      deliverables: ["Wireframe", "Mockup Design", "Design System"]
    },
    {
      stage: "Development",
      icon: "💻",
      description: "Membangun website dengan teknologi modern",
      deliverables: ["Frontend Development", "Backend API", "Database Design"]
    },
    {
      stage: "Testing",
      icon: "🧪",
      description: "Quality assurance dan user acceptance testing",
      deliverables: ["Functionality Test", "Performance Test", "User Acceptance"]
    },
    {
      stage: "Deployment",
      icon: "🚀",
      description: "Launch dan maintenance website",
      deliverables: ["Server Setup", "Data Migration", "Documentation"]
    }
  ],
  caseStudy: {
    problem: "Mahasiswa dan alumni D3 MI kesulitan menunjukkan portfolio dan kemampuan mereka kepada perusahaan, sementara recruiter sulit menemukan talent yang sesuai karena tidak adanya platform terpusat.",
    solution: "Mengembangkan website portfolio yang memungkinkan mahasiswa menampilkan project mereka dan recruiter dapat mencari talent berdasarkan skill dan project yang relevan.",
    features: [
      "Portfolio gallery dengan filter dan search",
      "Student profile dengan skill assessment",
      "Project showcase dengan detail teknologi",
      "Recruiter access untuk talent hunting",
      "Admin panel untuk management content"
    ],
    challenges: [
      "Membangun sistem yang scalable untuk banyak user",
      "Integrasi dengan berbagai jenis project dan file",
      "Membuat interface yang cocok untuk mahasiswa dan recruiter"
    ]
  },
   testimonial: {
    text: "\"E-Gallery menjadi jembatan yang sangat efektif antara kampus dan industri. Banyak mahasiswa kami yang mendapatkan pekerjaan melalui platform ini.\"",
    author: "- Head of D3 MI Program"
  },
  githubLink: "https://mibox.amikom.ac.id/egallery/",
  liveDemo: "https://egallery-d3mi.ac.id",
  technologies: {
    frontend: ["HTML5", "Tailwind CSS", "JavaScript"],
    backend: ["Laravel", "PHP"],
    database: ["MySQL"],
    deployment: ["VPS", "Nginx"]
  }
  
},
    // data/project.jsx
{
  id: 5,
  title: "Website Rekomendasi Wisata",
  category: "Website",
  description: "Website rekomendasi bagi wisatawan yang ingin mencari tempat di Yogyakarta",
  tags: ["HTML", "Tailwind CSS", "Python", "MySQL"],
  image: rekomenweb,
  link: "https://www.figma.com/proto/dhBBMNRB31znBVfypWq1gs/Website-Rekomendasi-Wisata?node-id=192-53&t=xu00NrDTthsARX8a-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=187%3A10",
  // Tambahan field untuk detail projek
  designProcess: [
    {
      stage: "Research",
      icon: "🔍",
      description: "Melakukan penelitian tentang kebutuhan wisatawan di Yogyakarta",
      deliverables: ["User Survey", "Market Analysis", "Competitor Research"]
    },
    {
      stage: "Define",
      icon: "✍️",
      description: "Menganalisis data dan membuat user persona wisatawan",
      deliverables: ["User Persona", "Journey Map", "Problem Statement"]
    },
    {
      stage: "Ideate",
      icon: "💡",
      description: "Brainstorming fitur dan solusi untuk wisatawan",
      deliverables: ["Feature Prioritization", "Information Architecture"]
    },
    {
      stage: "Prototype",
      icon: "🛠️",
      description: "Membuat wireframe dan prototype website",
      deliverables: ["Wireframes", "Interactive Prototype"]
    },
    {
      stage: "Test",
      icon: "🧪",
      description: "Testing usability dengan pengguna nyata",
      deliverables: ["Usability Testing", "Feedback Analysis"]
    }
  ],
  caseStudy: {
    problem: "Wisatawan kesulitan menemukan tempat wisata yang sesuai dengan preferensi mereka di Yogyakarta karena informasi yang tersebar di berbagai platform.",
    solution: "Membangun website terpusat yang menyediakan rekomendasi wisata personalized berdasarkan lokasi, rating, dan kategori.",
    features: [
      "Sistem rekomendasi cerdas",
      "Filter berdasarkan kategori dan lokasi",
      "Review dan rating dari pengguna"
    ],
    challenges: [
      "Integrasi data dari berbagai sumber",
      "Membangun algoritma rekomendasi yang akurat"
    ]
  },
  githubLink: "https://rekomendasiwisatajogja.com/"
},
{
  id: 6,
  title: "Rancangan UI Design Website Real Estate",
  category: "uiux",
  description: "Website Real Estate Jual Beli Sewa Rumah NB: Gunakan ukuran desktop 90% untuk hasil yang lebih bagus",
  tags: ["Figma"],
  image: uireal,
  link: "https://www.figma.com/proto/XK6NdbC9X2DNTQdFEz1zdM/Untitled?node-id=14-3488&t=GWOFqPHwA48Wr8Wc-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  // Design process yang berbeda untuk projek UI/UX
  designProcess: [
    {
      stage: "Empathize",
      icon: "👥",
      description: "Memahami kebutuhan calon pembeli dan penjual properti",
      deliverables: ["User Interview", "Stakeholder Meeting", "Market Research"]
    },
    {
      stage: "Define",
      icon: "🎯",
      description: "Mendefinisikan pain points dan kebutuhan pengguna",
      deliverables: ["User Journey", "Pain Points Analysis", "Design Goals"]
    },
    {
      stage: "Ideate",
      icon: "🧠",
      description: "Brainstorming solusi desain dan layout",
      deliverables: ["Moodboard", "Style Guide", "Layout Sketches"]
    },
    {
      stage: "Design",
      icon: "🎨",
      description: "Membuat high-fidelity design dan prototype",
      deliverables: ["UI Design", "Interactive Prototype", "Design System"]
    },
    {
      stage: "Validate",
      icon: "✓",
      description: "Testing desain dengan pengguna potensial",
      deliverables: ["Usability Test", "Design Iteration", "Final Design"]
    }
  ],
  caseStudy: {
    problem: "Platform real estate existing memiliki user experience yang kompleks dan membingungkan bagi pengguna baru.",
    solution: "Merancang interface yang intuitif dengan proses pencarian dan transaksi yang sederhana.",
    features: [
      "Advanced search dengan filter lengkap",
      "Virtual tour integration",
      "Chat langsung dengan agent"
    ],
    challenges: [
      "Menyederhanakan proses yang kompleks",
      "Menampilkan informasi properti yang banyak tanpa overwhelming"
    ]
  },
  }
  ];

  export default projects;