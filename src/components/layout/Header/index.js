import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const Img = styled.img`
width: 36%;

    position: fixed;
    left:0;
    top:0;
    z-index: 1

 
      
`;

const Img2 = styled.img`
        width: 35%;
 
        position: fixed;
        right:0;
        top:0;
        z-index: 1;

        
`;

const DIV = styled.div`

`;

const Header = ({ className, classx }) => {
    return ( 
    <DIV className={className}>
    
        <Img src="/asset_hipmi/Geometry2_c.png" className="img1"/>

        <Img2 src="/asset_hipmi/Geometry3_c.png" className="img2" style={classx}/>
        
    
    </DIV>
     );
}
 
export default Header;