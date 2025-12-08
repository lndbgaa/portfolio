import "./App.css";

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
      </main>
    </div>
  );
}

export default App;
