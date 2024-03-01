import { StyleProvider } from "./StyleProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyleProvider>{children}</StyleProvider>
      </body>
    </html>
  );
}
