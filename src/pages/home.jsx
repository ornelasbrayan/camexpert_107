import "./home.css";
import {Link} from 'react-router-dom'

function Home(){
    return(
        <div className="home">
            <h1>Welcome to Cam Expert store</h1>
            <h4>When you can found the camera you want</h4>

            <Link className="btn btn-dark" to="/catalog">Catalog our amazing products</Link>
            
        </div>
    );
}

export default Home;