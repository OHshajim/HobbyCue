import { Lexend } from "next/font/google";
import './globals.css';
const inter = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "Logoipsum",
  description: "Blogs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light" >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
