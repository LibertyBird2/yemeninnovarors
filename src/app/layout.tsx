// "use client";

import { Header, Footer } from "@/components/structure";
import data from '@/data.json';
import './globals.css'
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className='dark:bg-black'>
        < Header logo={data.logo} title={data.title} />
        {children}
        <Footer title={data.title} description={data.description} services={data.services} contacts={data.contacts} />
      </body>
    </html>
  );
}
