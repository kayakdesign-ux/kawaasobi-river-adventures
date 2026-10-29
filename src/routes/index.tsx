import { createFileRoute } from "@tanstack/react-router";
import shower from "@/assets/shower.jpg";
import touring from "@/assets/touring.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "川遊び | シャワークライミング & 1.5kmリバーツーリング" },
      { name: "description", content: "エメラルドグリーンの清流で、シャワークライミングとサップ・パックラフト・カヤックの1.5kmツーリングを体験。" },
      { property: "og:title", content: "川遊び | 清流アクティビティ" },
      { property: "og:description", content: "渓谷を遡るシャワークライミングと、清流を下る1.5kmツーリング。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const panels = [
  {
    img: shower,
    no: "01",
    en: "SHOWER CLIMBING",
    ja: "シャワークライミング",
    copy: "滝を浴び、岩を登る。\n渓谷を遡る冒険へ。",
    tags: ["滝登り", "飛び込み", "渓谷探検"],
  },
  {
    img: touring,
    no: "02",
    en: "1.5km RIVER TOURING",
    ja: "1.5kmツーリング",
    copy: "透きとおる水面を、\nゆったりと下る。",
    tags: ["サップ", "パックラフト", "カヤック"],
  },
];

function Index() {
  return (
    <main className="bg-background">
      <section className="relative flex h-screen min-h-[640px] flex-col md:flex-row">
        <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5 text-primary-foreground md:px-10">
          <span className="font-display text-2xl tracking-widest">川遊び<span className="ml-2 text-xs opacity-80">KAWAASOBI</span></span>
          <a href="#reserve" className="rounded-full border border-primary-foreground/60 px-5 py-2 text-sm backdrop-blur-sm transition hover:bg-primary-foreground hover:text-primary">ご予約</a>
        </header>

        {panels.map((p) => (
          <a
            key={p.no}
            href="#reserve"
            className="group relative flex-1 overflow-hidden transition-[flex-grow] duration-700 ease-out md:hover:flex-[1.35]"
          >
            <img src={p.img} alt={p.ja} width={1200} height={1504} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
            <div className="absolute inset-0 bg-[image:var(--hero-overlay)]" />
            <div className="relative z-10 flex h-full flex-col justify-end p-6 pb-10 text-primary-foreground md:p-12 md:pb-16">
              <span className="font-display text-sm tracking-[0.3em] text-accent">{p.no} — {p.en}</span>
              <h2 className="mt-3 font-display text-4xl leading-tight md:text-6xl">{p.ja}</h2>
              <p className="mt-4 whitespace-pre-line text-base opacity-90 md:text-lg">{p.copy}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-primary-foreground/15 px-4 py-1 text-sm backdrop-blur-md">{t}</span>
                ))}
              </div>
              <span className="mt-8 inline-flex w-fit items-center gap-3 border-b border-accent pb-1 text-sm tracking-widest">
                詳しく見る <span className="transition-transform group-hover:translate-x-2">→</span>
              </span>
            </div>
          </a>
        ))}

        <div className="pointer-events-none absolute left-1/2 top-24 z-20 hidden -translate-x-1/2 text-center text-primary-foreground md:block">
          <p className="font-display text-xs tracking-[0.5em] opacity-80">EMERALD RIVER</p>
          <h1 className="mt-2 font-display text-3xl [text-shadow:0_2px_20px_oklch(0_0_0/0.5)]">清流で、遊ぼう。</h1>
        </div>
        <div className="absolute inset-y-0 left-1/2 z-10 hidden w-px bg-primary-foreground/40 md:block" />
      </section>
    </main>
  );
}
