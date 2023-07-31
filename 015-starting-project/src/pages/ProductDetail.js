import { useParams, Link } from "react-router-dom";

const ProductDetailPage = () => {
    const params = useParams();

    return (
    <>
        <h1>Product Detail Page</h1>
        <p>{params.id}</p>
        <Link to="/products">Back to Products List</Link>
    </>);
};

export default ProductDetailPage;