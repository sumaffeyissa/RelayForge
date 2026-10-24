import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'RelayForge',
  description: 'Integration Reliability Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, -apple-system, sans-serif', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
