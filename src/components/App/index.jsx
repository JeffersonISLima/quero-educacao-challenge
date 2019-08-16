import React from "react";
import Home from "../Home";
import Navbar from "../Navbar";
import Footer from "../Footer";

function App() {
  return (
    <>
      <header className="App-header">
        <Navbar />
      </header>

      <section>
        <Home />
      </section>

      <footer>
        <div>
          <Footer />
        </div>
      </footer>
    </>
  );
}

export default App;
