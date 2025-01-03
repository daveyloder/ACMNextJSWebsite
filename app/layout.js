import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BootstrapClient from "@/app/_components/BootstrapClient";
import "./globals.css";
import FooterComponent from "@/app/_components/footers/FooterComponent";

export const metadata = {
  title: "ACM",
  description: "Temple's cool awesome cool machine cluib",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <FooterComponent />
        <BootstrapClient />
      </body>
    </html>
  );
}
