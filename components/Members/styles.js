import styled from "styled-components";

export const MembersContainer = styled.section`
  margin: 4rem 0;
`;

export const MemberCont = styled.section`
  background-color: ${({theme}) => theme.second};
  padding: 2rem 0;
  box-shadow: 0 4px 4px rgba(0,0,0,.25);
  
  &:last-child {
    margin-top: 4rem;
    background-color: ${({theme}) => theme.third};

    .member_div {
      justify-content: space-between;
      
      .member_img {
        order: 2;
        margin-left: 2.6rem;

        > span {
          bottom: -55px;
        }
      }

      .member_txt {

        h3 {
          color: ${({theme}) => theme.second};
        }

        p {
          color: ${({theme}) => theme.white};
          text-align: justify;
          line-height: 20px;
          font-size: 0.8rem;
        }

        ul {
          margin-top: 10px;
        }
      }
    }
    
  }
  .member_div {
    max-width: 1300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    .member_img {

      margin-right: 2.6rem;
      
      > span {
        bottom: -50px;
      }
    }
    
    .member_txt {
      max-width: 715px;
      width: 100%;

      h3 {
        color: ${({theme}) => theme.first};
        font-size: 4rem;
        font-weight: 700;
        margin-bottom: 2rem;
      }

      ul {
        color: ${({theme}) => theme.white};
        line-height: 20px;
        font-size: 0.8rem;
      }
    }
  }
`;