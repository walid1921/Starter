import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Offers from "./sections/Offers";
import Products from "./sections/Products";
import Quality from "./sections/Quality";
import Reviews from "./sections/Reviews";
import Services from "./sections/Services";
import Subscribe from "./sections/Subscribe";

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl-padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <Products />
      </section>
      <section className="padding">
        <Quality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <Offers />
      </section>
      <section className="bg-pale-blue padding">
        <Reviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;