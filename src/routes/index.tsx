import { createFileRoute } from "@tanstack/react-router";
import shower from "@/assets/shower-climbing.jpg.asset.json";
import touring from "@/assets/river-touring.jpg.asset.json";

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

function Index() {
  return (
    <main className="bg-background">
      <section className="relative h-screen min-h-[640px] overflow-hidden">
        <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5 text-primary-foreground md:px-10">
          <span className="font-display text-2xl tracking-widest">川遊び<span className="ml-2 text-xs opacity-80">KAWAASOBI</span></span>
          <a href="#reserve" className="rounded-full border border-primary-foreground/60 px-5 py-2 text-sm backdrop-blur-sm transition hover:bg-primary-foreground hover:text-primary">ご予約</a>
        </header>

        {/* 1.5kmツーリング — 全面 */}
        <a
          href="#reserve"
          className="group absolute inset-x-0 top-0 h-[55%] overflow-hidden md:inset-0 md:h-auto"
        >
          <img
            src={touring.url}
            alt="1.5kmツーリング"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[image:var(--hero-overlay)]" />
          <div className="relative z-10 flex h-full flex-col justify-end p-6 pb-10 text-primary-foreground md:p-12 md:pb-16">
            <span className="font-display text-sm tracking-[0.3em] text-accent">02 — 1.5KM RIVER TOURING</span>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-7xl">1.5kmツーリング</h2>
            <p className="mt-4 whitespace-pre-line text-base opacity-90 md:text-xl">透きとおる水面を、{"\n"}ゆったりと下る。</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["サップ", "パックラフト", "カヤック"].map((t) => (
                <span key={t} className="rounded-full bg-primary-foreground/15 px-4 py-1 text-sm backdrop-blur-md">{t}</span>
              ))}
            </div>
            <span className="mt-8 inline-flex w-fit items-center gap-3 border-b border-accent pb-1 text-sm tracking-widest">
              詳しく見る <span className="transition-transform group-hover:translate-x-2">→</span>
            </span>
          </div>
        </a>

        {/* シャワークライミング — 右上4分の1 */}
        <a
          href="#reserve"
          className="group absolute inset-x-0 bottom-0 z-10 h-[45%] overflow-hidden border-t border-primary-foreground/40 md:bottom-auto md:left-1/2 md:top-0 md:h-1/2 md:w-1/2 md:border-b md:border-l md:border-t-0"
        >
          <img
            src={shower.url}
            alt="シャワークライミング"
            width={1200}
            height={1504}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[image:var(--hero-overlay)]" />
          <div className="relative z-10 flex h-full flex-col justify-end p-6 pb-8 text-primary-foreground md:p-10 md:pb-12">
            <span className="font-display text-sm tracking-[0.3em] text-accent">01 — SHOWER CLIMBING</span>
            <h2 className="mt-2 font-display text-3xl leading-tight md:text-5xl">シャワークライミング</h2>
            <p className="mt-3 whitespace-pre-line text-sm opacity-90 md:text-lg">滝を浴び、岩を登る。{"\n"}渓谷を遡る冒険へ。</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["滝登り", "飛び込み", "渓谷探検"].map((t) => (
                <span key={t} className="rounded-full bg-primary-foreground/15 px-3 py-1 text-xs backdrop-blur-md md:text-sm">{t}</span>
              ))}
            </div>
            <span className="mt-5 inline-flex w-fit items-center gap-3 border-b border-accent pb-1 text-sm tracking-widest">
              詳しく見る <span className="transition-transform group-hover:translate-x-2">→</span>
            </span>
          </div>
        </a>

        <div className="pointer-events-none absolute left-10 top-1/2 z-10 hidden -translate-y-1/2 text-primary-foreground md:block">
          <p className="font-display text-xs tracking-[0.5em] opacity-80">EMERALD RIVER</p>
          <h1 className="mt-2 font-display text-4xl [text-shadow:0_2px_20px_oklch(0_0_0/0.5)]">清流で、遊ぼう。</h1>
        </div>
      </section>
    </main>
  );
}
