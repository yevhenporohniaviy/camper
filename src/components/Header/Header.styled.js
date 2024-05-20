import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 64px;
`;

export const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const NavLogo = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
  font-weight: 600;
  & a {
    padding: 14px 0;
  }

  & a.active {
    color: var(--button);
  }
`;

export const LogoContainer = styled.div`
  width: 50px;
  height: 50px;

  &:hover {
    cursor: pointer;
  }

  & img {
    width: 100%;
    height: 100%;
  }
`;
