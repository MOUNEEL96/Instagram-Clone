import {BrowserRouter,Switch,Route} from "react-router-dom";
import LandingPage from "./landing-page.js";
import PostView from "./postview";
function App() {
  return (
    <BrowserRouter>
    <Switch>
      
    <Route exact path="/" component={LandingPage}></Route>
    <Route exact path="/postview" component={PostView}></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
