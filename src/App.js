import "./App.scss";
import Header from "./components/Header/Header";
import SectionHero from "./pages/sectionHero/sectionHero";

const App = (props) => {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <SectionHero />
    </div>
  );
};
export default App;
