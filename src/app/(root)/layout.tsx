import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
