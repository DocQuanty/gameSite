import "./App.scss";
import MainTitle from "./components/MainTitle/MainTitle";
import SectionCareer from "./pages/SectionCareer/SectionCareer";
// import SectionHero from "./pages/sectionHero/sectionHero";

const App = (props) => {
  return (
    <div className="App">
      {/* <SectionHero /> */}
      <SectionCareer />
    </div>
  );
};
export default App;
