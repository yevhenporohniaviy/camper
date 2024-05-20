import styled from "styled-components";

export const ModalContainer = styled.div`
  position: relative;
  max-width: 982px;
  max-height: 720px;
  padding: 40px;

  background-color: #ffffff;

  border-radius: 20px;

  overflow-y: scroll;

  @media screen and (max-height: 982px) {
    max-height: 80vh;
  }
`;

export const CarName = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;

  margin: 0 0 8px 0;
`;

export const SecondaryLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  margin: 0 0 24px 0;
`;

export const RatingIcon = styled.svg`
  fill: var(--rating);
  stroke: var(--rating);
`;

export const RatingInfo = styled.span`
  border-bottom: 1px solid var(--main);
`;

export const SecondaryInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const PriceTag = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;

  margin: 0 0 24px 0;
`;

export const CamperImagesGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  margin: 0 0 24px 0;
`;

export const CamperImageContainer = styled.div`
  width: 290px;
  height: 310px;
  & img {
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const Description = styled.p`
  margin: 0 0 44px 0;

  color: var(--secondary);
`;

export const BoardPickGroup = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 40px;

  margin: 0 0 44px 0;

  border-bottom: 1px solid rgba(16, 24, 40, 0.2);
`;

export const BoardPickButton = styled.p`
  position: relative;
  padding: 0 0 24px 0;
  font-weight: 600;
  cursor: pointer;

  &.active-board::after {
    display: block;
    content: "";
    width: 100%;
    height: 4px;
    position: absolute;
    left: 0;
    bottom: -2px;
    background-color: var(--button);
  }
`;

export const BoardContainer = styled.div``;
