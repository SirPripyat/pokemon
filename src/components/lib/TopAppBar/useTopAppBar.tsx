import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function useTopAppBar() {
  const [screenWidth, setScreenWidth] = useState(0);

  const handleResize = useCallback(() => setScreenWidth(window.innerWidth), []);

  useEffect(() => {
    handleResize();
  }, [handleResize]);

  const pathname = usePathname();
  const isntHomePage = pathname !== "/";

  const arrowBackIsVisible = isntHomePage;

  const { back } = useRouter();
  const goToPreviousRoute = (): void => back();

  return { arrowBackIsVisible, goToPreviousRoute };
}
