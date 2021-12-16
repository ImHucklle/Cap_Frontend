import axios from 'axios';
import './Profile.css';
import React, {useState, useEffect} from 'react';

const Profile = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
    getReviews()
    }, [])

    const getReviews = async () => {
        const response = await axios.get('http://127.0.0.1:8000/reviews/')
        setReviews(response.data)
        console.log("Got list of reviews", response)
    }

    const deleteReview = async (id) => {
        const response = await axios.delete('http://127.0.0.1:8000/reviews/' + id + '/')
        console.log("Review was deleted")
        this.setReviews()
    }
    
    return (
        <div>
            <h1>Welcome Myles!</h1>
        <div className="container">
        <table className="table">
            <tr className='table-row'>
                <th className='table-header' type="text">Recipe Name</th>
                <th className='table-header'>Review</th>
            </tr>
            {reviews.map(()=> {
                return (
                    <tr className='table-row'>
                        <td className='table-data' type="text">{reviews.recipe}</td>
                        <td className='table-data'>{reviews.comment_box}</td>
                        <button onClick={deleteReview}>Delete</button>
                    </tr>
                )
            })}
        </table>
        </div>
        </div>
    );
}

export default Profile;
