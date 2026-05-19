// Global product database containing specs, ranges, and descriptions
const PRODUCTS_DATA = [
    {
        id: "tirzepatide",
        name: "Tirzepatide",
        image: "Tirzepatide.png",
        priceRange: "$43.00 – $329.00",
        description: "Premium grade Tirzepatide research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form. For research and development purposes only.",
        variants: [
            { spec: "5mg", price: 43.00 }, { spec: "10mg", price: 65.00 },
            { spec: "15mg", price: 88.00 }, { spec: "20mg", price: 115.00 },
            { spec: "30mg", price: 145.00 }, { spec: "40mg", price: 168.00 },
            { spec: "50mg", price: 192.00 }, { spec: "60mg", price: 215.00 },
            { spec: "70mg", price: 238.00 }, { spec: "80mg", price: 265.00 },
            { spec: "90mg", price: 288.00 }, { spec: "100mg", price: 310.00 },
            { spec: "120mg", price: 329.00 }
        ]
    },
    {
        id: "semaglutide",
        name: "Semaglutide",
        image: "Semaglutide.png",
        priceRange: "$40.00 – $109.00",
        description: "Premium grade Semaglutide research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form.",
        variants: [
            { spec: "5mg", price: 40.00 }, { spec: "10mg", price: 58.00 },
            { spec: "15mg", price: 75.00 }, { spec: "20mg", price: 92.00 },
            { spec: "30mg", price: 109.00 }
        ]
    },
    {
        id: "retatrutide",
        name: "Retatrutide",
        image: "Retatrutide.png",
        priceRange: "$77.00 – $371.00",
        description: "Premium grade Retatrutide research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form.",
        variants: [
            { spec: "5mg", price: 77.00 }, { spec: "10mg", price: 119.00 },
            { spec: "15mg", price: 161.00 }, { spec: "20mg", price: 203.00 },
            { spec: "30mg", price: 245.00 }, { spec: "40mg", price: 287.00 },
            { spec: "50mg", price: 329.00 }, { spec: "60mg", price: 371.00 }
        ]
    },
    {
        id: "oxytocin",
        name: "Oxytocin Acetate",
        image: "Oxytocin Acetate.png",
        priceRange: "$29.00 – $51.00",
        description: "Premium grade Oxytocin Acetate research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form.",
        variants: [
            { spec: "2mg", price: 29.00 },
            { spec: "5mg", price: 51.00 }
        ]
    }
];
