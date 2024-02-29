"use client";

// !! Types
import { ChildrenType } from "@/components/CommonTypes";

// !! Context
import ThemeContextWrapper from "@/context/theme";
import ThemeSwitcher from "../ThemeSwitcher";

const Layout = ({ children }: ChildrenType) => {
  return (
    <ThemeContextWrapper>
      <ThemeSwitcher />

      <div className="flex grow overflow-hidden">
      {children}
      </div>
    </ThemeContextWrapper>
  );
};

export default Layout;
