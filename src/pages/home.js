import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const proceedPortfolio = () => {
        navigate('/portfolio');
    }
    return (
        <div>
            <h1>Home Page</h1>
            <button type="button" class="btn btn-success" onClick={proceedPortfolio}>Portfolio</button>
        </div>
    );
}

export default Home;
