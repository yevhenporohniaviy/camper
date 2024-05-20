import { useNavigate } from "react-router-dom";
import {
  HomeContainer,
  HomeTitle,
  StartNowBtn,
  HomeText,
  WrapperText,
  WrapperImage,
} from "./Home.styled";

const HomePage = () => {
  const navigate = useNavigate();
  const handleStart = () => navigate("/catalog");

  return (
    <HomeContainer>
      <HomeTitle>Rent a motorhome anywhere in Ukraine</HomeTitle>
      <WrapperText>
        <HomeText>
          We organize trips on motorhomes, rent them and help on the road,
          cooperate with the most reliable rental companies camping in Ukraine
        </HomeText>
      </WrapperText>
      <WrapperImage>
        <StartNowBtn onClick={handleStart}>Start now</StartNowBtn>
      </WrapperImage>
    </HomeContainer>
  );
};

export default HomePage;
