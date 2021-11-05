import "./App.scss";
// import SectionHero from "./pages/sectionHero/sectionHero";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent";

const App = (props) => {
  return (
    <div className="App">
      <ButtonComponent icon={true} widthT={183} />
      <ButtonComponent icon={false} widthT={183} />
    </div>
  );
};
export default App;
