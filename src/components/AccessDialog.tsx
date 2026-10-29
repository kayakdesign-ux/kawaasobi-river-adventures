import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const DESTINATION = "高知県長岡郡大豊町西土居1";

const ACCESS = [
  { from: "大豊IC", time: "約15分", highlight: true },
  { from: "高知市内｜ひろめ市場", time: "約50分" },
  { from: "道の駅", time: "約30分" },
  { from: "高知龍馬空港", time: "約50分" },
];

export function AccessDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const key = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"];
  const src = `https://www.google.com/maps/embed/v1/directions?key=${key}&origin=${encodeURIComponent("大豊IC")}&destination=${encodeURIComponent(DESTINATION)}&mode=driving&language=ja&region=JP`;
  const external = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(DESTINATION)}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl gap-0 overflow-hidden rounded-[2rem] border-primary/20 p-0">
        <DialogHeader className="bg-primary px-6 py-5 text-left text-primary-foreground md:px-8">
          <p className="font-display text-xs tracking-[0.4em] text-accent">ACCESS</p>
          <DialogTitle className="font-display text-2xl tracking-widest">アクセス・観光地情報</DialogTitle>
          <DialogDescription className="text-primary-foreground/80">集合場所：西土居1番地（車でのおおよその所要時間）</DialogDescription>
        </DialogHeader>

        <ul className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
          {ACCESS.map((a) => (
            <li key={a.from} className="bg-background px-4 py-4 text-center">
              <p className="text-xs text-muted-foreground">{a.from}</p>
              <p className={`mt-1 font-display text-xl ${a.highlight ? "text-primary" : "text-foreground"}`}>{a.time}</p>
            </li>
          ))}
        </ul>

        <div className="border-t border-border">
          <div className="flex items-center justify-between px-6 py-3 md:px-8">
            <p className="text-sm font-medium text-foreground">大豊IC → 西土居1番地 ルート</p>
            <a href={external} target="_blank" rel="noreferrer" className="text-sm text-primary underline-offset-4 hover:underline">
              Googleマップで開く →
            </a>
          </div>
          <iframe title="西土居1番地までのルート" src={src} className="h-[360px] w-full border-0" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
