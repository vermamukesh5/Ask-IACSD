import React, { useEffect, useState, useRef } from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import "../Css/Post.css"
import { Avatar } from "@material-ui/core"
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined"
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined"
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined"
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined"
import { ShareOutlined, MoreHorizOutlined } from "@material-ui/icons"
// import bit from "../Images/question/bit.jpg"
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Modal from "react-modal";
import db from "../Firebase"
import { selectQuestionId, setQuestionInfo } from "../features/questionSlice.js";
import firebase from "firebase";
import '../Css/Navbar.css';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';


function Post({ Id, question, imageUrl, timestamp, users }) {

 
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const questionId = useSelector(selectQuestionId);
  const [answer, setAnswer] = useState("");
  const [getAnswers, setGetAnswers] = useState([]);
  const [isDeleteModal,setDeleteModal]=useState(false);
  const [admin,setAdmin]=useState(["vermamukesh5mv@gmail.com"]);
  const[verifiedAnswers, setVerfiedAnswers] = useState([]);
  const [posts, setPosts] = useState([])
  // useEffect(() => {
  //   db.collection("questions")
  //     .orderBy("timestamp", "desc")
  //     .onSnapshot((snapshot) =>
  //       setPosts(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           questions: doc.data(),
  //         }))
  //       )
  //     );
  // }, []);
  // useEffect(()=>{
  //   setAdmin([...admin,user.email]);

  // },[])


  useEffect(()=>{
    
    fetch("http://localhost:9090/iacsd/admins")
    .then(data => data.json())
    .then(data=> setAdmin(data))
    .catch(err=>console.log(err))

    fetch("http://localhost:9090/iacsd/verified/answers")
    .then(data => data.json())
    .then(data=> setVerfiedAnswers(data))
    .catch(err=>console.log(err))
  },[])
  
  useEffect(() => {
    if (questionId) {
      db.collection("questions")
        .doc(questionId)
        .collection("answer")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setGetAnswers(
            snapshot.docs.map((doc) => ({ id: doc.id, answers: doc.data() }))
          )
        );
    }
  }, [questionId]);

// new
const handleAnswerDelete = (e,id) => {
  e.preventDefault();
  if (questionId) {
    db.collection("questions").doc(questionId).collection("answer").doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });
  }
  
};

