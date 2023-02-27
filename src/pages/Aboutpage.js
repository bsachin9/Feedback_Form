import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function Aboutpage(props) {
    return (
        <Card>
            <div className="about">
                <h1>About This Project</h1>
                <p>This is a React app to Leave Feedback for a Product or Service</p>
                <p>
                    <Link to='/'>Back to Home</Link>
                </p>
            </div>
        </Card>
    )
}

 export default Aboutpage;