import { products } from '../../data/products';
import { useParams, useNavigate } from 'react-router-dom';
import PageNotFound from '../PageNotFound';
import Rating from '../Rating';

const ProductScreen: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const product = products.find((product) => product._id === id);
    if (!product) return <PageNotFound />;
    const goBack = () => navigate(-1);
    return (
        <div className="flex flex-col items-start gap-3">
            <button
                className="hover:underline underline-offset-2 decoration-2"
                onClick={goBack}
            >
                Go Back
            </button>
            <div className="grid grid-cols-10 gap-5">
                <img
                    src={product.image}
                    alt={product.name}
                    className="col-span-5"
                />

                <div className="col-span-3  flex flex-col justify-start gap-2 w-full ">
                    <h2 className="font-semibold text-3xl text-slate-600 hover:underline underline-offset-2 decoration-2  hover:text-slate-900">
                        {product.name}
                    </h2>
                    <Rating
                        rating={product.rating}
                        numReviews={product.numReviews}
                    />
                    <p className="text-slate-800 font-bold">₱{product.price}</p>
                    <p className="text-slate-800 font-normal">
                        {product.description}
                    </p>
                </div>
                <div className="rounded-xl p-2 col-span-2 border-2 border-slate-300">
                    asd
                </div>
            </div>
        </div>
    );
};

export default ProductScreen;
