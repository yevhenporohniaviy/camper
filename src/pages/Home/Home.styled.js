import styled from "styled-components";
import { PrimaryButton } from "./../../styles/components.styled";
import homeBackground from "../../assets/img/home-background.jpg";

export const HomeContainer = styled.div`
  padding: 16px 64px;
`;

export const WrapperText = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`;
export const HomeTitle = styled.h1`
  padding: 0 0 24px 0;
  font-size: 64px;
  font-weight: 600;
  line-height: 1.25;
  font-style: italic;
`;
export const HomeText = styled.p`
  max-width: 800px;
  font-size: 18px;
  text-align: right;
`;

export const WrapperImage = styled.div`
  margin-top: 74px;
  position: relative;
  background-image: url(${homeBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 300px;
  width: 100%;
  border-radius: 50px;
`;

export const StartNowBtn = styled(PrimaryButton)`
  font-weight: bold;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border: 5px solid white;
  position: absolute;
  top: -90px;
  left: 20px;
`;
