import { Zap } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="rounded-lg bg-primary p-1">
        <Zap className="h-5 w-5 text-primary-foreground" />
      </div>
      <span className="font-bold text-lg">Next.js</span>
    </div>
  );
}
