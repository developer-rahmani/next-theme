// !! Types
import { ChildrenType } from "@/components/CommonTypes";

// !! Components
import Layout from "@/components/Common/Layout";

// !! Styles
import "@/styles/global.css" 

export default function RootLayout({ children }: ChildrenType) {
  const setInitialTheme = `
  function getUserPreference() {
    if (window.localStorage.getItem('theme')) {
      return window.localStorage.getItem('theme');
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.querySelector("html").dataset.theme = getUserPreference();
`;

  return (
    <html className="bg-main">
      <body suppressHydrationWarning={true} className="flex flex-col h-screen overflow-hidden">
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />

        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
