import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Header from "@/components/Headers";

export default function Home() {

  return (
    <main className="max-w-screen-xl w-full mx-auto px-4">
      <div className="mt-20">
        <Header />
        <Contacts />
        <About />
      </div>
    </main>
  );
}
