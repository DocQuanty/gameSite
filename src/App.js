import "./App.scss";
import Footer from "./components/Footer/Footer";
import SectionCareer from "./pages/SectionCareer/SectionCareer";
// import MainTitle from "./components/MainTitle/MainTitle";
// import SubTitle from "./components/SubTitle/SubTitle";
const App = (props) => {
  return (
    <div className="App">
      <SectionCareer></SectionCareer>
      {/* <SectionHero /> */}
    </div>
  );
};
export default App;
