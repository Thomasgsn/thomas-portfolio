import { Home, Nav, Bento, Contact, Footer } from "./Section";

function App() {
  return (
    <>
      <div id="top" />
      <div className="bg-light-background/0 bg-[url('/white.png')] dark:bg-dark-background dark:bg-[url('/dark.png')]">
        <Nav />
        <Home />
        <Bento />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
