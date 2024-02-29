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
    <div className="flex justify-center items-center h-[150px]">
      <button
        className="flex justify-center bg-gray-800 p-4 rounded-[4px]"
        onClick={handleChangeTheme}
      >
        Theme switcher
      </button>
    </div>
  );
};

export default ThemeSwitcher;
