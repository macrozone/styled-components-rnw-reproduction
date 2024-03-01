export default function UnstyledSSR({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // without style provider, client is ok, but server answer is unstyled
  return <>{children}</>;
}
