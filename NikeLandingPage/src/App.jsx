import { Hero, PopularProducts, SuperQuality, Services, SpecialOffer, CustomerReview, Subscribe, Footer } from "./sections/index";
import Nav from "./Components/Nav";
const App = () => (
    <main className="relative">
        <Nav />
        <section className="xl:padding-1 wide:padding-r padding-b">
            <Hero />
        </section>
        <section className="padding"> <PopularProducts /></section>
        <section className="padding"> <SuperQuality /></section>
        <section className="padding-x py-10 "> <Services /></section>
        <section className="padding"> <SpecialOffer /></section>
        <section className="padding bg-pale-blue"> <CustomerReview /></section>
        <section className="padding-x sm:py-32 py-16 w-full"> <Subscribe /> </section>
        <section className="padding-x padding-t pb-8 bg-black"> <Footer /></section>
    </main>
)
export default App;