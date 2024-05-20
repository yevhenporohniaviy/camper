import Booking from '../Booking';
import ReviewCard from './ReviewCard';
import { ReviewsBlockContainer, ReviewsList } from './Reviews.styled';
import { v4 as uuid } from 'uuid';

const Reviews = ({ camperInfo }) => {
  const { reviews } = camperInfo ?? {};

  return (
    <ReviewsBlockContainer>
      <ReviewsList>
        {reviews.map(review => (
          <li key={uuid()}>
            <ReviewCard review={review} />
          </li>
        ))}
      </ReviewsList>
      <Booking />
    </ReviewsBlockContainer>
  );
};

export default Reviews;
