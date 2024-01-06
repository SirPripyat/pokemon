import { Loader2 } from "lucide-react";

export default function LoaderScreen() {
  return (
    <div className="w-full h-screen flex justify-center items-center gap-4 sm:gap-6">
      <Loader2 className="h-1/5 w-1/5 animate-spin text-red-600" />
    </div>
  );
}
