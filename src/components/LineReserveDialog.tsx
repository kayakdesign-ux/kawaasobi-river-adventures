import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import lineQr from "@/assets/line-qr.png";

const LINE_ID = "@418xyaym";
const LINE_PAGE_URL = "https://page.line.me/418xyaym?openQrModal=true";
const LINE_GREEN = "#06C755";

const COURSES = ["1.5kmツーリング", "シャワークライミング"] as const;

type Counts = Record<string, number>;
type Group = { title: string; fields: { key: string; label: string }[] };
const KIDS = "10〜16歳";
const GROUPS: Record<(typeof COURSES)[number], Group[]> = {
  "1.5kmツーリング": [
    { title: "サップ 1人乗り", fields: [{ key: "s1a", label: "大人" }, { key: "s1k", label: KIDS }] },
    { title: "SUP 2人乗り（大人1名＋未就学1名がセット）", fields: [{ key: "s2a", label: "大人" }, { key: "s2p", label: "未就学" }] },
    { title: "パックラフト 1人乗り", fields: [{ key: "pa", label: "大人" }, { key: "pk", label: KIDS }] },
    { title: "カヤック 1人乗り", fields: [{ key: "ka", label: "大人" }, { key: "kk", label: KIDS }] },
  ],
  シャワークライミング: [{ title: "シャワークライミング", fields: [{ key: "sha", label: "大人" }, { key: "shk", label: KIDS }] }],
};

const WD = ["日", "月", "火", "水", "木", "金", "土"];

// 当日表示は当日12時（日本時間）まで。12時を過ぎたら翌日から表示する。
function jstNow() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const num = (type: string) => Number(parts.find((p) => p.type === type)?.value ?? 0);
  return { y: num("year"), m: num("month"), d: num("day"), h: num("hour") % 24 };
}

function buildDays() {
  const { y, m, d, h } = jstNow();
  const start = h >= 12 ? 1 : 0;
  const length = h >= 12 ? 3 : 4;
  return Array.from({ length }, (_, i) => {
    const t = new Date(Date.UTC(y, m - 1, d + start + i));
    return {
      value: t.toISOString().slice(0, 10),
      label: `${t.getUTCMonth() + 1}/${t.getUTCDate()}(${WD[t.getUTCDay()]})`,
      todayOnlyAfternoon: start === 0 && i === 0,
    };
  });
}

const SLOTS = ["午前", "午後"] as const;

