import styled from "styled-components"

const Button = ({children, variant='contained', borderStyle="rounded", ...restProps}) => {
  return <StyledButton variant={variant} borderStyle={borderStyle} {...restProps}>{children}</StyledButton>
}

export default Button;

const getBackgroundColor = (props) => {
  return props.variant === "contained" ? "#8A2B06" : "white"
}

const getBorder = (props) => {
  return props.variant === "contained" ? "none" : "1px solid #8A2B06"
}

const getColor = (props) => {
  return props.variant === "contained" ? "white" : "#8A2B06"
}

const getBorderValues = (props) => {
  return props.borderStyle ==="rounded" ? "20px" : "6px"
}

const StyledButton = styled.button`
    background-color: ${getBackgroundColor} ;
    border-radius: ${getBorderValues};
    padding: 10px 26px;
    border: ${getBorder};

    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: ${getColor};
    cursor: pointer;
    text-align: center;
    display: flex;
    align-items: center;
  &:hover{
    background-color: #7E2A0A;
    color: white;
  }
    &:active{
    background: #993108;
    border-radius: 20px;
  }
`