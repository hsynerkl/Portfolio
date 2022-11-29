import { useEffect } from "react";

export default function useLockBody(showSidebar: boolean) {
  //@ts-ignore
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = showSidebar ? "hidden" : "auto";
    return () => (document.body.style.overflow = originalStyle);
  }, [showSidebar]);
}
