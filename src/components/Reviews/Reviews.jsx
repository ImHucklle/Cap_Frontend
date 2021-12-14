import React, {Component} from 'react';
import './Reviews.css';

class Reviews extends Component {
    constructor(props) {
      super(props);
      this.state = {
          recipe_id: this.recipe_id,
          comment: "",
          likes: 0,
          dislikes: 0,
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
    
      onChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };
    
      onSubmit = (event) => {
        event.preventDefault();

        const { comment } = this.state
     
        if (!comment || (comment && comment.trim() === '')) {
            alert('Cannot submit an empty comment.')
            return false
        }

        const newComment = {
          recipe_id: this.props.recipe_id,
          comment: comment,
          likes: 0,
          dislikes: 0,
        };
        this.props.addComment(newComment);
        this.setState(
          {
            comment: '',
          },
        );
      };

      render() {
        return (
          <React.Fragment>
            <div className="CommentButton" >
              <form onSubmit={this.onSubmit}>
                <input 
                  className="inputfield"
                  id="comment_form text"
                  type="text"
                  name="comment"
                  placeholder="Write a Comment"
                  onChange={this.onChange}
                  value={this.state.comment}
                />
                <button type="submit" className="btn btn-primary mt-2 ms-2 me-2 ">Submit Comment</button>
              </form>
            </div>
          </React.Fragment>
        );
      }
    }


export default Reviews;