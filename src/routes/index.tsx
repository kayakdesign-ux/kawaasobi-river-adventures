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

// 境の瀬: boundary waves shared with the mask in styles.css (mobile: fine shallow ripples, desktop: fine stylized waves with natural irregularity).
const WAVE_MOBILE_D =
  "M0,70 C23.6,70 47.2,82.2 70.8,82.2 C98.5,82.2 126.1,70.1 153.8,70.1 C177.9,70.1 201.9,82.3 226.0,82.3 C247.3,82.3 268.5,70.0 289.8,70.0 C314.9,70.0 340.1,83.1 365.2,83.1 C385.7,83.1 406.1,70.7 426.6,70.7 C447.1,70.7 467.5,83.1 488.0,83.1 C513.7,83.1 539.3,71.6 565.0,71.6 C593.2,71.6 621.3,83.7 649.5,83.7 C674.8,83.7 700.2,69.6 725.5,69.6 C746.6,69.6 767.6,80.3 788.7,80.3 C812.9,80.3 837.2,71.6 861.4,71.6 C882.7,71.6 904.1,81.1 925.4,81.1 C945.3,81.1 965.3,70.1 985.2,70.1 C1008.7,70.1 1032.1,83.2 1055.6,83.2 C1079.8,83.2 1103.9,69.5 1128.1,69.5 C1152.1,69.5 1176.1,82.6 1200.1,82.6 C1223.7,82.6 1247.4,70.8 1271.0,70.8 C1299.3,70.8 1327.6,83.8 1355.9,83.8 C1383.9,83.8 1412.0,69.3 1440,69.3";
const WAVE_D =
  "M0,72 C12.5,72 25.0,91.7 37.5,91.7 C51.5,91.7 65.6,74.8 79.6,74.8 C93.1,74.8 106.7,93.1 120.2,93.1 C131.4,93.1 142.6,72.0 153.8,72.0 C164.9,72.0 176.0,93.6 187.1,93.6 C198.4,93.6 209.6,74.7 220.9,74.7 C233.9,74.7 246.8,96.2 259.8,96.2 C271.3,96.2 282.9,73.8 294.4,73.8 C308.4,73.8 322.3,97.0 336.3,97.0 C350.0,97.0 363.7,72.7 377.4,72.7 C393.0,72.7 408.6,91.0 424.2,91.0 C439.3,91.0 454.3,73.4 469.4,73.4 C481.0,73.4 492.7,91.5 504.3,91.5 C516.7,91.5 529.1,69.9 541.5,69.9 C553.3,69.9 565.1,94.5 576.9,94.5 C590.9,94.5 604.9,72.8 618.9,72.8 C632.5,72.8 646.0,91.1 659.6,91.1 C670.8,91.1 682.1,73.9 693.3,73.9 C707.5,73.9 721.7,93.5 735.9,93.5 C748.3,93.5 760.8,71.4 773.2,71.4 C786.3,71.4 799.4,92.7 812.5,92.7 C827.2,92.7 842.0,70.7 856.7,70.7 C868.8,70.7 881.0,94.5 893.1,94.5 C906.5,94.5 920.0,69.5 933.4,69.5 C947.8,69.5 962.3,92.6 976.7,92.6 C992.3,92.6 1008.0,74.5 1023.6,74.5 C1036.6,74.5 1049.5,95.7 1062.5,95.7 C1074.2,95.7 1085.8,72.1 1097.5,72.1 C1108.6,72.1 1119.7,95.1 1130.8,95.1 C1145.4,95.1 1160.0,71.5 1174.6,71.5 C1189.7,71.5 1204.9,92.8 1220.0,92.8 C1234.3,92.8 1248.5,71.4 1262.8,71.4 C1276.5,71.4 1290.3,93.7 1304.0,93.7 C1319.0,93.7 1333.9,69.1 1348.9,69.1 C1362.1,69.1 1375.3,95.1 1388.5,95.1 C1405.7,95.1 1422.8,70.7 1440,70.7";

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
