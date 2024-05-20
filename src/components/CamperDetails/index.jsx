import {
  BoardContainer,
  BoardPickButton,
  BoardPickGroup,
  CamperImageContainer,
  CamperImagesGroup,
  CarName,
  Description,
  LocationContainer,
  ModalContainer,
  PriceTag,
  RatingIcon,
  RatingInfo,
  SecondaryInfoContainer,
  SecondaryLineContainer,
} from "./CamperDetails.styled";
import sprite from "../../assets/svg/sprite.svg";
import Features from "./Features";
import Reviews from "./Reviews";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const CamperDetails = ({ camperInfo }) => {
  const [isFeaturesShown, setIsFeaturesShown] = useState(true);

  const handleOpenFeatures = () => {
    setIsFeaturesShown(true);
  };

  const handleOpenReviews = () => {
    setIsFeaturesShown(false);
  };

  const { name, rating, reviews, location, price, gallery, description } =
    camperInfo;

  return (
    <ModalContainer>
      <CarName>{name}</CarName>

      <SecondaryLineContainer>
        <RatingIcon width="16px" height="16px" fill="none">
          <use href={`${sprite}#icon-rating`} />
        </RatingIcon>

        <SecondaryInfoContainer>
          <RatingInfo>
            {rating}({reviews.length} reviews)
          </RatingInfo>

          <LocationContainer>
            <svg width="16px" height="16px" fill="none">
              <use href={`${sprite}#icon-location`} />
            </svg>
            <span>{location}</span>
          </LocationContainer>
        </SecondaryInfoContainer>
      </SecondaryLineContainer>

      <PriceTag>&#8364;{price}</PriceTag>

      <CamperImagesGroup>
        {gallery?.length &&
          gallery.map((photo) => {
            return (
              <CamperImageContainer key={uuid()}>
                <img src={photo} alt="Camper" width="290px" height="310px" />
              </CamperImageContainer>
            );
          })}
      </CamperImagesGroup>

      <Description>{description}</Description>

      <BoardPickGroup>
        <li>
          <BoardPickButton
            onClick={handleOpenFeatures}
            className={isFeaturesShown && "active-board"}
          >
            Features
          </BoardPickButton>
        </li>
        <li>
          <BoardPickButton
            onClick={handleOpenReviews}
            className={!isFeaturesShown && "active-board"}
          >
            Reviews
          </BoardPickButton>
        </li>
      </BoardPickGroup>

      <BoardContainer>
        {isFeaturesShown ? (
          <Features camperInfo={camperInfo} />
        ) : (
          <Reviews camperInfo={camperInfo} />
        )}
      </BoardContainer>
    </ModalContainer>
  );
};

export default CamperDetails;
