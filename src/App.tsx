import "./App.css";

import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import LanguageToggle from "@/components/LanguageToggle/LanguageToggle";
import Sidebar from "@/components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <LanguageToggle />
      <Sidebar />
      <main className="main-content">
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
