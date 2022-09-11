import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";

const white_color = "#fff";
const border_color = "#e3e3e3";
const border_line = "1px solid #e3e3e3";
const radius_line = "4px";

export const GlobalStyles = () => (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

      * {
        box-sizing: border-box;
        font-family: "Poppins";
      }

      html,
      body {
        width: 100%;
        height: 100%;
        min-height: 100%;
        padding: 0;
        margin: 0;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
      }
    `}
  />
);

export const Container = styled.div`
  padding: 0 32px;
`;

export const SpaceTop = styled.div`
  margin-top: 50px;
`;

export const H1 = styled.h1`
  color: ${white_color};
`;

export const FlexCenter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const BoxFull = styled.div`
`;
// flex: 1;

export const BoxContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-bottom:15px;
    margin-bottom:30px;
    border-bottom : ${border_line};
    flex-wrap: wrap;
`;

export const InputBox = styled.div`
    padding: 4px 10px;
    border: ${border_line};
    border-radius: ${radius_line};
    display: flex;
    align-items: center;
    justify-content: space-between;
    `
    // width: 100%;

export const Input = styled.input`
    border: none;
    outline:none;
    width:100%;

    &:focus-visible{
        outline:none;
    };
`

export const PaginationItem =  styled.li`
float: left;
padding: 6px 12px;
cursor: pointer;
border-radius: 8px;

&:hover{
    background: #188326;
    color: white;
}
`
// border: 1px solid #bbba;