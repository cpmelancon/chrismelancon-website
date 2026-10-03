import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chris Melançon | Land Steward & Technologist',
  description: 'Chris Melançon - Committed to regenerative leadership in agriculture, land stewardship, and technology.',
  openGraph: {
    title: 'Chris Melançon | Land Steward & Technologist',
    description: 'Committed to regenerative leadership in agriculture, land stewardship, and technology.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.className}>
      <body>{children}</body>
    </html>
  );
}
