import styled from "styled-components";
import Button from "../UI/Button"

const TotalAmount = ({price, onClose, onOrder}) => {
    const orderButton = price > 0 ? <Button onClick={onOrder}>Order</Button> : null;

    const fixedPrice = price.toFixed(2);

  return (
    <div style={{paddingTop: 30}}>
        <InfoContainer>
            <Label>Total amount</Label>
            <Price>${fixedPrice}</Price>
        </InfoContainer>
        <ActionButtonsCpntainer>
            <Button variant='outlined' onClick={onClose}>Close</Button>
            {orderButton}
        </ActionButtonsCpntainer>
    </div>
  )
}

export default TotalAmount;

const Label = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #222222;
  margin: 0;
`
const Price = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: #8A2B06;
    margin: 0;
`

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const ActionButtonsCpntainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
    gap: 16px;
`