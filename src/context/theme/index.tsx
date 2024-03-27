// !! Types
import { ChildrenType } from "@/components/CommonTypes";
import { ThemePropsTypes, ThemeTypes } from "./index.types";

// !! Hooks
import { createContext, useEffect, useState } from "react";

export const themeContext = createContext<ThemePropsTypes>({
  theme: null,
  handleChangeTheme: () => {},
});

const ThemeContextWrapper = ({ children }: ChildrenType) => {
  const [theme, setTheme] = useState<ThemeTypes>(null);

  const handleChangeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.querySelector("html")?.setAttribute("data-theme", newTheme);
  };

  // !! [Begin] Prevent storage editing => user can`t modify storage space
  // const handleChangeStorage = (event: StorageEvent) => {
  //   if (event.oldValue) {
  //     localStorage.setItem("theme", event.oldValue);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("storage", handleChangeStorage);

  //   return () => {
  //     window.removeEventListener("storage", handleChangeStorage);
  //   };
  // }, [theme]);
  // !! [End]

  // !! [Begin] Detect Theme And Set
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme === "dark" ? "dark" : "light");
    } else {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      setTheme(prefersDarkMode ? "dark" : "light");
      localStorage.setItem("theme", prefersDarkMode ? "dark" : "light");
    }
  }, []);
  // !! [End]

  return (
    <themeContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextWrapper;
