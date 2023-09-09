import "./App.scss";
import Hero from "./components/HeroContainer/Hero";
import MainSection from "./components/MainSectionContainer/MainSection";
import About from "./components/AboutContainer/About";
import MyForm from "./components/FormContainer/Form";
import Chat from "./components/ChatContainer/Chat";

function App() {
  return (
    <div>
      <Hero />
      <Chat />

      <MainSection />
      <About />
      <MyForm />
    </div>
  );
}

export default App;
