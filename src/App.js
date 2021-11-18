import "./App.scss";
import SectionHero from "./pages/sectionHero/sectionHero";
import SectionGames from "./pages/sectionGames/sectionGames";
import { Route, Switch, Redirect } from "react-router";
import Layout from "./components/hoc/Layout/Layout";
import SectionAbout from "./pages/SectionAbout/SectionAbout";
import SectionCareer from "./pages/SectionCareer/SectionCareer";

const App = (props) => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/sectionHero" exact component={SectionHero} />
          <Route exact path="/sectionGames" component={SectionGames} />
          <Route exact path="/sectionAbout" component={SectionAbout} />
          <Route exact path="/sectionCareer">
            <SectionCareer />
          </Route>
          <Route
            render={() => (
              <h1
                style={{
                  color: "red",
                  margin: "150px 0px",
                }}
              >
                404 not found
                <p style={{ fontSize: "20px" }}>
                  (or you are not allowed to enter the server page)
                </p>
              </h1>
            )}
          />
          <Route render={() => <Redirect to={{ pathname: "/" }} />} />
          <Route exact path="/" component={SectionHero} />
        </Switch>
      </Layout>
    </div>
  );
};
export default App;
