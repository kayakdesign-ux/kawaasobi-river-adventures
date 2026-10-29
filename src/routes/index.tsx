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

// 境の瀬: boundary waves shared with the mask in styles.css (mobile: fine shallow ripples, desktop: fine stylized repeated waves).
const WAVE_MOBILE_D =
  "M0,70 C24,70 48,82 72,82 C96,82 120,70 144,70 C168,70 192,82 216,82 C240,82 264,70 288,70 C312,70 336,82 360,82 C384,82 408,70 432,70 C456,70 480,82 504,82 C528,82 552,70 576,70 C600,70 624,82 648,82 C672,82 696,70 720,70 C744,70 768,82 792,82 C816,82 840,70 864,70 C888,70 912,82 936,82 C960,82 984,70 1008,70 C1032,70 1056,82 1080,82 C1104,82 1128,70 1152,70 C1176,70 1200,82 1224,82 C1248,82 1272,70 1296,70 C1320,70 1344,82 1368,82 C1392,82 1416,70 1440,70";
const WAVE_D =
  "M0,72 C13,72 26,94 40,94 C53,94 66,72 80,72 C93,72 106,94 120,94 C133,94 146,72 160,72 C173,72 186,94 200,94 C213,94 226,72 240,72 C253,72 266,94 280,94 C293,94 306,72 320,72 C333,72 346,94 360,94 C373,94 386,72 400,72 C413,72 426,94 440,94 C453,94 466,72 480,72 C493,72 506,94 520,94 C533,94 546,72 560,72 C573,72 586,94 600,94 C613,94 626,72 640,72 C653,72 666,94 680,94 C693,94 706,72 720,72 C733,72 746,94 760,94 C773,94 786,72 800,72 C813,72 826,94 840,94 C853,94 866,72 880,72 C893,72 906,94 920,94 C933,94 946,72 960,72 C973,72 986,94 1000,94 C1013,94 1026,72 1040,72 C1053,72 1066,94 1080,94 C1093,94 1106,72 1120,72 C1133,72 1146,94 1160,94 C1173,94 1186,72 1200,72 C1213,72 1226,94 1240,94 C1253,94 1266,72 1280,72 C1293,72 1306,94 1320,94 C1333,94 1346,72 1360,72 C1373,72 1386,94 1400,94 C1413,94 1426,72 1440,72";

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
            <path d={WAVE_MOBILE_D} className="md:hidden" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            <path d={WAVE_D} className="hidden md:block" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
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
