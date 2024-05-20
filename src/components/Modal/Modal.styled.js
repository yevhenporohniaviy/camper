import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-image: linear-gradient(
    rgba(46, 47, 66, 0.7),
    rgba(46, 47, 66, 0.7)
  );

  z-index: 100;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 101;
`;

export const ModalContentContainer = styled.div`
  position: relative;
`;

export const ModalCloseButton = styled.svg`
  position: absolute;
  top: 40px;
  right: 40px;

  cursor: pointer;

  z-index: 101;
`;
