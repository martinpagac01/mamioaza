import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Materské centrum MAMI-OÁZA | Zlaté Moravce',
  description: 'Materské centrum MAMI-OÁZA v Zlatých Moravciach - miesto pre rodiny s deťmi.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk" className={outfit.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
