import { useState } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Tabs from "./components/Tabs";
import portfolioContent from "./contents";
import "./App.css";

function App() {
  // 'about' or 'projects'
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="app-container">
      <div className="stars"></div>
      <header className="app-header">
        <h1>{portfolioContent.personal.name}</h1>

        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tab1={{ key: "about", label: "About Me" }}
          tab2={{ key: "projects", label: "Projects" }}
        />
      </header>

      <main className="main-content">
        {activeTab === "about" ? <About /> : <Projects />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
