import "./App.css";

import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import LanguageToggle from "@/components/LanguageToggle/LanguageToggle";
import Projects from "@/components/Projects/Projects";
import Sidebar from "@/components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <LanguageToggle />
      <Sidebar />
      <main className="main-content">
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
