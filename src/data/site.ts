export const site = {
    name: "aphananthe42",
    socialLinks: [
        { href: "https://github.com/aphananthe42", linkType: "GitHub" },
        { href: "https://x.com/aphananthe42", linkType: "X" },
        { href: "https://zenn.dev/aphananthe42", linkType: "Zenn" },
        { href: "https://atcoder.jp/users/aphananthe42", linkType: "AtCoder" },
    ],
    sections: {
        about: "About",
        works: "Works",
        diary: "Diary",
        contact: "Contact",
    },
    mbti: "INTJ-A",
    works: [
        {
            id: "site",
            title: "aphananthe42.net",
            href: "https://aphananthe42.net",
            tags: ["Astro", "TypeScript", "Tailwind CSS", "Cloudflare"],
        },
        {
            id: "aiFrame",
            title: "AI Frame",
            href: "https://apps.apple.com/ja/app/ai-frame-art-on-widget/id6740455268",
            tags: ["Swift", "SwiftUI", "TCA", "Xcode Cloud", "Firebase"],
        },
    ],
    contact: {
        email: "Email: ",
        x: "X: ",
        dm: "DM on X",
        pgp: "PGP Key",
    },
    email: "contact@aphananthe42.net",
} as const;
