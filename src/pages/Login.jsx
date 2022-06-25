import React from "react";

function Login() {
  return (
    <div className="container">
      <div class="row mt-5">
        <div class="col-md-6 m-auto">
          <div class="card">
            <div className="card-body">
              <h1 class="text-center mb-3">Login</h1>
              <form>
                <div class="mb-3">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="mb-3">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    class="form-control"
                    placeholder="Enter password"
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Login
                </button>
              </form>
              <p class="mt-4">
                No Account? <a href="/register">Register</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
