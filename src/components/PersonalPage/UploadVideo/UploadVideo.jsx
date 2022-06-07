import { async } from "@firebase/util";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useContext, useEffect, useState } from "react";
import { app, db, storage } from "../../../firebase/firebase";
import { UserContext } from "../../UserContext/UserContext";

function UploadVideo() {
  const [progress, setProgress] = useState(0)
  const [fileUrl, setFileUrl] = useState("")
  const [category, setCategory] = useState()
  const [description, setDescription] = useState()
  const [subCategory, setSubCategory] = useState()
  const currentUser = useContext(UserContext)
  function formHandler(e){
    e.preventDefault();
    const file = e.target[3].files[0];
    uploadFiles(file)
  }

  async function uploadFiles(file){
    if(!file) return;
    const storageRef = ref(storage, `/demoVideos/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)
    // show upload progreess
    uploadTask.on('state_changed', (snapshot)=>{
      const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      setProgress(prog)
    }, (err) => console.log(err), 
    async()=> {
        const url = await getDownloadURL(uploadTask.snapshot.ref)
        setFileUrl(url)
        console.log(fileUrl)
      })
      console.log(fileUrl)
  }
  useEffect(()=>{
    addToDataBase()
  },[fileUrl])
  
  async function addToDataBase() {
    const uploadingUser = currentUser.displayName;
    const collectionRef = collection(db,'Videos');
    const payload = {
      category: category, 
      subCategory: subCategory, 
      user: uploadingUser, 
      videoURL: fileUrl,
      description: description,
    } 
    const docRef = await addDoc(collectionRef, payload)
    console.log(docRef.id)
  }
  return ( 
    <div className="flexCol">
      <h2>Upload your Video</h2>
      <form onSubmit={formHandler} className="flexCol">
        <label>Category:</label>
       <input type='text' onChange={(e)=>setCategory(e.target.value)}/>
        <label>SubCategory:</label>
       <input type='text' onChange={(e)=>setSubCategory(e.target.value)}/>
        <label>Description:</label>
       <input type='text' onChange={(e)=>setDescription(e.target.value)}/>
       <input type='file'/>
       <button type="submit">Upload</button>
      </form>
      <h3> Uploaded {progress}%</h3>

    </div>
   )
}

export default UploadVideo;