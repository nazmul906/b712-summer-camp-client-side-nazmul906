// import React from "react";

// const AddClass = () => {
//   return (
//     <div className="hero min-h-screen bg-base-200">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//           <div className="card-body">
//             <div className="form-control block font-medium">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="email"
//                 className="input input-bordered"
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="email"
//                 className="input input-bordered"
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="email"
//                 className="input input-bordered"
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="email"
//                 className="input input-bordered"
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="email"
//                 className="input input-bordered"
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="password"
//                 className="input input-bordered"
//               />
//               <label className="label">
//                 <a href="#" className="label-text-alt link link-hover">
//                   Forgot password?
//                 </a>
//               </label>
//             </div>
//             <div className="form-control mt-6">
//               <button className="btn btn-primary">Add Class</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default AddClass;
/////////////

import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
// import "./addclass.css";
const AddClass = () => {
  const { user } = useContext(AuthContext);
  const [className, setClassName] = useState("");
  const [classImage, setClassImage] = useState("");
  const [availableSeats, setAvailableSeats] = useState("");
  const [price, setPrice] = useState("");
  const instructorName = user?.displayName;
  const instructorEmail = user?.email;
  const status = "pending";
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the necessary actions on form submission
    // You can access the form field values using the state variables

    console.log({
      className,
      classImage,
      instructorName,
      instructorEmail,
      availableSeats,
      price,
      status,
    });

    const classdata = {
      className: className,
      classImage: classImage,
      instructorName: instructorName,
      instructorEmail: instructorEmail,
      availableSeats: availableSeats,
      price: price,
      status: status,
    };

    fetch("http://localhost:5000/addclass", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(classdata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("class added successfully");
          // reset.form();
        }
      });
  };

  return (
    <div
      style={{ maxHeight: "900px", overflowY: "auto" }}
      className="flex justify-center items-center"
    >
      <form onSubmit={handleSubmit} className="w-96 ">
        <div className="p-4">
          <label className="text-lg font-bold">Add a Class</label>
        </div>
        <div className="p-4">
          <label className="text-gray-700">Class Name</label>
          <input
            type="text"
            className="input input-bordered w-full "
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
          />
        </div>
        <div className="p-4">
          <label className="text-gray-700">Class Image</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={classImage}
            onChange={(e) => setClassImage(e.target.value)}
            required
          />
        </div>
        <div className="p-4">
          <label className="text-gray-700">Instructor Name</label>
          <input
            type="text"
            className="input input-bordered w-full "
            // value={instructorName}
            defaultValue={user?.displayName}
            readOnly
          />
        </div>
        <div className="p-4">
          <label className="text-gray-700">Instructor Email</label>
          <input
            type="email"
            className="input input-bordered w-full "
            defaultValue={user?.email}
            readOnly
          />
        </div>
        <div className="p-4">
          <label className="text-gray-700">Available Seats</label>
          <input
            type="number"
            className="input input-bordered w-full "
            value={availableSeats}
            onChange={(e) => setAvailableSeats(e.target.value)}
            required
          />
        </div>
        <div className="p-4">
          <label className="text-gray-700">Price</label>
          <input
            type="number"
            className="input input-bordered w-full "
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="p-4">
          <label className="text-gray-700">Status</label>
          <input
            type="text"
            className="input input-bordered w-full"
            // value={classes}
            defaultValue={status}
            // onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="p-4">
          {/* <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button> */}
          <input type="submit" className="btn btn-primary" value="Submit" />
        </div>
      </form>
    </div>
  );
};
export default AddClass;
