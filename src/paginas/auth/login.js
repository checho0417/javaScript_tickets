import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <Link to={"#"}>
            <b>INICIA TU SESION</b>
          </Link>
        </div>
      </div>

      <div className="card">
        <div className="card-body login-card-body">
          <form action="../../index3.html" method="post">
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            
          </form>
          <div className="social-auth-links text-center mb-3">
            <Link to={"#"} className="btn btn-block btn-primary">
              ingresar
            </Link>
            <Link to={"CrearCuenta"} className="btn btn-block btn-danger">
               registrarse
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
