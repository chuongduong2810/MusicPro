document.getElementsByClassName("login-pop")[0].innerHTML = `
    <div id="loginpop"> 
        <a href="#" id="loginButton">
            <span>Login <i class="arrow glyphicon glyphicon-chevron-right"></i></span>
        </a>
        <a class="top-sign" href="#" data-toggle="modal" data-target="#myModal5">
        <i class="fas fa-sign-out-alt"></i>
        </a>
        <div id="loginBox">
            <form id="loginForm">
                <fieldset id="body">
                    <fieldset>
                        <label for="email">Email Address</label>
                        <input type="text" name="email" id="email">
                    </fieldset>
                    <fieldset>
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password">
                    </fieldset>
                    <input type="submit" id="login" value="Sign in">
                    <label for="checkbox"><input type="checkbox" id="checkbox"> <i>Remember
                            me</i></label>
                </fieldset>
                <span><a href="#">Forgot your password?</a></span>
            </form>
        </div>
    </div>
`