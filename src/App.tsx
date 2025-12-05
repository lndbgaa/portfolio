import "./App.css";

import LanguageToggle from "@/components/LanguageToggle/LanguageToggle";
import Sidebar from "@/components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <LanguageToggle />
      <Sidebar />
    </div>
  );
}

export default App;
