import axios from 'axios';
import './Profile.css';
import React, {useState, useEffect} from 'react';

const Profile = () => {
    const [reviews, setReviews] = useState("");

    useEffect(()=>{
    getReviews()
    }, [])

    const getReviews = async () => {
        const response = await axios.get('http://127.0.0.1:8000/reviews/')
        setReviews(response.data)
        console.log("Got list of reviews", response)
    }

    const deleteReviews = async (id) => {
        const response = await axios.delete('http://127.0.0.1:8000/reviews/' + id + '/')
        setReviews(response);
        console.log("Review was deleted")
    }
    
    // const onChange = (e) => {
    //     e.target.value
    // }

    return (
        <div className="container">
        <table className="table">
        <tr className='table-row'>
            <th>Review</th>
            <th>Recipe</th>
        </tr>
        {reviews.map((data)=> [])}
    </table>
    </div>
  );
}

export default Profile;
