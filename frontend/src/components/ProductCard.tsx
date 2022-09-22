import { ProductType } from '../data/products';
import Rating from './Rating';
import { Link } from 'react-router-dom';

interface Props {
    product: ProductType;
}

const ProductCard: React.FC<Props> = ({ product }) => {
    return (
        <div className="w-48 rounded-md shadow-lg">
            <img src={product.image} alt={product.name} />
            <div className="p-4 ">
                <Link
                    to={`product/${product._id}`}
                    className="font-semibold text-normal text-slate-600 hover:underline underline-offset-2 decoration-2  hover:text-slate-900"
                >
                    {product.name}
                </Link>
                <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                />
                <p className="text-slate-800 font-bold mt-3">
                    ₱{product.price}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
