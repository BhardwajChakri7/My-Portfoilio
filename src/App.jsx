import { useEffect } from "react";
import { Home } from "../components/Home";
import Navbar from "../components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/* The ref is no longer needed on the main element for this fix */}
      <main className="h-screen">
        <Home />
        {/* ... other sections go here ... */}
      </main>
    </>
  );
}

export default App;
