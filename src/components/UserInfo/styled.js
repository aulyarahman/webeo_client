import styled from 'styled-components';




export const DIV = styled.div`


  .img-barcode {
    width: 180px;
    height: 180px;
    left: 40%;
    right: 50%;
    float: right;

    
  }

  text {
    margin-left: 100px !important;
  } 

  @media only screen and (max-width: 2946px) {
     img {
      margin-left: auto;
      margin-right: auto;
     }
  }

  @media only screen and (max-width: 960px) {
    img {
      margin-top: 50px;
    }
  }

  @media only screen and (width: 540px) {
    text {
        margin-top: 50%
        
    }
  }


  @media only screen and (width: 280px) {
    text {
        margin-top: 115%;
        margin-left: 28%;
        
    }
  }


  @media only screen and (width: 768px) {
    text {
        margin-top: 115%;
        margin-left: 28%;
        
    }
  }

  



`;