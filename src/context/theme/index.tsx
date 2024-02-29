// !! Types
import { ChildrenType } from "@/components/CommonTypes";
import { ThemeTypes } from "./index.types";

// !! Hooks
import { createContext, useState } from "react";

export const themeContext = createContext<ThemeTypes>({
  theme: null,
  handleChangeTheme: () => {},
});

const ThemeContextWrapper = ({ children }: ChildrenType) => {
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);

  const handleChangeTheme = () => {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  };

  return (
    <themeContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextWrapper;
