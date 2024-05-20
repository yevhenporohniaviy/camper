import styled from 'styled-components';

export const MoreDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const DetailsList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;

  font-weight: 500;
  line-height: 1.25;

  margin: 0 0 44px 0;

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

export const VehicleDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;

  & li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const VehicleDetailsHeader = styled.h3`
  margin: 0 0 24px 0;

  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
`;

export const HorizontalLine = styled.div`
  margin: 0 0 24px 0;
  height: 2px;

  background-color: var(--main);
  opacity: 0.1;
`;
