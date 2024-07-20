import React, { useState } from 'react';
import './App.css';

function NewsForm() {
  const [newsName, setNewsName] = useState('');
  const [userDetails, setUserDetails] = useState('');
  const [video, setVideo] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('newsName', newsName);
    formData.append('userDetails', userDetails);
    formData.append('video', video);

    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log(result.message);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form.');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="newsName">News Name</label>
          <input
            type="text"
            className="form-control"
            id="newsName"
            value={newsName}
            onChange={(e) => setNewsName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="video">Upload News Video</label>
          <input
            type="file"
            className="form-control-file"
            id="video"
            onChange={(e) => setVideo(e.target.files[0])}
            accept="video/*"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="userDetails">Add your Details</label>
          <textarea
            className="form-control"
            id="userDetails"
            rows="4"
            value={userDetails}
            onChange={(e) => setUserDetails(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewsForm;
