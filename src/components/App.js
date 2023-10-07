import React, {useState} from "react";
import videoData from "../data/video.js";
import Video from "./Video.js";
import Buttons from "./Buttons.js";
import Comments from "./Comments.js";

function App() {
  // console.log("Here's your data:", videoData);
  const [showComments, setShowComments] = useState(true)

  function toggleComments(){
    setShowComments((lastShowComments) => !lastShowComments)
  }

  


  return (
    <div className="App">
      <Video title={videoData.title} url={videoData.embedUrl} views={videoData.views} createdAt={videoData.createdAt} />
      <Buttons upvotes={videoData.upvotes} downvotes={videoData.downvotes} toggleComments={toggleComments} showComments={showComments} />
      
      <Comments showComments={showComments} comments={videoData.comments} />
    </div>
    
  );
}

export default App;
