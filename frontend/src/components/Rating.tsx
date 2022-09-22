import {
    TiStarOutline,
    TiStarHalfOutline,
    TiStarFullOutline,
} from 'react-icons/ti';

interface Props {
    rating: number;
    numReviews: number;
}
const Rating: React.FC<Props> = ({ rating, numReviews }) => {
    const array = Array.from(Array(5).keys());
    const stars = array.map((star) => {
        if (rating > star && rating < star + 1 && Math.floor(rating) === star) {
            return <TiStarHalfOutline />;
        } else if (rating > star) {
            return <TiStarFullOutline />;
        } else {
            return <TiStarOutline />;
        }
    });
    return (
        <div className="flex justify-start items-center text-yellow-500 text-sm ">
            {stars}
            <span className="pl-1">{numReviews} reviews</span>
        </div>
    );
};

export default Rating;
