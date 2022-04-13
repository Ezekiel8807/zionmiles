import './app.css';
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import About from "./component/about/About";
import Button from "./component/button/Button";
import History from './component/history/History';

function App() {
  return (
    <div className="app">
      <Header/>
        <div className="container">
          <h2>Making money hasnt be easy but guess <b>what?</b></h2>

          <p>I have a recipe that has made me and my students make over <b>100k - 500K</b> in less than a month</p>

          <p>This strategy works for anyone and can work for you too, even if:</p>

          <Button />

          <ul>
            <li>No experience</li>
            <li>No laptops</li>
            <li>No products to sell</li>
          </ul>

          <Button />

          <About />

          <Button />
          
          <History />

          <Button />

        </div>
      <Footer/>
    </div>
  );
}

export default App;
