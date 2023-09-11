import { useState } from "react";

import Footer from "../shared/Footer";
import Header from "../shared/Header";
import NavBar from "../shared/NavBar";

function Content() {
  return (
    <main>
      Under construction...
    </main>
  );
}

function HomePage() {
  return (
    <nav>
      <NavBar />
      <Header />
      <Content />
      <Footer />
    </nav>
  );
}

export default HomePage;
