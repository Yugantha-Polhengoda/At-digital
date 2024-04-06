import OurServices from "@/components/homepage/OurServices";
import FAQ from "@/components/homepage/FAQ";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/homepage/Hero";

export default function Home() {
  return (
    <>
      <main className="">
        <div className="w-full subpixel-antialiased">
          <Header />
          <Hero />
          <OurServices />
          <FAQ />
          <Footer />
        </div>
      </main>
    </>
  );
}
