import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import { register } from "features/auth/authSlice";

import style from "./style.module.scss";

function LoginForm() {
  const dispatch = useDispatch();

  function reset() {
    dispatch({
      type: "RESET",
    });
  }

  return (
    <div className={`mt-44`}>
      <div
        className={`${style.loginBox} p-4 border border-opacity-25 rounded border-gray-400 mx-auto shadow-md`}
      >
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          onSubmit={async (values) => {
            dispatch(register(values));
          }}
        >
          <Form>
            <div>First Name</div>
            <div>
              <Field id="firstName" name="firstName" type="text" />
            </div>
            <div>Last Name</div>
            <div>
              <Field id="lastName" name="lastName" type="text" />
            </div>
            <div>Email</div>
            <div>
              <Field id="email" name="email" type="text" />
            </div>
            <div>Password</div>
            <div>
              <Field id="password" name="password" type="password" />
            </div>
            <button type="submit">Login</button>
          </Form>
        </Formik>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}

export default LoginForm;
