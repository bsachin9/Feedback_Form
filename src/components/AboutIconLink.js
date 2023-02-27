import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutIconLink() {
    return (
        // <div className="about-link">
        // <a href='/about'><FaQuestion size={35}/></a>
        // </div>

 <div className="about-link">
{/* <Link to='/about'><FaQuestion size={35}/></Link>

    ) */}

     {/* Or Can Be Written By This Way */}

<Link to={{pathname:'/about', search:'?sort=name', hash: '#sachinbro'}} >
    <FaQuestion size={35} />
    </Link>
    </div>
    )
}

export default AboutIconLink