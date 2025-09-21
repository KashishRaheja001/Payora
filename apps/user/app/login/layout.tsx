
export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className="antialiased bg-gray-300"
    >
      {children}
    </main>
  );
}
