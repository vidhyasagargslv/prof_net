
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Profnet",
  description: "Get connected with professor from CSE and IT department of Lovely professional university ",
};



export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
            <body className={inter.className}>{children}</body>
      
    </html>
    
      
  );
}
