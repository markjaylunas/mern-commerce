import { products, ProductType } from '../../data/products';
import ProductCard from '../ProductCard';

const HomeScreen: React.FC = () => {
    return (
        <>
            <h1 className="font-bold text-3xl text-slate-600 mb-5">
                Latest Products
            </h1>
            <div className="grid justify-items-start grid-cols-2 md:grid-cols-4 gap-5 md:max-w-4xl mx-auto ">
                {products.map((product: ProductType) => {
                    return <ProductCard key={product._id} product={product} />;
                })}
            </div>
        </>
    );
};

export default HomeScreen;
