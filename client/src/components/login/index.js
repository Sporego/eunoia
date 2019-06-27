import React from "react";
import "./style.css";

function Root() {
  return (
    <div style={{ height: 800 }}>
<div id="eunoia"><img src="textlogo.png" alt="logo" class="center"></div>
    
    <div id="main" class="container"> 	
      <form name="loginform" id="loginform" action="#" method="post" class="wpl-track-me"> 
        <p class="login-username">
        <label for="user_login">Username</label> 
          <input type="text" name="log" id="user_login" class="input" placeholder="yourname@example.com" value="" size="20" /> 
        </p> 
        <p class="login-password"> 
          <label for="user_pass">Password</label><input type="password" name="pwd" id="user_pass" class="input" placeholder="●●●●●●●●●" value="" size="20" /> 
        </p> 
        <p class="login-remember">
          <label><input name="rememberme" type="checkbox" id="rememberme" value="forever"> Remember me</label></p>
        <p class="login-submit" id="btn">
          <input type="submit" name="wp-submit" id="wp-submit" class="button-primary" value="Login"/>		
          <input type="hidden" name="redirect_to" value="#"/>
        </p> 
      
        <p class="nav">
          <a class="login-forget" href="#" title="Password Lost and Found">Forgot your password?</a>
          <a class="login-forget" href="signup.html" title="Password Lost and Found">Sign Up</a>
        </p>
      </form> 
    </div>
  );
}

export default Root;
