// index.tsx
import { useState } from "react";

interface PageType {
  _id: string;
  name: string;
  url: string;
}

function WelcomeIcon() {
  return (
    <img alt="Welcome!" href="../imgs/welcome.png" />
  );
}

function Header() {
  return <h1>Welcome!</h1>;
}

function NavBar() {
  const pages = [
    {
      _id: 0,
      name: "About Jake",
      url: "./about.tsx"
    },
    {
      _id: 1,
      name: "Projects",
      url: "./projects.tsx"
    },
    {
      _id: 2,
      name: "Contact Jake",
      url: "./contact.tsx"
    }
  ];

  return (
    <nav>
      <WelcomeIcon />
      <ul>
        {pages.map((page) => (
          <li key={page._id}><a href={page.url}>{page.name}</a></li>
        ))}
      </ul>
    </nav>
  );
}

function Content() {
  return (
    <main>
      Under construction...
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <ul>
        <li>Under</li>
        <li>Construction</li>
      </ul>
    </footer>
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
