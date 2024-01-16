import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

export default function usePushFirstPageOnRoute() {
  const pathname = usePathname();
  const { push } = useRouter();

  const pushFirstPageOnRoute = useCallback(() => {
    if (pathname === "/") return push(`/?page=1`);
  }, [pathname, push]);

  useEffect(() => {
    pushFirstPageOnRoute();
  }, [pushFirstPageOnRoute]);
}
