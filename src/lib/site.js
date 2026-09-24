// Single source of truth for business details

export const site = {
    name: "CalmTechCare",
    legalName: "CalmTechCare LLC",
    owner: "Blake Boris",
    tagline: "Patient, in-person technology assistance for older adults.",
    phone: "(720) 841-2305",
    phoneHref: "tel:+17208412305",
    email: "blake@calmtechcare.com",
    emailHref: "mailto:blake@calmtechcare.com",
    serviceArea: "Denver and surrounding communities",
    serviceAreaAlt: "the greater Denver metro area",
    services: "Video calls, scam safety, printers, internet, Wi-Fi, passwords, and everything in between.",
    hours: "any day of the week and I'll get back to you ASAP.",
    emailResponseTime: "within 2-3 business days",
};

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/communities", label: "Communities" },
    { href: "/contact", label: "Contact" },
];

export const rates = [
    {
        id: "visit",
        name: "Individual Visit",
        price: "$50",
        unit: "/hr",
        summary:
            "I come to you. We sit down together and fix whatever is giving you trouble.",
        includes: [
            "No minimum. if it takes fifteen minutes, you pay for fifteen minutes",
            "",
            "Printed instructions to keep so you can solve it next time",
            "A free follow-up phone call within a week",
        ],
        featured: false,
    },
    {
        id: "first",
        name: "First Visit",
        price: "Free",
        unit: "",
        summary:
            "Absolutely no cost for the first session, so you can get help with absolutely no pressure.",
        includes: [
            "We go at your pace. There is no such thing as a bad question",
            "I will tell you honestly if you do not need my help",
            "No contract, no subscription, nothing to cancel",
        ],
        featured: true,
    },
    {
        id: "community",
        name: "Community Tech Hours",
        price: "$200",
        unit: "/hr",
        summary:
            "I present in a common room at your community and residents receive direct help and feedback.",
        includes: [
            "Typically serves 8 to 12 residents in a session",
            "Flyers and sign-up sheets provided",
            "Recurring weekly or monthly scheduling available",
        ],
        featured: false,
        bookBy: "email",
    },
];
