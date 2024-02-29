// !! Types
import { ChildrenType } from "@/components/CommonTypes";

// !! Components
import Layout from "@/components/Common/Layout";

// !! Styles
import "./globals.css";

export default function RootLayout({ children }: ChildrenType) {
  return (
    <html>
      <body suppressHydrationWarning={true}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
