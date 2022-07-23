import Dot from "./assets/dot instagram.jpg";
import Heart from "./assets/instagram heart.png";
import Share from "./assets/insta share.png";
import Header from "./Header";
import { useEffect, useState } from "react";
import "./postview.css";
const PostView=()=>{
    const [userData, setUserData] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:3004/user').then((data)=> {
            return data.json()
        }).then((Data)=> {
            setUserData(Data);
            console.log(Data)
        })
    }, []);
    return(
     <>
     <div className="main-container">
               <Header/>
                <hr/>
                <div className="container" >
                    {
                        userData.map((user,i)=> {
                            return (
                                <div className="post">
                                    <div className="user-information" key={i}>
                                        <span><h3><b>{user.name}</b></h3></span>
                                        <span>{user.location}</span>
                                        </div>
                                        <span><img className="Dot" src={Dot} alt="dot" width={20} height={20}></img></span>
                                   
                                    <div className="user-image">
                                        <img src={user.PostImage} alt="user defined image" ></img>
                                    </div>
                                    <div className="share-logo">
                                      <span><img src={Heart} alt="heart" width={30} height={30}></img></span>
                                      <span><img src={Share} alt="share" width={30} height={30}></img></span>
                                      <span className="date">{user.date}</span>
                                    </div>
                                    
                                    <div className="user-likes">
                                        {user.likes} likes
                                    </div>
                                    <div className="user-description">
                                        <b>{user.description}</b>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div></>

    );
}
export default PostView;