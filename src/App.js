import "./App.scss";
// import Header from "./components/Header/Header";
// import SectionHero from "./pages/sectionHero/sectionHero";
import SectionGames from "./pages/sectionGames/sectionGames";
const App = (props) => {
  return (
    <div className="App">
      {/* <SectionHero /> */}
      <SectionGames></SectionGames>
    </div>
  );
};
export default App;
