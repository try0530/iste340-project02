import "./App.css";

import Menu from "./components/Menu/Menu";

// import every page
import About from "./components/About/About";
import Degrees from "./components/Degrees/Degrees";
import Minors from "./components/Minors/Minors";
import Employment from "./components/Employment/Employment";
import People from "./components/People/People";

import Head from "./components/Head/Head";
import Footer from "./components/Footer/Footer";
import Resources from "./components/Resources/Resources";
import Researches from "./components/Researches/Researches";
import News from "./components/News/News";
import OtherInfo from "./components/OtherInfo/OtherInfo";

const App = () => {
  return (
    <div className="app">
      <Head />
      <Menu />
      <div className="details-div">
        <About />
        <Degrees />
        <Minors />
        <Employment />
        <People />
        <OtherInfo />
      </div>
      <Footer />
    </div>
  );
};

export default App;
