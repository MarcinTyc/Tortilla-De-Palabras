import styled from "styled-components";

export const StyledButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 22px;
height: 22px;
margin: 0 10px;
background-color: ${({theme}) => theme.colors.grey};
border-radius: 50px;
border: none;
color: white;

svg {
    width: 36px;
    height: 36px;
}
`;