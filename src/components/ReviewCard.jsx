import { FaStar, FaRegStar } from "react-icons/fa6";

const ReviewCard = ({ rating, comment, reviewerName }) => {
  return (
    <div className=" flex flex-col text-center items-center text-2xl">
      <div className="flex gap-1 text-[#dbce1a]">
        {Array.from({ length: 5 }, (_, starIndex) =>
          starIndex < rating ? (
            <FaStar key={starIndex} />
          ) : (
            <FaRegStar key={starIndex} />
          ),
        )}
      </div>
      <p className="mt-2 font-bold">{comment}</p>
      <p className="mt-1 text-lg">- {reviewerName}</p>
    </div>
  );
};

export default ReviewCard;
