import React, { useState } from "react";
import { useEffect } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import "./manageclass.css";

const ManageClass = () => {
  const [allclass, setAllclass] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [feedbackItemId, setFeedbackItemId] = useState(null);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/myclass")
      .then((res) => res.json())
      .then((data) => setAllclass(data));
  }, []);

  const handleApproveReq = (item) => {
    console.log(item);

    fetch(`http://localhost:5000/myclass/approve/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount) {
          alert("approved request");
        }
      });
  };

  const handleDenyReq = (item) => {
    axiosSecure.patch(`/myclass/deny/${item._id}`).then((res) => {
      const data = res.data;
      if (data.modifiedCount) {
        alert("deny request");
        setFeedbackModalOpen(true);
        setFeedbackItemId(item._id);
      }
    });
  };

  const handleFeedbackModalClose = () => {
    setFeedbackModalOpen(false);
    setFeedbackItemId(null);
    setFeedback("");
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleFeedback = () => {
    console.log("Feedback:", feedback);
    console.log("Item ID:", feedbackItemId);

    // Send the feedback and item ID to the backend using a PUT request
    axiosSecure
      .put(`/myclass/feedback/${feedbackItemId}`, { feedback })
      .then((res) => {
        // Handle the response as needed
        console.log(res.data);
        alert("feedback is send");
        // Reset the feedback and close the modal
        const updatedAllClass = allclass.map((item) => {
          if (item._id === feedbackItemId) {
            return { ...item, feedback: feedback };
          }
          return item;
        });
        setAllclass(updatedAllClass);
        setFeedback("");
        setFeedbackModalOpen(false);
        setFeedbackItemId(null);
      });
  };

  return (
    <div>
      <h3>manage class</h3>
      {allclass.length}

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>classname</th>
              <th>instructor</th>
              <th>instructorEmail</th>
              <th>available seat</th>
              <th>price</th>
              <th>status</th>
            </tr>
          </thead>
          {allclass.map((item, index) => (
            <tbody key={item._id}>
              <tr>
                <th>{index + 1}</th>
                <td>{item.className}</td>
                <td>{item.instructorName}</td>
                <td>{item.instructorEmail}</td>
                <td>{item.availableSeats}</td>
                <td>{item.price}</td>
                <td>{item.status}</td>
                <td>
                  <button
                    onClick={() => handleApproveReq(item)}
                    className="btn btn-primary"
                  >
                    approved
                  </button>
                  <button
                    onClick={() => handleDenyReq(item)}
                    className="btn btn-primary"
                  >
                    deny
                  </button>
                </td>
                {/* <td>
                  <button
                    className="btn"
                    onClick={() => {
                      setFeedbackModalOpen(true);
                      setFeedbackItemId(item._id);
                    }}
                  >
                    open modal
                  </button>
                </td> */}
              </tr>
            </tbody>
          ))}
        </table>
      </div>

      {feedbackModalOpen && (
        <dialog id="my_modal_3" className="modal" open>
          <form method="dialog" className="modal-box">
            <button
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleFeedbackModalClose}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Feedback</h3>
            <input
              type="text"
              value={feedback}
              onChange={handleFeedbackChange}
              placeholder="Enter your feedback"
            />
            <button className="btn" onClick={handleFeedback}>
              Send
            </button>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default ManageClass;
