import "./App.scss";
// import SectionHero from "./pages/sectionHero/sectionHero";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent";

const App = (props) => {
  return (
    <div className="App">
      <ButtonComponent icon={true} />
    </div>
  );
};
export default App;
