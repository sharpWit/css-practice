import NavbarBlog from "@/features/NavbarBlog";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col max-w-6xl min-h-[calc(100dvh-10rem)] space-y-4 mt-6 mx-auto p-2 bg-secondary text-secondary-content shadow-md relative">
      <NavbarBlog />
      {children}
    </section>
  );
}
