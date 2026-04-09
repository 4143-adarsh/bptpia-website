import Header from "@/components/header";
import HomeContent from "@/components/home-content";

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* 1. Global Header remains in page.tsx as per user request */}
      <Header />

      {/* 2. Main Page Content refactored into HomeContent component */}
      <HomeContent />
    </div>
  );
}