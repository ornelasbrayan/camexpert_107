import "./home.css";
import {Link} from 'react-router-dom'

function Home(){
    return(
        <div className="home">
            <h1>Welcome to Cam Expert store</h1>
            <h4>When you can found the camera you want</h4>

            <div className="row align-items-center rowfirst">
                <div  className="col">
                    <img src="./images/take-photos.png" alt="" />
                </div>
                <div className="col">
                    <h2>You can take photos of your great moments.</h2>
                </div>

            </div>

            <div className="row align-items-center rowfirst">
                <div  className="col order-1">
                    <img src="./images/photo-imagine.jpg" alt="" />
                </div>
                <div className="col">
                    <h2>Imagine that you can take photos in a long distance with an amazing quality.</h2>
                </div>

            </div>

            <div className="row align-items-center rowfirst">
                <div  className="col">
                    <img src="./images/bt-camera.png" alt="" />
                </div>
                <div className="col">
                    <h2>And all of that with a camera that you can take everywhere you go and beautiful to the human eye.</h2>
                </div>

            </div>



            <div className="d-grid gap-2">

            <Link className="btn btn-lg btn-dark" to="/catalog">Check out our amazing products</Link>
            </div>
            
        </div>
    );
}

export default Home;