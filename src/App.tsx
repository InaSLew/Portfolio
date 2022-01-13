import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/Section/AboutMe/AboutMe";
import Projects from "./Components/Section/Projects/Projects";
import Section from "./Components/Section/Section";

function App() {
  return (
    <div>
      <Header />
      <Section id = {'about-me'} content = {<AboutMe />} />
      <Section id = {'projects'} content = {<Projects />} />
      <Footer />
    </div>
  );
}

export default App;
