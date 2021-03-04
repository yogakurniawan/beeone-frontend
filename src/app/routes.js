import { Switch, Route } from "react-router-dom";
import LoginForm from "features/login/LoginForm";
import RegisterForm from "features/register/RegisterForm";

function Routes() {
  return (
    <Switch>
      <Route path="/login" component={LoginForm}></Route>
      <Route path="/register" component={RegisterForm}></Route>
    </Switch>
  );
}

export default Routes;
