export const site = {
    name: "aphananthe42",
    email: "contact@aphananthe42.net",
    mbti: "INTJ-A",
    socialLinks: [
        { href: "https://github.com/aphananthe42", linkType: "GitHub" },
        { href: "https://x.com/aphananthe42", linkType: "X" },
        { href: "https://zenn.dev/aphananthe42", linkType: "Zenn" },
        { href: "https://atcoder.jp/users/aphananthe42", linkType: "AtCoder" },
    ],
    works: [
        {
            id: "site",
            title: "aphananthe42.net",
            href: "https://aphananthe42.net",
            tags: ["Astro", "TypeScript", "Tailwind CSS", "Cloudflare"],
        },
        {
            id: "app",
            title: "AI Frame",
            href: "https://apps.apple.com/ja/app/ai-frame-art-on-widget/id6740455268",
            tags: ["Swift", "SwiftUI", "TCA", "Xcode Cloud", "Firebase"],
        },
    ],
} as const;
