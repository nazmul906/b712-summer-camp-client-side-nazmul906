import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  // console.log("location", location);
  const from = location?.state?.from.pathname || "/";
  const showPassword = true;
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedinUser = result.user;
        console.log(loggedinUser);
        navigate(from, { replace: true });
      })
      .then((error) => console.log(error.message));
  };

  const handleSignInGoogle = () => {
    googleSignIn().then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      const registered = {
        name: loggedUser.displayName,
        email: loggedUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(registered),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />
                {/* <span className="absolute top-0 right-0 mt-3 mr-4">
                  <svg
                    className="h-6 w-6 text-gray-500 cursor-pointer toggle-password"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm-4 0a1 1 0 10-2 0v1a1 1 0 002 0v-1zm4 0a1 1 0 102 0v1a1 1 0 00-2 0v-1z"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 20h9M12 4L4 12m8-8l8 8"
                      />
                    )}
                  </svg>
                </span> */}
              </div>
            </div>
            <div className="mt-6">
              <input
                // disabled={disable}
                disabled={false}
                type="submit"
                value="login"
                className="btn btn-primary"
              ></input>
            </div>
          </form>
          <div className="mt-3">
            <button
              onClick={handleSignInGoogle}
              className="btn btn-primary bg-blue-600 hover:bg-blue-700"
            >
              Google
            </button>
          </div>
          <div className="flex justify-center items-center">
            <p className="me-2">
              <sm>yet not registered?..please sign up</sm>
            </p>{" "}
            <Link to="/register">
              <button className="btn btn-primary">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

/*    <div className="flex items-center justify-between mb-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <a className="text-blue-500 hover:text-blue-800" href="/register">
                Create an Account
              </a>
            </div> */
