import Banner from "./banner image.webp";
import "./landing-page.css";
import { useHistory } from "react-router-dom";

const LandingPage=()=>{
    const history=useHistory();
    const handleRoute=()=>{
        history.push("/postview")
    }
    return(
        <>
        <div className="landing-container">
           <img src={Banner} alt="banner-image"></img> 
            <h1>10x Team 04</h1>
            <button onClick={handleRoute}>Enter</button>
        </div>
        </>
    )
}
export default LandingPage;