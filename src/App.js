import "./App.scss";
import MainTitle from "./components/MainTitle/MainTitle";
import SectionHero from "./pages/sectionHero/sectionHero";

const App = (props) => {
  return (
    <div className="App">
      <MainTitle
        firstWord={"BRINGING"}
        mark={"awd"}
        secondWord={<h1>awdawd</h1>}
      >
        hello im a title
      </MainTitle>
      <SectionHero />
    </div>
  );
};
export default App;
