
export interface ContentData {
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCTA: string;
    secondaryCTA: string;
    stats: { label: string; value: string }[];
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    points: string[];
    image: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  portfolio: {
    title: string;
    subtitle: string;
    categories: string[];
    items: {
      title: string;
      category: string;
      image: string;
      description: string;
    }[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      role: string;
      comment: string;
      avatar: string;
    }[];
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
  footer: {
    brand: string;
    description: string;
    links: { label: string; href: string }[];
    contact: {
      address: string;
      email: string;
      phone: string;
    };
    socials: { name: string; href: string }[];
  };
}

export const dummyData: ContentData = {
  hero: {
    badge: "Klinik Utama Terakreditasi Paripurna",
    title: "Solusi Kesehatan Keluarga Terpercaya & Modern",
    description: "Kami menghadirkan pelayanan medis standar internasional dengan sentuhan kenyamanan layaknya di rumah. Didukung oleh tim dokter spesialis berpengalaman dan fasilitas medis mutakhir.",
    primaryCTA: "Jadwal Konsultasi",
    secondaryCTA: "Lihat Layanan",
    stats: [
      { label: "Dokter Spesialis", value: "25+" },
      { label: "Pasien Puas", value: "15k+" },
      { label: "Ruang Rawat", value: "50+" },
    ]
  },
  about: {
    title: "Membangun Masa Depan yang Lebih Sehat Bersama MedicaCorp",
    subtitle: "Tentang Kami",
    description: "MedicaCorp telah melayani masyarakat selama lebih dari 15 tahun dengan dedikasi penuh terhadap kualitas pelayanan kesehatan. Fokus kami adalah memberikan diagnosa yang tepat dan pengobatan yang efektif bagi setiap pasien.",
    points: [
      "Layanan Gawat Darurat 24/7",
      "Peralatan Medis Generasi Terbaru",
      "Akses Rekam Medis Digital Aman",
      "Program Edukasi Kesehatan Pasien"
    ],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
  },
  services: {
    title: "Layanan Medis Unggulan Kami",
    subtitle: "Layanan Spesialis",
    items: [
      {
        icon: "🩺",
        title: "Pemeriksaan Umum",
        description: "Layanan check-up kesehatan rutin untuk memastikan kondisi fisik Anda tetap prima setiap saat."
      },
      {
        icon: "🦷",
        title: "Klinik Gigi & Mulut",
        description: "Perawatan gigi estetik dan fungsional dengan teknologi laser minim rasa sakit."
      },
      {
        icon: "🍼",
        title: "Kesehatan Anak",
        description: "Pendampingan tumbuh kembang buah hati dengan dokter spesialis anak yang ramah."
      },
      {
        icon: "🧠",
        title: "Kesehatan Mental",
        description: "Konsultasi psikologi dan psikiatri profesional dalam lingkungan yang suportif."
      },
      {
        icon: "❤️",
        title: "Kardiologi",
        description: "Deteksi dini dan penanganan penyakit jantung dengan sistem pemantauan modern."
      },
      {
        icon: "🧪",
        title: "Laboratorium Klinis",
        description: "Hasil laboratorium cepat dan akurat untuk mendukung diagnosa medis yang tepat."
      }
    ]
  },
  portfolio: {
    title: "Fasilitas & Ruang Pelayanan Kami",
    subtitle: "Fasilitas Kami",
    categories: ["Semua", "Ruang Rawat", "Operasi", "Laboratorium"],
    items: [
      {
        title: "Lobby Utama & Resepsionis",
        category: "Ruang Rawat",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
        description: "Area tunggu yang luas dan nyaman dengan sistem antrian digital."
      },
      {
        title: "Ruang Operasi Steril",
        category: "Operasi",
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
        description: "Dilengkapi dengan sistem aliran udara HEPA filter standar ISO."
      },
      {
        title: "Suite Rawat Inap VVIP",
        category: "Ruang Rawat",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
        description: "Kamar rawat inap dengan fasilitas lengkap layaknya hotel bintang lima."
      }
    ]
  },
  process: {
    title: "Alur Pelayanan Pasien",
    subtitle: "Prosedur Layanan",
    steps: [
      {
        number: "01",
        title: "Pendaftaran Online",
        description: "Daftar melalui aplikasi atau website kami untuk mendapatkan nomor antrian."
      },
      {
        number: "02",
        title: "Skrining Kesehatan",
        description: "Pengecekan tanda vital oleh perawat sebelum bertemu dokter spesialis."
      },
      {
        number: "03",
        title: "Konsultasi Dokter",
        description: "Pemeriksaan mendalam dan diskusi mengenai keluhan kesehatan Anda."
      },
      {
        number: "04",
        title: "Tindakan & Farmasi",
        description: "Pemberian resep obat atau tindakan medis yang diperlukan sesuai diagnosa."
      }
    ]
  },
  testimonials: {
    title: "Apa Kata Pasien Kami",
    subtitle: "Testimoni",
    items: [
      {
        name: "Andi Wijaya",
        role: "Pasien Rawat Jalan",
        comment: "Pelayanan sangat cepat dan ramah. Dokter menjelaskan diagnosa dengan bahasa yang mudah dimengerti.",
        avatar: "https://i.pravatar.cc/150?u=andi"
      },
      {
        name: "Siska Pratama",
        role: "Ibu Rumah Tangga",
        comment: "Klinik anak di sini sangat menyenangkan bagi si kecil. Anak saya tidak takut lagi diajak ke dokter.",
        avatar: "https://i.pravatar.cc/150?u=siska"
      },
      {
        name: "Budi Santoso",
        role: "Wiraswasta",
        comment: "Fasilitas parkir luas dan proses klaim asuransi dibantu sepenuhnya oleh staf administrasi.",
        avatar: "https://i.pravatar.cc/150?u=budi"
      }
    ]
  },
  cta: {
    title: "Prioritaskan Kesehatan Anda Hari Ini",
    description: "Jangan tunda kesehatan Anda. Konsultasikan keluhan Anda dengan tim ahli medis kami sekarang juga.",
    buttonText: "Hubungi WhatsApp Kami"
  },
  footer: {
    brand: "MedicaCorp",
    description: "Penyedia layanan kesehatan unggulan yang mengedepankan profesionalisme, etika, dan kenyamanan pasien.",
    links: [
      { label: "Home", href: "#" },
      { label: "Layanan", href: "#services" },
      { label: "Tentang Kami", href: "#about" },
      { label: "Kontak", href: "#contact" }
    ],
    contact: {
      address: "Jl. Kesehatan Raya No. 45, Jakarta Pusat",
      email: "info@medicacorp.id",
      phone: "+62 21 555 1234"
    },
    socials: [
      { name: "Instagram", href: "#" },
      { name: "LinkedIn", href: "#" },
      { name: "Facebook", href: "#" }
    ]
  }
};
