import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { HomePage, LoginPage, RegisterPage, NewsfeedPage } from "./pages";

function App() {
  const history = useHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/newsfeed" component={NewsfeedPage} />
      </Switch>
    </Router>
  );
}

export default App;
