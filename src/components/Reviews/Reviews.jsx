import React, {useState} from 'react';
import './Reviews.css';
import Ratings from '../Ratings/Ratings';
import axios from 'axios';

const Reviews = () => {
  const [commentBox, setCommentBox] = useState("");
  const [recipe, setRecipe] = useState("");
 
  const onSubmit = async (e) => {
    e.preventDefault();
    let review = {
      "comment_box": commentBox,
      "recipe": recipe
    }
    console.log("Content", review)
    let response = await axios.post('http://127.0.0.1:8000/reviews/', review);
    console.log("Review sent to db:", response.data)
    window.location = '/search';
  };

  return (
    <React.Fragment>
      <div className="review-box" >
        <form onSubmit={onSubmit}>
          <textarea
            className="review-box"
            type="text"
            rows="6" cols="25"
            placeholder="Write a Review"
            onChange={(e)=>setCommentBox(e.target.value)}
          />
          <label>Name of Recipe</label>
          <input type='text' onChange={(e)=>setRecipe(e.target.value)}></input>
            <Ratings />
            <button type="submit" className="btn btn-primary mt-2 ms-2 me-2 ">Submit Review</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Reviews;