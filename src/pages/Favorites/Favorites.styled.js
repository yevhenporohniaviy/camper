import styled from "styled-components";

export const CatalogPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 64px;

  padding: 40px 64px;

  & > div:first-child {
    width: 360px;
  }
  & > div:last-child {
    width: 888px;
  }
`;

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 50px;
`;

export const CamperCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const LoadMoreButton = styled.button`
  padding: 16px 32px;
  background-color: #ffffff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.08px;
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;

  &:hover {
    border-color: var(--button);
  }
`;
