import './app.css';
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import About from "./component/about/About";
import Button from "./component/button/Button";
import History from './component/history/History';
import Showcase from './component/showcase/Showcase';

function App() {
  return (
    <div className="app">
      <Header/>
        <div className="container">
          <h2 className='head2'>Making money hasnt be easy but guess <b>what?</b></h2>

          <p>I have a recipe that has made me and my students make over <b>100k - 500K</b> in less than a month</p>

          <Showcase image={'/asset/img/c.jpeg'}/><br/>

          <div className='ad'>
            <h3>This CENTURY OLD Business model is called Affiliate Marketing and it's an EVER-GREEN system. 
              It has been here for over a century and it will still be here as long as people still buy and sell.
            </h3>

            <h4>
              But the most important thing is not the business model, the important thing is the profitable strategy to make money from it. And that is what I want to show you.
            </h4>
          </div><br/>

          <Button />

          <Showcase image={'/asset/img/d.jpeg'}/>

          <p className='prag'>This strategy works for anyone and can work for you too, even if:</p>
          <ul className='preque'>
            <li>No experience</li>
            <li>No laptops</li>
            <li>No products to sell</li>
          </ul>

          <p>I'll be showing the marketing me and my students have been using to make at least ₦500,000 weekly from this business model.</p>

          <Button />

          <About />

          <Button /><br/>          
          <History />

          <Button />

        </div>
      <Footer/>
    </div>
  );
}

export default App;
