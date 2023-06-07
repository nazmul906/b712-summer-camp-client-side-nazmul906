import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
// todo: login and register page should be react form
// and password validate
const Register = () => {
  const { register, updateUserData } = useContext(AuthContext);
  const showPassword = true;
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // const confrimpassword = form.confrimpassword.value;
    const photoUrl = form.photo.value;
    console.log(name, email, password);
    register(email, password)
      .then((result) => {
        const registerdUser = result.user;
        updateUserData({ displayName: name, photoURL: photoUrl })
          .then((result) => {
            // const updatedUser = result.user;
            // console.log("updated", updatedUser);

            const registeredUser = { name: name, email: email };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(registeredUser),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.insertedId) {
                  alert("user is registered");
                }
              });
          })
          .catch((error) => console.log(error));
        console.log("registered", registerdUser);
      })
      .then((error) => console.log(error.message));
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                name="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
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
                name="photo"
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
