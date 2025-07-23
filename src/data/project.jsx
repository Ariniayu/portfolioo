 import adamokap from '../assets/ui/adamokap.png';
 import wonderful from '../assets/ui/wonderful.png';
 import pos from '../assets/ui/pos.png'
 import egallery from '../assets/web/egallery.png'
 import rekomenweb from '../assets/web/rekomweb.png'

 const projects = [
    {
      id: 1,
      title: "Adajasa Mobile",
      category: "uiux",
      description: "Aplikasi untuk mencari jasa jasa yang terdekat dengan lokasi anda",
      tags: ["Figma", "User Research","UI Design", "Design System","Prototyping"],
      image: adamokap,
      link: "/projects/dashboard"
    },
    {
      id: 2,
      title: "Wonderfull Yogyakarta",
      category: "uiux",
      description: "Website untuk mencari wisata wisata populer di Yogyakarta dengan User Interface yang user friendly dan lengkap",
      tags: ["Figma", "UI Design", "Design System","User Research","Prototyping"],
      image:wonderful,
      link: "/projects/dashboard"
    },
    {
      id: 3,
      title: "POS - Poin of Sale",
      category: "uiux",
      description: "Aplikasi POS yang mudah digunakan user friendly dan membuat pekerjaan sistematis",
      tags: ["Figma", "UI Design", "Design System","User Research","Prototyping"],
      image: pos,
      link: "/projects/ar-shopping"
    },
    {
      id: 4,
      title: "E-Gallery Mahasiswa D3 MI",
      category: "Website",
      description: "Website Portfolio bagi Mahasiswa dan Alumni Manajemen Informatika",
      tags: ["HTML", "Tailwind CSS", "Laravel","MySQL","PhP"],
      image: egallery,
      link: "/projects/ar-shopping"
    },
    {
      id: 5,
      title: "Website Rekomendasi Wisata",
      category: "Website",
      description: "Website rekomendasi bagi wisatawan yang ingin mencari tempat di Yogyakarta",
      tags: ["HTML", "Tailwind CSS", "Python","MySQL"],
      image: rekomenweb,
      link: "/projects/ar-shopping"
    },
  ];

  export default projects;