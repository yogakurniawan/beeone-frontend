import style from "./style.module.scss";

function LoginForm() {
  return (
    <div className={`mt-44`}>
      <div
        className={`${style.loginBox} p-4 border border-opacity-25 rounded border-gray-400 mx-auto shadow-md`}
      >
        <div>Email</div>
        <div>
          <input type="text" />
        </div>
        <div>Password</div>
        <div>
          <input type="password" />
        </div>
        <button>Login</button>
      </div>
    </div>
  );
}

export default LoginForm;
