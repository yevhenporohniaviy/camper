import styled from 'styled-components';

export const MainLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  margin: 0 0 16px 0;
`;

export const UserAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;

  background-color: var(--block-features);

  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
  color: var(--button);

  border-radius: 60px;
`;

export const ReviewerName = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;

  margin: 0 0 4px 0;
`;

export const RateList = styled.ul`
  display: flex;
  flex-direction: row;

  gap: 4px;

  & svg {
    fill: var(--block-features);
    stroke: var(--block-features);
  }

  & li:nth-child(-n + ${({ $rating }) => $rating}) svg {
    fill: var(--rating);
    stroke: var(--rating);
  }
`;
