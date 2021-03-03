import { Switch, Route } from "react-router-dom";
import LoginForm from "features/login/LoginForm";

function Routes() {
  return (
    <Switch>
      <Route path="/login" component={LoginForm}></Route>
    </Switch>
  );
}

export default Routes;
