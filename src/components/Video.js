import React from "react";

function Video({url, title, views, createdAt}) {
    // console.log({views})
    return (
        <div>
            <iframe width="919" height="525" src={url} frameBorder="0"
            allowFullScreen title={title}
            />
            <h1>{title}</h1>
            <p>{views} views | Uploaded on {createdAt}</p>
        </div>
    )
}




export default Video