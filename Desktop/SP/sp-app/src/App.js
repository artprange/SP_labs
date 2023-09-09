import "./App.scss";
import Hero from "./components/HeroContainer/Hero";
import MainSection from "./components/MainSectionContainer/MainSection";
import About from "./components/AboutContainer/About";
import MyForm from "./components/FormContainer/Form";

function App() {
  return (
    <div>
      <Hero />

      <MainSection />
      <About />
      <MyForm />
    </div>
  );
}

export default App;
