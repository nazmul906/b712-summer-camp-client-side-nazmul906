import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [paymenthistory, setpaymenthistory] = useState([]);
  useEffect(() => {
    fetch(
      `https://b7a12-summer-camp-server-side-omega.vercel.app/payment?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setpaymenthistory(data));
  }, []);
  return (
    <div>
      {/* <h5>Myclasses:{paymenthistory.length}</h5> */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>email</th>
              <th>transactionId</th>
              <th>date</th>
              <th>price</th>
            </tr>
          </thead>
          {paymenthistory.map((item, index) => (
            <tbody>
              {/* row 1 */}
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.email}</td>
                <td>{item.transactionId}</td>
                <td>{item.date}</td>
                <td>${item.price}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
