import { useNavigate } from "react-router-dom";

function Portfolio() {
    const navigate = useNavigate();

    const proceedHome = () => {
        navigate('/home');
    }
    return (
        <div>
            <h1>My Portfolio</h1>
            <button type="button" class="btn btn-success" onClick={proceedHome}>Home</button>
        </div>
    );
}

export default Portfolio;
