import { Card } from "@/components/ui/card";
import { BorderAnimate } from "@/components/ui/moving-border";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900">
      <BorderAnimate
        borderRadius="10px"
        className=""
      >
        GIni bang?
      </BorderAnimate>
    </main>
  );
}
