import styled from "styled-components";
import LogoImgLight from '../assets/icons/logo-light.png'

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
    return (
        <StyledLogo>
            <Img src={LogoImgLight} alt="Logo"/>
        </StyledLogo>
    );
}

export default Logo;
