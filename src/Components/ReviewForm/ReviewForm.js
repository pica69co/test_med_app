import React, { useState } from "react";
import "./ReviewForm.css";
import GiveReviews from "../GiveReviews/GiveReviews";

const ReviewForm = () => {
  const [showForm, setShowForm] = useState(false)
    const reviews = [
    { id: 1, name: "Dr. John Doe", specialty: "Cardiology" },
    { id: 2, name: "Dr. Jane Smith", specialty: "Dermatology" },
  ];

  const handleClick = (e)=>setShowForm(true);
  

  return (
    <div className="reviews-container">
      <h2>Reviews</h2>
      <table className="reviews-table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>Provide Feedback</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td>{review.id}</td>
              <td>{review.name}</td>
              <td>{review.specialty}</td>              
                
              <td>
                <button className="feedback-button" onClick={handleClick}>Click Here</button>
              </td>
              <td>{''}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showForm && <GiveReviews />}
    </div>
  );
};

export default ReviewForm;
