import styled from "styled-components";
import { PrimaryButton } from "../../../styles/components.styled";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 24px;

  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;

  padding: 24px;
`;

export const CamperImageContainer = styled.div`
  width: 290px;
  height: 310px;

  border-radius: 10px;

  & img {
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const CamperInfoContainer = styled.div`
  width: 100%;
`;

export const MainLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  margin: 0 0 8px 0;
`;

export const MainInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;

  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
`;

export const HeartButton = styled.svg`
  cursor: pointer;

  &:hover,
  &.favorited {
    fill: var(--button);
    stroke: var(--button);
  }
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

export const Description = styled.p`
  margin: 0 0 24px 0;
  max-width: 525px;

  color: var(--secondary);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DetailsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;

  font-weight: 500;
  line-height: 1.25;

  margin: 0 0 24px 0;

  & li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 18px;

    background-color: var(--block-features);

    border-radius: 100px;
  }
`;

export const ShowMoreButton = styled(PrimaryButton)`
  padding: 16px 40px;
`;
