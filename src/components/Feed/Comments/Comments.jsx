import { doc, updateDoc } from 'firebase/firestore'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../../../firebase/firebase'
import { UserContext } from '../../UserContext/UserContext'
import './Comments.css'

function Comments(props) {
  const [commentInput, setCommentInput] = useState('')
  const currentUser = useContext(UserContext)
  const navigate = useNavigate();

 

  function insertComments(){
    return props.post.comments.map((commentObj,idx)=>{
      return <div key={idx}>
        <div className='comment-avatar-cont'>
        <img src={commentObj.uploaderPhotoURL} className='avatar'></img>
        <h3>{commentObj.uploader}:</h3>
        {commentObj.comment}
        </div>
        </div>
    })
  } 
  async function handleComment({post}){
    if(!currentUser){
     navigate("/login", { replace: true })
    } else {
      const docRef = doc(db,"Videos",post.id)
      try{
        updateDoc(docRef,{comments: 
          [...post.comments,
          {comment: commentInput,
           uploader: currentUser.displayName,
           uploaderPhotoURL: currentUser.photoURL,
          }]}) //async
          updateCommentLocal()
      } catch(e) {
        console.log(e)
        console.log(post.id)
      } 
    }
 } 
 function updateCommentLocal(){
   insertComments()
 }
  return ( 
    <div className="comments-cont">
      <div className="divide-comment-cont">
      <div className="comment-list">
       {insertComments()}
       </div>
       <div className="flex">
       <input onChange={(e)=>setCommentInput(e.target.value)}/>
       <button onClick={()=>handleComment(props)} 
        className='button-28 standard-btn sign-out-btn'>Comment</button>
       </div>
       </div>
    </div>
   );
}

export default Comments;