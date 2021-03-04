import styled from 'styled-components';




export const IMG = styled.img`
    width: 130px;
    height: 150px;
    margin-top: -30px;


    @media only screen and (max-width: 480px) { 
        width: 50px;
        height: 70px;
    }
`;


export const DIV = styled.div`

@media only screen and (max-width: 480px) { 
   .Head {
       display: none;
   }
}


@media only screen and (max-height: 736px) { 
    .addRow {
        height: 110px;
    }
 }
`;