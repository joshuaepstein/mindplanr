import Background from '@/components/app/home/background';
import Nav from '@/components/app/home/nav';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between">
      {/* <MobileNav /> */}
      <Nav />
      {children}
      {/* <Footer /> */}
      <Background />
    </div>
  );
}
