import { StyleProvider } from "./StyleProvider";

export default function WithBug({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <StyleProvider>{children}</StyleProvider>;
}
