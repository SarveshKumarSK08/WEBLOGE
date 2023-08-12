import "./globals.css";
import "../../styles/style.scss";
import { Inter } from "next/font/google";
import { Layout } from "../../Components/page";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WEBLOGE",
  description: "Blog website created by Sarvesh Kumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body className={inter.className}>
      <Layout>
        
        {children}
        
      </Layout>
        </body>
      
    </html>
  );
}
