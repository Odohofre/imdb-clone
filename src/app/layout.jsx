import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "IMDB clone",
  description: "Generated by create next app",
  themeColor: "#111",
  keywords: ["NextJs", "IMDB clone", "TailwindCss", "React"],
  authors: [{ name: "Bright Odohofre" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />

        {/* Navbar */}

        {/* SearchBox */}

        {children}
      </body>
    </html>
  );
}
