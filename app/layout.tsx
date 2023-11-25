import type { Metadata } from "next";
import "./css/globals.scss";
import "./css/webfonts/britti-sans-variable.css";
import Header from "./components/header";
import Cursor from "./components/cursor";

export const metadata: Metadata = {
  title: "Anthony Animba | Designer and Full-Stack Developer",
  description: "Digital Designer and Full-Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <Header />
        {children}
      </body>
    </html>
  );
}
