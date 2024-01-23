import '@progress/kendo-theme-default/dist/all.css';

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }
