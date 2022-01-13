import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Section from "./Components/Section/Section";

function App() {
  return (
    <div>
      <Header />
      <Section id = {'about-me'} />
      <Section id = {'projects'} />
      <Footer />
    </div>
  );
}

export default App;
