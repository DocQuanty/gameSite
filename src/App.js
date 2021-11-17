import "./App.scss";
import { Switch, Route, Redirect } from "react-router";
// import SectionHero from "./pages/sectionHero/sectionHero";
import SectionAbout from "./pages/SectionAbout/SectionAbout";
import Layout from "./components/hoc/Layout/Layout";

const App = (props) => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/sectionHero">
            {/* <SectionHero /> */}
          </Route>
          <Route exact path="/sectionGames">
            {/* <SectionGames /> */}
          </Route>
          <Route exact path="/sectionAbout">
            <SectionAbout />
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
          {/* <Route exact path="/" component={SectionHero} /> */}
        </Switch>
      </Layout>
    </div>
  );
};
export default App;
