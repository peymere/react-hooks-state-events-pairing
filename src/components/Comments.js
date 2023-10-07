
import React, {useState} from "react";

function Comments({showComments, comments}) {
    const commentCount= comments.length
    // console.log({shownComments})
    const [commentScores, setCommentScores] = useState(Array(commentCount).fill(0))
    

    function likeComment(i){
        const updatedScores = [...commentScores]
        updatedScores[i]++
        setCommentScores(updatedScores)
    }
    function dislikeComment(i){
        const updatedScores = [...commentScores]
        updatedScores[i]--
        setCommentScores(updatedScores)
    }
    
    return (
        <div style={{visibility: showComments ? "visible" : "hidden"}} >
            <h2>{commentCount} Comments</h2>
            <div className="comments">
                {comments.map((comment, i) => {
                    // console.log(comment.user)
                    // console.log(comment.comment)
                    return(
                        <div key={comment.id}>
                            <h3>{comment.user}</h3>
                            <p>{comment.comment}</p>
                            <p>Comment Score: {commentScores[i]}</p>
                            <p>
                                <button style={{fontSize: '16px', background: 'black'}} onClick={() => likeComment(i)}>👍</button>
                                <button style={{fontSize: '16px', background: 'black'}} onClick={() => dislikeComment(i)}>👎</button>
                            </p>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}



export default Comments