export function LineReserveDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const [course, setCourse] = useState<(typeof COURSES)[number]>("1.5kmツーリング");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [days, setDays] = useState<{ value: string; label: string; todayOnlyAfternoon: boolean }[]>([]);
  const [c, setC] = useState<Counts>({});
  const [weight80, setWeight80] = useState(0);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    setDays(buildDays());
  }, []);
  const groups = GROUPS[course];
  const total = groups.reduce((a, g) => a + g.fields.reduce((b, f) => b + (c[f.key] ?? 0), 0), 0);

  const text = [
    "【空き状況の確認・お問い合わせ】",
    `希望日：${days.find((d) => d.value === date)?.label || "未定"}`,
    `便：${slot || "未定"}`,
    `コース：${course}`,
    ...groups.map((g) => `${g.title}：${g.fields.map((f) => `${f.label}${c[f.key] ?? 0}人`).join("／")}`),
    `体重80kg以上：${weight80}人`,
    `合計：${total}人`,
    `お名前：${name || "未入力"}`,
    `連絡先：${contact || "未入力"}`,
  ].join("\n");

  const lineUrl = `https://line.me/R/oaMessage/${encodeURIComponent(LINE_ID)}/?${encodeURIComponent(text)}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-2xl gap-0 overflow-y-auto rounded-[2rem] border-primary/20 p-0">
        <DialogHeader className="flex flex-row items-center gap-3 space-y-0 px-4 py-3 text-left md:px-6" style={{ backgroundColor: LINE_GREEN }}>
          <img src={lineQr} alt="公式LINEのQRコード" width={336} height={336} className="h-16 w-16 shrink-0 rounded-lg bg-white p-1" />
          <div className="min-w-0 flex-1">
            <DialogTitle className="font-display text-xl tracking-widest text-white">LINEでお問い合わせ</DialogTitle>
            <DialogDescription className="text-xs text-white/90">空き状況だけでもOK！入力内容をそのままLINEで送れます</DialogDescription>
          </div>
          <a
            href={LINE_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-6 shrink-0 rounded-full bg-white px-3 py-1.5 text-xs font-bold"
            style={{ color: LINE_GREEN }}
          >
            友だち追加
          </a>
        </DialogHeader>

        <div className="space-y-4 p-4 md:p-6">

          {/* 希望日・便 */}
          <div className="text-sm">
            <p className="font-bold">希望日と便</p>
            <div className={`mt-1 grid gap-2 ${days.length === 3 ? "grid-cols-3" : "grid-cols-4"}`}>
              {days.map((d) => (
                <div key={d.label} className="space-y-1 rounded-lg border bg-card p-2 text-center">
                  <p className="font-bold">{d.label}</p>
                  {SLOTS.map((s) => {
                    const disabled = d.todayOnlyAfternoon && s === "午前";
                    if (disabled) return <div key={s} className="h-[34px]" />;
                    const on = date === d.value && slot === s;
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => {
                          setDate(d.value);
                          setSlot(s);
                        }}
                        className={`block w-full rounded-md border px-1 py-1.5 text-xs font-bold ${on ? "bg-primary text-primary-foreground" : "bg-background"}`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* コース選択 */}
          <div className="text-sm">
            <p className="font-bold">コース</p>
            <div className="mt-1 grid grid-cols-2 gap-2">
              {COURSES.map((co) => (
                <button
                  key={co}
                  type="button"
                  onClick={() => setCourse(co)}
                  className={`rounded-lg border px-2 py-2 font-bold ${course === co ? "bg-primary text-primary-foreground" : "bg-background"}`}
                >
                  {co}
                </button>
              ))}
            </div>
          </div>

          {/* 人数 */}
          {groups.map((g) => (
            <div key={g.title}>
              <p className="text-sm font-bold">{g.title}</p>
              <div className="mt-1 grid grid-cols-2 gap-2">
                {g.fields.map((f) => (
                  <label key={f.key} className="flex items-center justify-between gap-2 rounded-lg border bg-card p-2 text-sm">
                    {f.label}
                    <select
                      aria-label={`${g.title} ${f.label}`}
                      value={c[f.key] ?? 0}
                      onChange={(e) => setC({ ...c, [f.key]: Number(e.target.value) })}
                      className="rounded border bg-background p-1"
                    >
                      {Array.from({ length: 11 }, (_, n) => (
                        <option key={n} value={n}>
                          {n}人
                        </option>
                      ))}
                    </select>
                  </label>
                ))}
              </div>
            </div>
          ))}

          {course !== "シャワークライミング" && (
          <label className="flex items-center justify-between gap-2 rounded-lg border bg-card p-2 text-sm font-bold">
            体重80kg以上の方は何人いますか？
            <select
              aria-label="体重80kg以上の方は何人いますか？"
              value={weight80}
              onChange={(e) => setWeight80(Number(e.target.value))}
              className="rounded border bg-background p-1 font-normal"
            >
              {Array.from({ length: 11 }, (_, n) => (
                <option key={n} value={n}>
                  {n}人
                </option>
              ))}
            </select>
          </label>
          )}

          <label className="block space-y-1 text-sm font-bold">
            お名前
            <Input autoComplete="name" value={name} maxLength={100} onChange={(e) => setName(e.target.value)} />
          </label>
          <label className="block space-y-1 text-sm font-bold">
            電話番号またはメールアドレス
            <Input autoComplete="email" value={contact} maxLength={255} onChange={(e) => setContact(e.target.value)} />
          </label>

          <pre className="whitespace-pre-wrap rounded-xl bg-muted p-3 font-sans text-sm">{text}</pre>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button
              type="button"
              onClick={() => window.open(lineUrl, "_blank", "noopener")}
              className="flex-1 rounded-full p-3 font-bold text-white hover:opacity-90"
              style={{ backgroundColor: LINE_GREEN }}
            >
              公式LINEで送信
            </Button>
            <Button variant="outline" type="button" onClick={copy} className="flex-1 rounded-full border p-3 font-bold">
              {copied ? "コピーしました" : "内容をコピー"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
