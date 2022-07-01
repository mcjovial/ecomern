import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Button } from "antd";
import { MailOutlined, GoogleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../functions/auth";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    let intended = history.location.state;
    if (intended) {
      return;
    } else {
      if (user && user.token) history.push("/");
    }
  }, [user, history]);

  let dispatch = useDispatch();

  const roleBasedRedirect = (res) => {
    // check if intended
    // console.log('login-res', res.data.role);
    let intended = history.location.state;
    if (intended) {
      history.push(intended.from);
    } else {
      if (res.data.role === "admin") {
        history.push("/admin/dashboard");
      } else {
        history.push("/user/history");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.table(email, password);
    try {
      const userData = {
        email,
        password,
      }

      console.log(userData);
      loginUser(userData)
        .then((res) => {
          dispatch({
            type: "LOGGED_IN_USER",
            payload: {
              name: res.data.name,
              email: res.data.email,
              token: res.data.token,
              role: res.data.role,
              _id: res.data._id,
            },
          });
          if (res.data) {
            localStorage.setItem('user', JSON.stringify(res.data))
          }
          roleBasedRedirect(res);
        })
        .catch((err) => console.log(err));

      // history.push("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  // const googleLogin = async () => {
  //   auth
  //     .signInWithPopup(googleAuthProvider)
  //     .then(async (result) => {
  //       const { user } = result;
  //       const idTokenResult = await user.getIdTokenResult();
  //       createOrUpdateUser(idTokenResult.token)
  //         .then((res) => {
  //           dispatch({
  //             type: "LOGGED_IN_USER",
  //             payload: {
  //               name: res.data.name,
  //               email: res.data.email,
  //               token: idTokenResult.token,
  //               role: res.data.role,
  //               _id: res.data._id,
  //             },
  //           });
  //           roleBasedRedirect(res);
  //         })
  //         .catch((err) => console.log(err));
  //       // history.push("/");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       toast.error(err.message);
  //     });
  // };

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          autoFocus
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
        />
      </div>

      <br />
      <Button
        onClick={handleSubmit}
        type="primary"
        className="mb-3"
        block
        shape="round"
        icon={<MailOutlined />}
        size="large"
        disabled={!email || password.length < 6}
      >
        Login with Email/Password
      </Button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <div className="text-center"><h1>Welcome</h1> <p>Please login</p></div>
            )}
            <br/>
          {loginForm()}

          <Button
            // onClick={googleLogin}
            type="danger"
            className="mb-3"
            block
            shape="round"
            icon={<GoogleOutlined />}
            size="large"
          >
            Login with Google
          </Button>

          <Link to="/forgot/password" className="float-right text-danger">
            Forgot Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
