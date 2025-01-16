import Header from "./components/Header";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";



function App() {

  return (
    <>
      <div className="App">
        <Header />
        <About />
        <ProjectList />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
