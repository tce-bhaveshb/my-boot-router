import { useState } from "react";

export default function LearnOnClick() {
    const [description, setDescription] = useState(true);
    const [reviews, setReviews] = useState(false);

    const descriptionHandler = () => {
        setDescription(true);
        setReviews(false);
    };

    const reviewsHandler = () => {
        setDescription(false);
        setReviews(true);
    };
    
    return (
        <div>
            <button onClick={descriptionHandler}>Descriptions</button>
            <button onClick={reviewsHandler}>Reviews</button>
            {description && (<h3>Descriptions</h3>)}
            {reviews && (<h3>Reviews</h3>)}
        </div>
    );
}
  
