import React, { useState } from "react";

const ReviewForm = ({ movieId, userEmail, onClose, saveReview }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [recommend, setRecommend] = useState("");
  const [bestPart, setBestPart] = useState("");
  const [worstPart, setWorstPart] = useState(""); // Optional field
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !rating || !review || !recommend || !bestPart) {
      alert("Please fill all required fields.");
      return;
    }

    const reviewData = {
      name,
      email: userEmail, // Auto-filled from login
      rating: parseFloat(rating),
      review,
      recommend,
      bestPart,
      worstPart: worstPart || "None", // Default to "None" if not selected
      movieId,
      date: new Date().toISOString(),
    };

    try {
      setLoading(true);
      await saveReview(reviewData);
      setSubmitted(true);
    } catch (error) {
      console.error("Error saving review:", error);
      alert("Failed to submit review. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="review-form bg-dark p-4 rounded"
      style={{
        width: "80%",
        maxWidth: "400px",
        height: "auto",
        maxHeight: "75vh",
        overflowY: "auto",
        margin: "0 auto",
        position: "relative",
        color: "#e0e0e0",
        border: "1px solid #333",
      }}
    >
      {submitted ? (
        <div className="text-success">
          <h4>Review Successfully Submitted!</h4>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-white">Name*</label>
            <input
              type="text"
              className="form-control"
              style={{ backgroundColor: "#343a40", color: "#e0e0e0" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Email*</label>
            <input
              type="email"
              className="form-control"
              style={{ backgroundColor: "#343a40", color: "#e0e0e0" }}
              value={userEmail}
              readOnly
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Rating (1-5)*</label>
            <input
              type="number"
              className="form-control"
              style={{ backgroundColor: "#343a40", color: "#e0e0e0" }}
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="1"
              max="5"
              step="0.1"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Review*</label>
            <textarea
              className="form-control"
              style={{ backgroundColor: "#343a40", color: "#e0e0e0" }}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows="3"
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Would you recommend this movie?*</label>
            <select
              className="form-control"
              style={{ backgroundColor: "#343a40", color: "#e0e0e0" }}
              value={recommend}
              onChange={(e) => setRecommend(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Best Part of the Movie*</label>
            <select
              className="form-control"
              style={{ backgroundColor: "#343a40", color: "#e0e0e0" }}
              value={bestPart}
              onChange={(e) => setBestPart(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="Story">Story</option>
              <option value="Acting">Acting</option>
              <option value="Direction">Direction</option>
              <option value="Cinematography">Cinematography</option>
              <option value="Music">Music</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Worst Part (Optional)</label>
            <select
              className="form-control"
              style={{ backgroundColor: "#343a40", color: "#e0e0e0" }}
              value={worstPart}
              onChange={(e) => setWorstPart(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Story">Story</option>
              <option value="Acting">Acting</option>
              <option value="Direction">Direction</option>
              <option value="Cinematography">Cinematography</option>
              <option value="Music">Music</option>
              <option value="None">None</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-warning w-100"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ReviewForm;
