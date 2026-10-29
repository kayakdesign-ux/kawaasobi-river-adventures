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

// 境の瀬: boundary wave shared by the mask in styles.css and the crest line below.
const WAVE_D =
  "M0,66 C30,66 60,94 90,94 C120,94 150,66 180,66 C210,66 240,94 270,94 C300,94 330,66 360,66 C390,66 420,94 450,94 C480,94 510,66 540,66 C570,66 600,94 630,94 C660,94 690,66 720,66 C750,66 780,94 810,94 C840,94 870,66 900,66 C930,66 960,94 990,94 C1020,94 1050,66 1080,66 C1110,66 1140,94 1170,94 C1200,94 1230,66 1260,66 C1290,66 1320,94 1350,94 C1380,94 1410,66 1440,66";

function Index() {
  return (
    <main className="bg-background">
      <section className="relative h-screen min-h-[640px] overflow-hidden">
        <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5 text-primary-foreground md:px-10">
          <span className="font-display text-2xl tracking-widest">川遊び<span className="ml-2 text-xs opacity-80">KAWAASOBI</span></span>
          <a href="#reserve" className="rounded-full border border-primary-foreground/60 px-5 py-2 text-sm backdrop-blur-sm transition hover:bg-primary-foreground hover:text-primary">ご予約</a>
        </header>

        {/* 1.5kmツーリング — 上3分の3 */}
        <a
          href="#reserve"
          className="group absolute inset-x-0 top-0 h-[76%] overflow-hidden md:h-[82%]"
        >
          <img
            src={touring.url}
            alt="1.5kmツーリング"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[image:var(--hero-overlay)]" />
          <div className="relative z-10 flex h-full flex-col justify-end p-6 pb-24 text-primary-foreground md:p-12 md:pb-24">
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

        {/* シャワークライミング — 下4分の1、境の瀬の波で重なる */}
        <div className="group absolute inset-x-0 bottom-0 z-10 h-[32%] transition-[height] duration-700 ease-out md:h-[27%] md:group-hover:h-[30%]">
          <a href="#reserve" className="hero-wave-mask absolute inset-0 block overflow-hidden">
            <img
              src={shower.url}
              alt="シャワークライミング"
              width={1200}
              height={1504}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[image:var(--hero-overlay)]" />
          </a>
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full text-primary-foreground/40"
            viewBox="0 0 1440 400"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d={WAVE_D} fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          </svg>
          <a
            href="#reserve"
            className="relative z-10 flex h-full flex-col justify-end p-5 pb-6 text-primary-foreground md:p-10 md:pb-8"
          >
            <span className="font-display text-sm tracking-[0.3em] text-accent">01 — SHOWER CLIMBING</span>
            <h2 className="mt-2 font-display text-3xl leading-tight md:text-5xl">シャワークライミング</h2>
            <p className="mt-3 hidden whitespace-pre-line text-sm opacity-90 md:block md:text-lg">滝を浴び、岩を登る。{"\n"}渓谷を遡る冒険へ。</p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              {["滝登り", "飛び込み", "渓谷探検"].map((t) => (
                <span key={t} className="rounded-full bg-primary-foreground/15 px-3 py-1 text-xs backdrop-blur-md md:text-sm">{t}</span>
              ))}
            </div>
            <span className="mt-4 inline-flex w-fit items-center gap-3 border-b border-accent pb-1 text-sm tracking-widest md:mt-5">
              詳しく見る <span className="transition-transform group-hover:translate-x-2">→</span>
            </span>
          </a>
        </div>

        <div className="pointer-events-none absolute left-10 top-[32%] z-[5] hidden -translate-y-1/2 text-primary-foreground md:block">
          <p className="font-display text-xs tracking-[0.5em] opacity-80">EMERALD RIVER</p>
          <h1 className="mt-2 font-display text-4xl [text-shadow:0_2px_20px_oklch(0_0_0/0.5)]">清流で、遊ぼう。</h1>
        </div>
      </section>
    </main>
  );
}
