import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate("/products");
    };

    return (
    <>
        <h1>My Home Page</h1>
        <p>Go to <Link to="/products">Products</Link></p>
        <div>
            <button onClick={navigateHandler}>Navigate</button>
        </div>
    </>
    );
};

export default HomePage;