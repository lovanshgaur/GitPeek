export const metadata = {
  title: 'DevConnect',
  description: 'Generate beautiful GitHub profile cards',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen m-0 p-0">{children}</body>
    </html>
  );
}
