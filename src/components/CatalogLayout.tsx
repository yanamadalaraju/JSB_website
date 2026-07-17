interface Props {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

export default function CatalogLayout({ sidebar, children }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Sidebar */}
      <div className="lg:col-span-1">{sidebar}</div>

      {/* Products */}
      <div className="lg:col-span-3">{children}</div>
    </div>
  );
}