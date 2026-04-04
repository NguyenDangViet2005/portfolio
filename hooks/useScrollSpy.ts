import { useState, useEffect } from "react";

export function useScrollSpy(ids: string[], offset: number = 0) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let currentActiveId = "";
      // Loop through all sections
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the element is near the top of the viewport
          if (rect.top <= offset + 100 && rect.bottom >= offset + 100) {
            currentActiveId = id;
          }
        }
      }
      
      // If we scrolled past the bottom, make the last element active
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50 &&
        ids.length > 0
      ) {
        currentActiveId = ids[ids.length - 1];
      }

      // Setting active id if we are above the first element could be handled (e.g. "")
      
      if (currentActiveId && currentActiveId !== activeId) {
        setActiveId(currentActiveId);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids, offset, activeId]);

  return activeId;
}
