import React, {useState} from "react";

function Buttons({upvotes, downvotes, toggleComments, showComments}) {
    const [upvoteNum, setUpvoteNum] = useState(upvotes)
    const [downvoteNum, setDownvoteNum] = useState(downvotes)

    function handleUpvotes() {
        setUpvoteNum(upvoteNum + 1)
    }
    function handleDownvotes() {
        setDownvoteNum(downvoteNum + 1)
    }

    return (
        <div>
            <p>
                <button onClick={handleUpvotes}>{upvoteNum} 👍</button>
                <button onClick={handleDownvotes}>{downvoteNum} 👎</button>
            </p>
            <button onClick={toggleComments}>{showComments ? "Hide" : "Show" } Comments</button>
        </div>
    )
}





export default Buttons