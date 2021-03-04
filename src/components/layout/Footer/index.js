import styled from 'styled-components';


const Img = styled.img`
    width: 25%;
    z-index: 1;
    left: 0;
    position:fixed;
    bottom:0;
    flex-shrink: 0;

    

    @media only screen and (max-width: 760px) { 
        width: 37%;
 
    }

    @media only screen and (max-width: 480px) { 
        width: 50%;
    }
 
    
`;

const Img2 = styled.img`
    position: absolute;
    width: 18%;
    bottom: 0;
    right: 850px;
    z-index: 1;
`;


const Img3 = styled.img`
    width: 35%;
    right: 0;
    z-index: 1;
    position:fixed;
    bottom:0;

    @media only screen and (max-width: 480px) { 
        width: 60%;
    }
`;


const FOOT = styled.footer`
margin-top:calc(5% + 60px);
  bottom: 0;

    
`;


const Footer = ({ classx,  className}) => {
    return ( 
        <div className={className}>
            <Img src="/asset_hipmi/Geometry_bottomleft1.png" style={classx}/>
            <Img3 src="/asset_hipmi/Geometry4_c2.png" />
        </div>
     );
}
 
export default Footer;
