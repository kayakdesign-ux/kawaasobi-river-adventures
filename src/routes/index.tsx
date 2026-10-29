import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AccessDialog } from "@/components/AccessDialog";
import shower from "@/assets/shower-climbing.jpg.asset.json";
import touring from "@/assets/river-touring.jpg.asset.json";
import packraft from "@/assets/packraft.jpg.asset.json";
import shikokuMap from "@/assets/shikoku-map.png.asset.json";
import illustPackraft from "@/assets/illust-packraft.png";
import illustSup from "@/assets/illust-sup.png";
import illustKayak from "@/assets/illust-kayak.png";

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
  "M0,83.7 C6.5,78.6 25.0,74.2 44.5,74.2 C67.2,74.2 81.1,82.4 116.8,82.4 C139.5,82.4 154.2,81.6 162.3,81.2 C168.1,74.5 182.3,66.8 199.8,66.8 C220.2,66.8 235.1,82.5 267.1,82.5 C287.5,82.5 300.6,81.1 307.9,80.4 C315.6,75.6 340.1,68.8 363.3,68.8 C390.5,68.8 404.8,85.8 447.4,85.8 C474.5,85.8 491.9,84.6 501.6,84.0 C507.1,76.9 518.7,71.0 535.3,71.0 C554.6,71.0 570.7,85.9 601.0,85.9 C620.4,85.9 632.8,84.9 639.7,84.3 C647.0,74.4 663.7,66.5 685.6,66.5 C711.2,66.5 731.0,83.2 771.2,83.2 C796.8,83.2 813.2,81.8 822.4,81.1 C829.0,78.4 853.2,73.7 873.1,73.7 C896.4,73.7 905.5,83.2 942.1,83.2 C965.4,83.2 980.3,82.4 988.6,82.0 C994.1,78.0 1012.0,73.1 1028.4,73.1 C1047.6,73.1 1057.0,84.3 1087.1,84.3 C1106.2,84.3 1118.5,83.5 1125.3,83.0 C1132.5,77.0 1147.8,71.3 1169.4,71.3 C1194.6,71.3 1215.3,84.2 1254.9,84.2 C1280.1,84.2 1296.3,83.2 1305.3,82.7 C1310.7,78.7 1328.8,74.3 1344.9,74.3 C1363.8,74.3 1372.6,82.8 1402.3,82.8 C1421.1,82.8 1433.3,82.0 1440.0,81.7";
const WAVE_D =
  "M0,94.2 C3.7,76.9 16.1,61.2 27.2,61.2 C40.3,61.2 46.6,97.9 67.1,97.9 C80.1,97.9 88.5,95.1 93.2,93.7 C97.1,80.5 105.1,67.9 117.0,67.9 C130.8,67.9 142.5,94.6 164.2,94.6 C178.1,94.6 187.0,92.4 191.9,91.3 C196.6,81.4 207.8,69.5 221.8,69.5 C238.3,69.5 250.6,94.2 276.4,94.2 C292.8,94.2 303.4,92.1 309.3,91.1 C313.0,84.3 324.0,74.7 335.3,74.7 C348.4,74.7 356.2,94.1 376.9,94.1 C390.0,94.1 398.5,92.4 403.2,91.6 C407.0,82.3 418.7,71.1 430.2,71.1 C443.6,71.1 451.2,97.4 472.3,97.4 C485.7,97.4 494.4,95.4 499.2,94.4 C503.2,80.3 516.5,67.4 528.5,67.4 C542.5,67.4 549.2,96.0 571.3,96.0 C585.3,96.0 594.3,93.7 599.3,92.6 C602.5,82.1 615.2,70.8 624.7,70.8 C635.8,70.8 639.0,95.1 656.5,95.1 C667.6,95.1 674.8,93.1 678.7,92.1 C682.6,76.7 695.7,61.0 707.3,61.0 C720.8,61.0 726.9,97.4 748.0,97.4 C761.5,97.4 770.2,94.6 775.0,93.2 C779.1,83.5 789.6,73.4 801.9,73.4 C816.2,73.4 826.1,94.9 848.6,94.9 C863.0,94.9 872.2,93.1 877.3,92.2 C881.7,86.0 894.1,77.8 907.4,77.8 C922.9,77.8 932.6,97.1 957.0,97.1 C972.5,97.1 982.4,95.6 988.0,94.9 C990.9,78.2 1002.7,63.7 1011.6,63.7 C1022.1,63.7 1025.4,95.5 1041.8,95.5 C1052.3,95.5 1059.0,93.0 1062.8,91.7 C1066.2,78.2 1074.5,63.7 1084.7,63.7 C1096.7,63.7 1105.5,94.0 1124.3,94.0 C1136.3,94.0 1144.0,91.4 1148.3,90.1 C1151.3,77.6 1163.1,62.5 1172.1,62.5 C1182.5,62.5 1185.6,95.9 1202.0,95.9 C1212.5,95.9 1219.2,93.2 1222.9,91.9 C1227.4,82.7 1241.9,71.9 1255.3,71.9 C1270.9,71.9 1278.7,94.3 1303.2,94.3 C1318.8,94.3 1328.9,92.4 1334.4,91.4 C1338.7,78.9 1347.8,64.9 1360.5,64.9 C1375.3,64.9 1387.2,95.1 1410.4,95.1 C1425.2,95.1 1434.7,92.6 1440.0,91.4";

