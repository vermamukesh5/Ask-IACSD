import React , {useState, useEffect }from "react";
import '../Css/Feed.css';
import QuoraBox from "./QuoraBox";
import Post from "./Post";
import db from "../Firebase";


function Feed(props){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("questions")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) =>
            setPosts(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                questions: doc.data(),
              }))
            )
          );
      }, []);
      
      console.log("feed",posts); 
    return (
     
    <div className = "feed" >
        <QuoraBox />
        {posts.map(({ id, questions }) => (
        
        (props.input.length==0 || questions.question.toLowerCase().includes(props.input.toLowerCase())) && <Post 
          key={id}
          Id={id}
          question={questions.question}
          imageUrl={questions.imageUrl}
          timestamp={questions.timestamp}
          users={questions.user}
        />
      ))}    
        
    </div>
    );
}

export default Feed;
  