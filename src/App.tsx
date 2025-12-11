import {
  About,
  Contact,
  Footer,
  Hero,
  LanguageToggle,
  Projects,
  Sidebar,
  Stack,
} from "@/components";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Contact />
        <Footer />
      </main>
      <aside className="settings-panel">
        <LanguageToggle />
      </aside>
    </div>
  );
}

export default App;
