// In your App.jsx

import { useEffect } from "react"; // No useRef needed for this fix
import { Home } from "../components/Home";
import Navbar from "../components/Navbar";

function App() {
  // Replace your previous useEffect with this one
  useEffect(() => {
    // 1. Tell the browser to let us handle scrolling on page load
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    }

    // 2. Manually scroll the window to the very top
    window.scrollTo(0, 0);
  }, []); // Empty array still ensures this runs only once on mount

  return (
    <>
      <Navbar />
      {/* The ref is no longer needed on the main element for this fix */}
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <Home />
        {/* ... other sections go here ... */}
      </main>
    </>
  );
}

export default App;
