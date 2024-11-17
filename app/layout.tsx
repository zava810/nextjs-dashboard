import '@/app/ui/global.css';
import { hin115_font } from '@/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={hin115_font.className}>
      <body className={`${hin115_font.className} antialiased`}>{children}</body>
    </html>
  );
}