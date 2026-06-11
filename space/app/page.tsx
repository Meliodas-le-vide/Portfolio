import Footer from "./components/main/Footer";
import Hero from "./components/main/Hero";


export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <div className="mt-15">
           <Footer />
        </div>
      </div>
    </main>
  );
}