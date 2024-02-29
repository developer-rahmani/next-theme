// !! Hooks
import React, { useContext, useEffect } from "react";

// !! Context
import { themeContext } from "@/context/theme";

const ThemeSwitcher = () => {
  const { theme, handleChangeTheme } = useContext(themeContext);

  useEffect(() => {
    console.log("theme", theme);
  }, [theme]);

  return (
    <div className="flex justify-center items-center h-[100px]">
      <button
        className="flex justify-center p-4 rounded-[4px] bg-btn text-color"
        onClick={handleChangeTheme}
      >
        Theme switcher
      </button>
    </div>
  );
};

export default ThemeSwitcher;
