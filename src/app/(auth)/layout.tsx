export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="overflow-hidden bg-gray-50 scrollbar-hide">{children}</div>
  )
}
