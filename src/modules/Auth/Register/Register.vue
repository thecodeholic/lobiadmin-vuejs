<template>
  <div class="login">
    <div class="container">
      <div class="form-wrapper">
        <div class="row">
          <div class="col-md-4">
            <div class="login-left">
              <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
              <h3>Welcome</h3>
              <p>You are 30 seconds away from earning your own money!</p>
              <router-link class="btn btn-light btn-secondary btn-block" to="/auth/login">Login</router-link>
            </div>
          </div>
          <div class="col-md-8 col-right">
            <div class="login-right clearfix">
              <h3 class="login-heading">Create an account</h3>
              <br>
              <div class="login-form">
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Firstname"/>
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Lastname"/>
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Email"/>
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control" placeholder="Password"/>
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control" placeholder="Confirm Password"/>
                    </div>
                    <button class="btn btn-primary btn-action">Register</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login"
  }
</script>

<style scoped lang="scss">

  @-webkit-keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-20px);
    }
  }

  @keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-20px);
    }
  }

  .login {
    width: 740px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  .form-wrapper {
    padding: 50px;
    background: -webkit-linear-gradient(left, #3931af, #00c6ff);
  }

  .btn-secondary {
    border-radius: 1.5rem;
  }

  .btn-action {
    border-radius: 1.5rem;
    float: right;
    width: 160px;
  }

  .col-right {
    display: flex;
    align-items: center;
  }

  .login-left {
    text-align: center;
    color: #fff;
    margin-top: 4%;

    input {
      border: none;
      border-radius: 1.5rem;
      padding: 2%;
      width: 60%;
      background: #f8f9fa;
      font-weight: bold;
      color: #383d41;
      margin-bottom: 3%;
      cursor: pointer;
    }

    img {
      margin-top: 15%;
      margin-bottom: 5%;
      width: 25%;
      -webkit-animation: mover 2s infinite alternate;
      animation: mover 1s infinite alternate;
    }
  }

  .login-right {
    flex: 1;
    padding: 30px 50px;
    background: #f8f9fa;
    border-top-left-radius: 10% 50%;
    border-bottom-left-radius: 10% 50%;
  }

  .login-heading {
    text-align: center;
    color: #495057;
  }

</style>
