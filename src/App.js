import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Services from "./components/Service/Services";
import './App.scss';

function App() {
  return (
    <div className="container">

      <div className="banner">
        <Header />
        <ProfComponent />
      </div>

      <Services />

      {/* <div className="lightColor">
        <Projects />
      </div> */}

      <div className="lightColor">
        <Footer />
      </div>

    </div>
  );
}

export default App;
