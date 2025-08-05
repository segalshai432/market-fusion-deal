import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UserTypes from "@/components/UserTypes";
import Marketplace from "@/components/Marketplace";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <UserTypes />
      <Marketplace />
      <Footer />
    </div>
  );
};

export default Index;
