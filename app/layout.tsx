import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chris Melançon | Land Steward & Technologist",
  description: "Personal dossier and professional positioning for regenerative agriculture, land stewardship, and sustainable innovation leadership.",
  openGraph: {
    title: "Chris Melançon",
    description: "Land Steward & Technologist exploring regenerative leadership opportunities",
    url: "https://chrismelancon.com",
    siteName: "Chris Melançon",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
