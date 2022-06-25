import React from "react";

function Register() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center mb-3">Register</h1>
              <form>
                <div className="mb-3">
                  <label for="name" classNameName="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label for="email" classNameName="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="mb-3">
                  <label for="password" classNameName="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>
                <div className="mb-3">
                  <label for="password2" classNameName="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="password2"
                    name="password2"
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </form>
              <p className="mt-4">
                Already have an account? <a href="/login">Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
