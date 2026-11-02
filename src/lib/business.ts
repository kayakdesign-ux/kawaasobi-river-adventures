export const BUSINESS = {
  name: "アウトドア！ガルバンゾ",
  operator: "株式会社リバーランプラス",
  partner: "一般社団法人自然体感ガルバンゾ",
  partnerUrl: "https://natural.or.jp/",
  association: "一般社団法人 日本レクリエーションカヌー協会（JRCA）",
  address: "高知県長岡郡大豊町西土居１番地",
  minimumPrice: 5500,
  currency: "JPY",
} as const;

const SITE_URL = "https://emerald-river-dual-adventures.lovable.app/";

export const businessStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#operator`,
      name: BUSINESS.operator,
      legalName: BUSINESS.operator,
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#partner`,
      name: BUSINESS.partner,
      url: BUSINESS.partnerUrl,
    },
    {
      "@type": ["LocalBusiness", "TouristAttraction"],
      "@id": `${SITE_URL}#business`,
      name: BUSINESS.name,
      url: SITE_URL,
      description: `高知県大豊町・吉野川でSUP・パックラフト・カヤックの1.5kmツーリングとシャワークライミングを開催。運営：${BUSINESS.operator}。協力：${BUSINESS.partner}。`,
      parentOrganization: { "@id": `${SITE_URL}#operator` },
      memberOf: { "@type": "Organization", name: BUSINESS.association },
      address: {
        "@type": "PostalAddress",
        streetAddress: "西土居１番地",
        addressLocality: "長岡郡大豊町",
        addressRegion: "高知県",
        addressCountry: "JP",
      },
      priceRange: "5,500円〜",
      touristType: ["ファミリー", "子ども連れ", "初心者"],
      makesOffer: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: BUSINESS.minimumPrice,
          priceCurrency: BUSINESS.currency,
        },
        itemOffered: {
          "@type": "Service",
          name: "吉野川の川遊び体験",
          serviceType: "1.5kmツーリング・シャワークライミング",
          provider: { "@id": `${SITE_URL}#business` },
        },
      },
    },
  ],
};