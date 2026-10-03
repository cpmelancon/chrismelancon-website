import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chris Melançon | Land Steward & Technologist',
  description: 'Chris Melançon - Committed to regenerative leadership in agriculture, land stewardship, and technology.',
  icons: {
    icon: '/favicon.svg',
  },
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
