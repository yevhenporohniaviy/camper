import sprite from "../../../../assets/svg/sprite.svg";
import {
  MainLineContainer,
  RateList,
  ReviewerName,
  UserAvatarContainer,
} from "./ReviewCard.styled";

const ReviewCard = ({ review }) => {
  const {
    reviewer_name: name,
    reviewer_rating: rating,
    comment,
  } = review ?? {};

  return (
    <div>
      <MainLineContainer>
        <UserAvatarContainer>
          {name.charAt(0).toUpperCase()}
        </UserAvatarContainer>

        <div>
          <ReviewerName>{name}</ReviewerName>

          <RateList $rating={rating}>
            <li>
              <svg width="16px" height="16px" fill="none">
                <use href={`${sprite}#icon-rating`} />
              </svg>
            </li>
            <li>
              <svg width="16px" height="16px" fill="none">
                <use href={`${sprite}#icon-rating`} />
              </svg>
            </li>
            <li>
              <svg width="16px" height="16px" fill="none">
                <use href={`${sprite}#icon-rating`} />
              </svg>
            </li>
            <li>
              <svg width="16px" height="16px" fill="none">
                <use href={`${sprite}#icon-rating`} />
              </svg>
            </li>
            <li>
              <svg width="16px" height="16px" fill="none">
                <use href={`${sprite}#icon-rating`} />
              </svg>
            </li>
          </RateList>
        </div>
      </MainLineContainer>

      <p>{comment}</p>
    </div>
  );
};

export default ReviewCard;