const handleVerification = (e,id) => {

  e.preventDefault();
  if(!verifiedAnswers.includes(id))
  {
    setVerfiedAnswers([...verifiedAnswers,id])
    fetch(`http://localhost:9090/iacsd/insert/answer?questionId=${id}`).then(data => data.json())
    .catch(err=>console.log(err))
  }
    
  else{
    
    setVerfiedAnswers([verifiedAnswers.filter(i => i!=id)])
    fetch(`http://localhost:9090/iacsd/unverify/answer?questionId=${id}`).then(data => data.json())
    .catch(err=>console.log(err))
  }
  
};
// new

  const handleAnswer = (e) => {
    e.preventDefault();
    if (questionId) {
      db.collection("questions").doc(questionId).collection("answer").add({
        user: user,
        answer: answer,
        questionId: questionId,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

    }
    setAnswer("");
    setIsModalOpen(false);
  };

//  new

  
  const handleDelete=(e)=>{
    e.preventDefault();
    setDeleteModal(false);
    if (questionId) {
      db.collection("questions").doc(questionId).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
    }

  }
  // new

  return (
    
    <div
      className="post"
      onClick={() =>
        dispatch(
          setQuestionInfo({
            questionId: Id,
            questionName: question,
          })
        )
      }
    >
      
      <div className="post__info">
        <Avatar src={
          users.photo
            ? users.photo
            : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
        } />
        <div className="name">
          <h5>{users.displayName ? users.displayName : users.email}</h5>
        </div>

        <small>{new Date(timestamp ?.toDate()).toLocaleString()}</small>
        {(admin.includes(user.email) || users.email===user.email) && <DeleteIcon onClick={()=>{setDeleteModal(true)}} className="post__btnDelete" />}
      </div>
      <div className="post__body">
        <div className="post__question">
          <p>{question}</p>
          
           {/* new */}
           {/* <button onClick={()=>{setDeleteModal(true)}} className="post__btnDelete" >delete</button>
           <DeleteIcon */}
              {/* new */}
          <button onClick={() => setIsModalOpen(true)} className="post__btnAnswer">Add answer</button>
         {/* {(admin.includes(user.email) || users.email===user.email) && <DeleteIcon onClick={()=>{setDeleteModal(true)}} className="post__btnDelete" />} */}
         

    






          <Modal
            isOpen={IsmodalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            shouldCloseOnOverlayClick={false}
            style={{
              overlay: {
                width: 680,
                height: 550,
                backgroundColor: "rgba(0,0,0,0.8)",
                zIndex: "1000",
                top: "50%",
                left: "50%",
                marginTop: "-250px",
                marginLeft: "-350px",
              },
            }}
          >
            <div className="modal__question">
              <h1>{question}</h1>
              <p>
                asked by{" "}
                <span className="name">
                  {users.displayName ? users.displayName : users.email}
                </span>{" "}
                {""}
                on{" "}
                <span className="name">
                  {new Date(timestamp ?.toDate()).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="modal__answer">
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter Your Answer"
                type="text"
              />

              
            </div>

           

            <div className="modal__button">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="sumbit" onClick={handleAnswer} className="add">
                Add Answer
              </button>
            </div>
          </Modal>


          {/* new */}
          <Modal
            isOpen={isDeleteModal}
            onRequestClose={() => setDeleteModal(false)}
            shouldCloseOnOverlayClick={false}
            style={{
              overlay: {
                width: 680,
                height: 300,
                backgroundColor: "rgba(0,0,0,0.8)",
                zIndex: "1000",
                top: "50%",
                left: "50%",
                marginTop: "-250px",
                marginLeft: "-350px",
              },
            }}
          >
            <div className="modal__question">
              <h1>{question}</h1>
              <p>
                asked by{" "}
                <span className="name">
                  {users.displayName ? users.displayName : users.email}
                </span>{" "}
                {""}
                on{" "}
                <span className="name">
                  {new Date(timestamp ?.toDate()).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setDeleteModal(false)}>
                Cancel
              </button>
              <button type="sumbit" onClick={handleDelete} className="add">
                Delete
              </button>
            </div>
          </Modal>
          {/* new */}
        </div>
        <img src={imageUrl} alt=""></img>
        <div className="post__answer">
          {getAnswers.map(({ id, answers }) => (
            <p key={id} style={{ position: "relative", paddingBottom: "5px" }}>
              {Id === answers.questionId ? (
                <span>
                  {console.log(id,verifiedAnswers)}
                  {/* 1
                  {verifiedAnswers.length}
                  2 */}
                  
                  {verifiedAnswers.includes(id)? <CheckCircleOutlinedIcon style={{margin:"0px",fontSize:"30px", color:"green"}} />:" " }
                  {answers.answer}
                  <br />
                  <span
                    style={{
                      position: "absolute",
                      color: "gray",
                      fontSize: "small",
                      display: "flex",
                      right: "0px",
                    }}
                  >
                    <span style={{ color: "#b92b27" }}>
                      {answers.user.displayName
                        ? answers.user.displayName
                        : answers.user.email}{" "}
                      on{" "}
                      {new Date(answers.timestamp ?.toDate()).toLocaleString()}
                     
                      {/* snapshot.docs.map((doc) => ({ id: doc.id, answers: doc.data() })) */}
                      
                    </span>
                    {(admin.includes(user.email) || answers.user.email===user.email) && <DeleteIcon onClick={(e)=>handleAnswerDelete(e,id)} style={{marginBottom:"20px",marginLeft:"20px",color:"cf0000"}}/>}
                    {(admin.includes(user.email)) && <ThumbUpOutlinedIcon onClick={(e)=>handleVerification(e,id)} style={{marginBottom:"20px",marginLeft:"20px",color:verifiedAnswers.includes(id)? "red":"green"}}/>}
                  </span>
                </span>
              ) : (
                  ""
                )}
            </p>
          ))}
        </div>
        
      </div>
      <div className='post__footer'>
        <div className="post__footerAction">
          <ArrowUpwardOutlinedIcon />
          <ArrowDownwardOutlinedIcon />
        </div>

        <RepeatOutlinedIcon style={{marginLeft:"10px"}}/>
        <ChatBubbleOutlineOutlinedIcon />
        <button className="see__answer">See answers </button>
        <div className="post__footerLeft">
          <ShareOutlined />
          {/* <MoreHorizOutlined /> */}
        </div>
      </div>
    </div>
  );
}
export default Post