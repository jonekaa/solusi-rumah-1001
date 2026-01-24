export const BUSINESS_NETWORK = [
    { name: "Kaca & Aluminium 1001", type: "Specialist Facade & Kusen", active: true },
    { name: "Galvalum & Baja Ringan 1001", type: "Supply Material Kaca", active: false },
    { name: "Ceramic & Tiles 1001", type: "Perawatan Gedung", active: false },
    { name: "Furniture 1001", type: "Spesialis Rumah Mewah", active: false },
];

export const BAJA_PRODUCTS = [
    {
        id: 1,
        title: "Kanal C Baja Ringan",
        category: "Structural",
        shortDesc: "Baja ringan profil C75 bermutu tinggi G550 dengan lapisan anti-karat AZ100.",
        image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        isBestSeller: true,
        specs: {
            brands: ["Kencana Truss", "Taso", "Cilegon Steel"],
            material: ["Galvalum AZ100", "G550 Hi-Ten"],
            thickness: ["0.75mm", "1.00mm"],
            warranty: "Garansi Karat 10 Tahun"
        },
        usage: "Rangka Atap Rumah, Gudang, Kanopi"
    },
    {
        id: 2,
        title: "Atap Spandek Pasir",
        category: "Roofing",
        shortDesc: "Atap galvalum dengan lapisan pasir untuk peredam suara dan panas.",
        image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        isBestSeller: true,
        specs: {
            brands: ["Kencana", "Sakura Paint"],
            colors: ["Merah Marun", "Hitam", "Coklat", "Hijau"],
            thickness: ["0.30mm", "0.35mm"],
            warranty: "Garansi Warna 5 Tahun"
        },
        usage: "Atap Rumah Tinggal, Kanopi Carport"
    },
    {
        id: 3,
        title: "Reng Baja Ringan",
        category: "Structural",
        shortDesc: "Profil Reng asimetris untuk dudukan genteng yang presisi.",
        image: "https://images.unsplash.com/photo-1590059390240-8488e010837d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        isBestSeller: false,
        specs: {
            brands: ["Kencana Truss", "Taso"],
            material: ["Galvalum AZ100"],
            thickness: ["0.45mm"],
            warranty: "Standar SNI"
        },
        usage: "Dudukan Genteng Metal/Keramik"
    },
    {
        id: 4,
        title: "Hollow Plafon",
        category: "Interior",
        shortDesc: "Rangka plafon gypsum kuat dan presisi 2x4 dan 4x4.",
        image: "https://images.unsplash.com/photo-1594901502476-c56df3d12d4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        isBestSeller: false,
        specs: {
            brands: ["A Plus", "Kencana"],
            material: ["Galvanis", "Galvalum"],
            thickness: ["0.30mm", "0.35mm"],
            warranty: "-"
        },
        usage: "Rangka Plafon Gypsum/PVC"
    }
];

export const BAJA_PROJECTS = [
    {
        id: 1,
        title: "Gudang Logistik Sidoarjo",
        location: "Kawasan Industri Rungkut",
        description: "Pemasangan konstruksi atap bentang lebar 30 meter tanpa tiang tengah menggunakan Kencana Truss C75.100 double.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        completionDate: "Oktober 2024"
    },
    {
        id: 2,
        title: "Cluster Perumahan CitraLand",
        location: "Surabaya Barat",
        description: "Supply dan instalasi rangka atap baja ringan untuk 50 unit rumah tipe 72/120 dengan genteng keramik berat.",
        image: "https://images.unsplash.com/photo-1628624747186-a941525f3824?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        completionDate: "Desember 2024"
    },
    {
        id: 3,
        title: "Kanopi Industrial Cafe",
        location: "Malang Kota",
        description: "Kanopi estetis exposed material dengan atap spandek transparan dan finishing cat hitam doff.",
        image: "https://images.unsplash.com/photo-1583847661441-89724e8a8b1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        completionDate: "Januari 2025"
    }
];

