import styled from "styled-components"

const SummaryInfoCard = () => {
  return <Card>
    <StyledTitle>Delicious Food, delivered to you</StyledTitle>
    <p>Choose your favorite meal from our broad selection of available 
        meals and enjoy a delicious lunch or dinner at home.
    </p>
    <p>All our meals are cooked with high-quality ingredients, 
       just-in-time and of course by experienced chefs!
    </p>
  </Card>
}

export default SummaryInfoCard

const Card = styled.div`
    max-width: 52.375rem;
    background-color: #383838;
    padding: 36px 54px;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
    border-radius: 16px;
    position: relative;
    margin: -12rem auto;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
`
const StyledTitle = styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;

    color: #FFFFFF;
`