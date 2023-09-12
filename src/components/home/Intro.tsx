// Intro.tsx

function Intro() {
  const text = `
    Welcome to my home website! This webapp serves as both
    a project that I had fun building and a professional
    porfolio to show off a selection of my projects. Please 
    feel free to reach out to me for any reason, but
    especially if you have any questions or would like to
    chat about anything you find interesting on here.
  `
  return (
    <section id="home-intro">
      {text}
    </section>
  );
}

export default Intro;
