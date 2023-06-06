import React from "react";

const Register = () => {
  const showPassword = true;
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confrimpassword = form.confrimpassword.value;
    console.log(email, password);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Register</h2>
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
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                password
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                name="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                name="confirmpassword"
                type="password"
                placeholder="Enter your password gain"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                PhotoUrl
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                name="photourl"
                type="text"
                placeholder=""
              />
            </div>

            <div className=" mt-6">
              <input
                // disabled={disable}
                disabled={false}
                type="submit"
                value="Sign Up"
                className="btn btn-primary"
              ></input>
            </div>
          </form>
          <div>{/* Add your social login buttons here */}</div>
        </div>
      </div>
    </div>
  );
};

export default Register;
