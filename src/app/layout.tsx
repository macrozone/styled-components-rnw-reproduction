export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <p>(reload the page to see the effect)</p>
        <>{children}</>
      </body>
    </html>
  );
}
