import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";


export const metadata = {
  title: "Graph Central",
  description: "Monitor...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
