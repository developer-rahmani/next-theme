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

      {children}
    </ThemeContextWrapper>
  );
};

export default Layout;