export const PRODUCTS = [
    {
        id: 1,
        title: "Facade & Curtain Wall",
        category: "Commercial",
        shortDesc: "Sistem dinding kaca high-rise dengan sealant struktural.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        isBestSeller: true,
        specs: {
            brands: ["YKK AP", "Alexindo"],
            aluminum: ["YKK (CA, Anodize, PC)", "Alexindo", "Finished Good System"],
            kaca: ["Asahimas", "Muliaglass"],
            warranty: "Kerapian dan kebocoran selama masa pemeliharaan"
        },
        usage: "Gedung Bertingkat, Showroom Mobil, Lobby Hotel"
    },
    {
        id: 2,
        title: "Railing Kaca Tempered",
        category: "Commercial",
        shortDesc: "Pandangan tanpa batas untuk balkon villa dan void tangga.",
        image: "https://images.unsplash.com/photo-1707301452501-224763485ac3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        isBestSeller: false,
        specs: {
            brands: ["Kaki Stainless", "Glass Support", "Tanam Beton"],
            glass: ["Tempered 10mm", "Tempered 12mm", "Tempered Laminated 10+10"],
            finish: ["Handrail Kayu", "Handrail Stainless"],
            warranty: "Kerapian dan presisi dalam pemasangan"
        },
        usage: "Balkon Villa, Void Mall, Tangga Rumah Mewah"
    },
    {
        id: 3,
        title: "Kusen & Pintu Aluminium",
        category: "Residential",
        shortDesc: "Pintu lipat, sliding, dan swing kedap suara.",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        isBestSeller: true,
        specs: {
            brands: ["YKK Nexsta", "Alexindo 4 Inch"],
            glass: ["Kaca Polos (5, 6, 8 mm)", "Kaca Warna Grey, Green, Blue (5, 6, 8 mm)", "Kaca Tempered (5, 6, 8 mm)"],
            finish: ["Urat Kayu (Wood Grain)", "Putih/Hitam Powder Coat"],
            warranty: "Garansi Kerapian dan Kesesuaian bahan yang dipakai sesuai dengan kesepakatan dan kontrak"
        },
        usage: "Pintu Utama, Jendela Kamar, Partisi Kantor"
    },
    {
        id: 4,
        title: "Kanopi Kaca",
        category: "Residential",
        shortDesc: "Kanopi kaca dengan finishing cat hitam doff.",
        image: "https://images.unsplash.com/photo-1600421857374-6afb9d5c8615?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        isBestSeller: false,
        specs: {
            brands: ["Kencana Truss", "Taso"],
            material: ["Galvalum AZ100"],
            thickness: ["0.45mm"],
            warranty: "Standar SNI"
        },
        usage: "Dudukan Genteng Metal/Keramik"
    }
];

// ... (Keep existing exports like BUSINESS_NETWORK and PRODUCTS) ...

export const GROUP_BUSINESSES = [
    {
        id: "kaca-aluminium",
        name: "Kaca & Aluminium",
        tagline: "Spesialis Facade & Kusen",
        description: "Kontraktor spesialis aluminium finish goods dan curtain wall untuk gedung dan hunian mewah.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        link: "/kaca-aluminium", // Links to the Kaca homepage
        status: "Active"
    },
    {
        id: "baja-ringan",
        name: "Baja Ringan & Galvalum",
        tagline: "Supply Rangka Atap",
        description: "Distributor kaca lembaran, tempered, dan laminated. Supply toko kaca dan proyek.",
        image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Glass factory vibe
        link: "#",
        status: "Coming Soon"
    },
    {
        id: "keramik",
        name: "Keramik",
        tagline: "Perlengkapan Kamar Mandi",
        description: "Layanan pembersihan kaca gedung (gondola/rope access) dan perbaikan sealant bocor.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Worker on height
        link: "#",
        status: "Coming Soon"
    },
    {
        id: "furniture",
        name: "Furnitures",
        tagline: "Isian Hunian Istimewa",
        description: "Solusi integrasi smart door, jendela premium, dan railing tangga estetis.",
        image: "https://images.unsplash.com/photo-1600596542815-bfad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Luxury home
        link: "#",
        status: "Coming Soon"
    }
];