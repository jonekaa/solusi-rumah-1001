export const BUSINESS_NETWORK = [
    { name: "Kaca & Aluminium 1001", type: "Specialist Facade & Kusen", active: true },
    { name: "Galvalum & Baja Ringan 1001", type: "Supply Material Kaca", active: false },
    { name: "Ceramic & Tiles 1001", type: "Perawatan Gedung", active: false },
    { name: "Furniture 1001", type: "Spesialis Rumah Mewah", active: false },
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
            brands: ["YKK AP", "Alexindo", "Dacon"],
            glass: ["Stopsol 8mm", "Tempered 10mm/12mm", "Laminated 5+5"],
            finish: ["Anodized (CA/Black/Dark Brown)", "Powder Coating (Custom RAL)"],
            warranty: "10 Tahun Kebocoran & Warna"
        },
        usage: "Gedung Bertingkat, Showroom Mobil, Lobby Hotel"
    },
    {
        id: 2,
        title: "Railing Kaca Tempered",
        category: "Residential",
        shortDesc: "Pandangan tanpa batas untuk balkon villa dan void tangga.",
        image: "https://images.unsplash.com/photo-1621202507461-1dc6f1806e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        isBestSeller: false,
        specs: {
            brands: ["Aksesoris Stainless SUS 304"],
            glass: ["Tempered 10mm", "Tempered 12mm", "Tempered Laminated 8+8"],
            finish: ["Handrail Kayu Bengkirai/Jati", "Handrail Stainless Hairline"],
            warranty: "Garansi Stainless Anti-Karat 3 Tahun"
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
            brands: ["YKK Nexsta", "Alexindo 4 Inch", "Inkalum"],
            glass: ["Polos 5mm", "Rayban 5mm", "Tempered 6mm"],
            finish: ["Urat Kayu (Wood Grain)", "Putih/Hitam Powder Coat"],
            warranty: "Garansi Profil 5 Tahun"
        },
        usage: "Pintu Utama, Jendela Kamar, Partisi Kantor"
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
        link: "/", // Links to the main homepage we built
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