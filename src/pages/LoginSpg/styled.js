import styled from 'styled-components';


export const IMG = styled.img`
    width: 290px;
    height: 350px;


    @media only screen and (max-width: 480px) { 
        width: 90px;
        height: 110px;
    }
`;

export const Ul = styled.ol`


    color: '#A8B5C7'; 
    text-align: left;

    @media only screen and (max-width: 860px) { 
    margin-top: 20px;
}


`;

export const DIV = styled.div`


margin-top: -4%;

  
@media only screen and (min-height: 3583px) {
    margin-top: 50%;
}

`;


export const WrapInput = styled.div`


margin-left: -100px;

@media only screen and (max-width: 480px) { 
    margin-top: -50px;
}
`;