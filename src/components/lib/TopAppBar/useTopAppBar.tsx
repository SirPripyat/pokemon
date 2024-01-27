import { SCREEN_SIZES } from "@/constants/screenSizes";
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

  const screenWidthSizeIsLessThanMd = screenWidth < SCREEN_SIZES.md;

  const arrowBackIsVisible = isntHomePage && screenWidthSizeIsLessThanMd;

  const { back } = useRouter();
  const goToPreviousRoute = () => back();

  return { arrowBackIsVisible, goToPreviousRoute };
}
