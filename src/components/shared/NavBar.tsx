interface PageType {
  _id: string;
  name: string;
  url: string;
}

function WelcomeIcon() {
  return (
    <img alt="Welcome!" href="../../imgs/welcome.png" />
  );
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

export default NavBar;
