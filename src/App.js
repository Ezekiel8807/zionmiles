import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import About from "./component/about/About";
import Button from "./component/button/Button";

function App() {
  return (
    <div className="app">
      <Header/>
        <div className="container">
          <About />
          <Button />
        </div>
      <Footer/>
    </div>
  );
}

export default App;
