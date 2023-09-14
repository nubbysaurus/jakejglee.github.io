import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";

interface BlockTextType {
  title: Text | null;
  text: Text | null;
}

function AboutJake({
  content
}: {
  content: BlockTextType
}) {
  return (
    <main>
      <h1>
        {content?.title}
      </h1>
      <section className="text-block">
        {content?.text}
      </section>
    </main>
  );
}

function AboutPage({
  content
}: {
  content: BlockTextType
}) {
  return (
    <>
      <NavBar />
      <AboutJake content={content}/>
      <Footer />
    </>
  );
}

export default AboutPage;
