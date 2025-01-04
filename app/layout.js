import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BootstrapClient from "@/app/_components/BootstrapClient";
import "./globals.css";
import PreFooter from "./_components/footers/PreFooter";
import PostFooter from "./_components/footers/PostFooter";

export const metadata = {
  title: "Association for Computing Machinery",
  description: "Temple University's Association for Computing Machinery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <PreFooter />
        <PostFooter />
        <BootstrapClient />
      </body>
    </html>
  );
}
