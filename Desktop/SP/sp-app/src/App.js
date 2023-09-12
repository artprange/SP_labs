import "./App.scss";
import Hero from "./components/HeroContainer/Hero";
import MainSection from "./components/MainSectionContainer/MainSection";
import About from "./components/AboutContainer/About";
import MyForm from "./components/FormContainer/Form";
import Footer from "./components/FooterContainer/Footer";

function App() {
  return (
    <div>
      <Hero />

      <MainSection />
      <About />
      <MyForm />
      <Footer />
    </div>
  );
}

export default App;