// タグを押すと下にキャッチコピーとイラストが出る
const TANDEM_SEATS = ["2人乗り 6〜9歳", "1人乗り 10歳〜"];
const TOUR_TAGS = [
  { label: "サップ", catch: "夏のおすすめNo1", icon: illustSup, seats: TANDEM_SEATS },
  { label: "パックラフト", catch: "初めてでも安心パックラフト", icon: illustPackraft, seats: TANDEM_SEATS },
  { label: "カヤック", catch: "根強い人気のカヤック", icon: illustKayak, seats: ["1人乗り 10歳〜"] },
] as const;

function Index() {
  const [accessOpen, setAccessOpen] = useState(false);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [showerOpen, setShowerOpen] = useState(false);
  const activeTour = TOUR_TAGS.find((t) => t.label === activeTag);
  return (
    <main className="bg-background">
      <section className="relative h-screen min-h-[640px] overflow-hidden">
        <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-2 px-4 py-4 text-primary-foreground md:px-10 md:py-5">
          <span className="whitespace-nowrap font-display text-lg tracking-widest md:text-2xl">高知県の川遊び<span className="ml-1 text-[10px] opacity-80 md:ml-2 md:text-xs">KAWAASOBI.COM</span></span>
          <a href="#reserve" className="whitespace-nowrap rounded-full border border-primary-foreground/60 px-3 py-2 text-sm backdrop-blur-sm transition hover:bg-primary-foreground hover:text-primary md:px-5">ご予約</a>
        </header>

        {/* アクセスマップ — 四国の地図と大豊IC */}
        <button type="button" onClick={() => setAccessOpen(true)} aria-label="アクセス情報とルートを開く" className="group/map absolute left-4 top-16 z-20 w-36 cursor-pointer text-left transition hover:-translate-y-0.5 md:left-10 md:w-64">
          <div className="rounded-[1.75rem] rounded-tr-md border border-primary-foreground/25 bg-primary-foreground/10 p-3 shadow-[0_10px_40px_oklch(0_0_0/0.35)] backdrop-blur-md md:rounded-[2.5rem] md:p-4">
            <p className="whitespace-nowrap font-display text-[10px] tracking-[0.3em] text-primary-foreground/85 md:text-xs md:tracking-[0.45em]">ACCESS — 四国</p>
            <div className="relative mt-2">
              <img
                src={shikokuMap.url}
                alt="四国の地図。大豊ICの位置に☆印"
                className="w-full opacity-95 drop-shadow-[0_4px_18px_oklch(0_0_0/0.35)]"
              />
              {/* 大豊IC — ☆マーカー（ラベルの「IC」の位置に重ねる） */}
              <div className="absolute left-[58.1%] top-[37.8%] -translate-x-1/2 -translate-y-1/2">
                <span className="relative block text-center">
                  <span className="map-marker-ping absolute left-1/2 top-1/2 -z-10 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/70 bg-accent/30" />
                  <span className="text-2xl leading-none text-accent [text-shadow:0_0_8px_oklch(0.35_0.08_175/0.9),0_1px_3px_oklch(0_0_0/0.6)] md:text-3xl">☆</span>
                </span>
              </div>
            </div>
            <p className="mt-2 text-center text-[10px] tracking-widest text-primary-foreground/80 group-hover/map:text-accent md:text-xs">タップでアクセス・ルート →</p>
          </div>
        </button>
        <AccessDialog open={accessOpen} onOpenChange={setAccessOpen} />

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
          <figure className="absolute right-[2.5%] top-[42%] z-20 hidden w-[30%] max-w-[520px] -translate-y-1/2 border-2 border-primary-foreground/80 p-2 shadow-2xl md:block">
            <figcaption className="absolute -top-4 left-5 flex items-baseline gap-2 rounded-full bg-accent px-4 py-1 font-['Zen_Maru_Gothic',sans-serif] font-bold text-primary shadow-lg">
              <span className="text-xs">初めてでも安定抜群</span>
              <span className="text-base">パックラフト</span>
            </figcaption>
            <img src={packraft.url} alt="パックラフト" className="block aspect-[16/10] w-full object-cover" />
          </figure>
          <div className={`relative z-10 flex h-full flex-col justify-end p-6 pb-24 text-primary-foreground transition-opacity duration-500 md:p-12 md:pb-24 ${showerOpen ? "pointer-events-none opacity-0" : "opacity-100"}`}>
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-display text-sm tracking-[0.3em] text-accent">02 — 1.5KM RIVER TOURING</span>
              <span className="-rotate-2 rounded-full bg-accent px-3 py-0.5 font-['Zen_Maru_Gothic',sans-serif] text-xs font-bold text-primary shadow-lg md:text-sm">どのコースも 岩からジャンプは何回でも！</span>
            </div>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-7xl">1.5kmツーリング</h2>
            <p className="mt-4 whitespace-pre-line text-base opacity-90 md:text-xl">透きとおる水面を、{"\n"}ゆったりと下る。</p>
            <div className="mt-6 flex flex-wrap gap-2.5 md:gap-3">
              {TOUR_TAGS.map((t) => (
                <span
                  key={t.label}
                  role="button"
                  tabIndex={0}
                  aria-pressed={activeTag === t.label}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveTag(activeTag === t.label ? null : t.label);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveTag(activeTag === t.label ? null : t.label);
                    }
                  }}
                  className={`cursor-pointer select-none rounded-full px-5 py-1.5 text-base backdrop-blur-md transition md:px-6 md:py-2 md:text-lg ${
                    activeTag === t.label
                      ? "bg-accent font-bold text-primary shadow-lg"
                      : "bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/30"
                  }`}
                >
                  {t.label}
                </span>
              ))}
            </div>
            {activeTour && (
              <div className="mt-4 flex w-fit animate-in items-center gap-3 rounded-2xl bg-primary-foreground/15 px-4 py-2.5 backdrop-blur-md fade-in slide-in-from-bottom-2 duration-300">
                <img src={activeTour.icon} alt="" loading="lazy" width={816} height={816} className="h-14 w-14 shrink-0 object-contain md:h-20 md:w-20" />
                <div className="font-['Zen_Maru_Gothic',sans-serif]">
                  <span className="block whitespace-nowrap text-base font-bold tracking-wide md:text-xl">{activeTour.catch}</span>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {activeTour.seats.map((s) => (
                      <span key={s} className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-bold text-primary md:text-sm">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <span className="mt-8 inline-flex w-fit items-center gap-3 border-b border-accent pb-1 text-sm tracking-widest">
              詳しく見る <span className="transition-transform group-hover:translate-x-2">→</span>
            </span>
          </div>
        </a>

        {/* シャワークライミング — 下4分の1、押すと画面半分まで広がる */}
        <div
          role="button"
          tabIndex={0}
          aria-expanded={showerOpen}
          aria-label="シャワークライミングを大きく表示"
          onClick={() => setShowerOpen((v) => !v)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setShowerOpen((v) => !v);
            }
          }}
          className={`group absolute inset-x-0 bottom-0 z-10 cursor-pointer transition-[height] duration-700 ease-out ${
            showerOpen ? "h-[50%]" : "h-[32%] md:h-[27%] md:hover:h-[30%]"
          }`}
        >
          <div className="hero-wave-mask absolute inset-0 block overflow-hidden">
            <img
              src={shower.url}
              alt="シャワークライミング"
              width={1200}
              height={1504}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[image:var(--hero-overlay)]" />
          </div>
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full text-primary-foreground/40"
            viewBox="0 0 1440 400"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d={WAVE_MOBILE_D} className="md:hidden" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            <path d={WAVE_D} className="hidden md:block" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          </svg>
          <div className="relative z-10 flex h-full flex-col justify-end p-5 pb-6 text-primary-foreground md:p-10 md:pb-8">
            <div className="flex items-center gap-3">
              <span className="font-display text-sm tracking-[0.3em] text-accent">01 — SHOWER CLIMBING</span>
              <span className="rounded-full bg-accent px-3 py-0.5 font-['Zen_Maru_Gothic',sans-serif] text-xs font-bold text-primary md:text-sm">6歳〜OK</span>
            </div>
            <h2 className="mt-2 font-display text-3xl leading-tight md:text-5xl">シャワークライミング</h2>
            <p className={`mt-3 whitespace-pre-line text-sm opacity-90 md:text-lg ${showerOpen ? "block" : "hidden"}`}>滝を浴び、岩を登る。{"\n"}渓谷を遡る冒険へ。</p>
            <div className={`mt-3 flex-wrap gap-2 md:mt-4 ${showerOpen ? "flex" : "hidden"}`}>
              {["滝登り", "岩ジャンプ何度でも！", "渓谷探検"].map((t) => (
                <span key={t} className="rounded-full bg-primary-foreground/15 px-3 py-1 text-xs backdrop-blur-md md:text-sm">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-5 md:mt-5">
              <a
                href="#reserve"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex w-fit items-center gap-3 border-b border-accent pb-1 text-sm tracking-widest"
              >
                詳しく見る <span className="transition-transform group-hover:translate-x-2">→</span>
              </a>
              <span className="text-xs opacity-75">{showerOpen ? "タップで閉じる" : "タップで大きく"}</span>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute left-10 top-[32%] z-[5] hidden -translate-y-1/2 text-primary-foreground md:left-[22rem] md:block">
          <p className="font-display text-xs tracking-[0.5em] opacity-80">EMERALD RIVER</p>
          <h1 className="mt-2 font-display text-4xl [text-shadow:0_2px_20px_oklch(0_0_0/0.5)]">清流で、遊ぼう。</h1>
        </div>
      </section>
    </main>
  );
}
