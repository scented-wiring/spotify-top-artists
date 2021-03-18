import { BrowserRouter, Route, Switch } from "react-router-dom";

//Components
import Home from "../components/Home";
import Redirect from "../components/Redirect";
import Dashboard from "../components/Dashboard";
import NotFound from "../components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/redirect" component={Redirect} />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
