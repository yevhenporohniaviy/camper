import { Hourglass } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <Hourglass />
    </LoaderContainer>
  );
};

export default Loader;
