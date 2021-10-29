import { Route, Switch } from "react-router";
import SectionHero from "../../pages/sectionHero/sectionHero";

const Navigation = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/sectionHero">
          <SectionHero />
        </Route>
        <Route exact path="/sectionGames">
          {/* <SectionGames/> */}
        </Route>
        <Route exact path="/sectionGames">
          {/* <SectionGames/> */}
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
      </Switch>
    </div>
  );
};
export default Navigation;
