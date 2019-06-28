import React from "react";
import "./style.css";

function Root() {
  return (
    <div>
      <div id="eunoia">
        <img src="./img/textlogo.png" alt="logo" className="center" />
      </div>

      <div id="main" className="container">
        <form
          name="loginform"
          id="loginform"
          action="#"
          method="post"
          className="wpl-track-me"
        >
          <p className="login-username">
            <label for="user_login">Username</label>
            <input
              type="text"
              name="log"
              id="user_login"
              className="input"
              placeholder="yourname@example.com"
              value=""
              size="20"
            />
          </p>
          <p className="login-password">
            <label for="user_pass">Password</label>
            <input
              type="password"
              name="pwd"
              id="user_pass"
              className="input"
              placeholder="●●●●●●●●●"
              value=""
              size="20"
            />
          </p>
          <p className="login-remember">
            <label>
              <input
                name="rememberme"
                type="checkbox"
                id="rememberme"
                value="forever"
              />{" "}
              Remember me
            </label>
          </p>
          <p className="login-submit" id="btn">
            <input
              type="submit"
              name="wp-submit"
              id="wp-submit"
              className="button-primary"
              value="Login"
            />
            <input type="hidden" name="redirect_to" value="#" />
          </p>
          <p className="nav">
            <a
              className="login-forget"
              href="home.html"
              title="Password Lost and Found"
            >
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Root;
