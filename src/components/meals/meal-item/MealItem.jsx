import styled from 'styled-components';
import MealItemForm from './MealItemForm';

const MealItem = ({meal}) => {

  return (
    <Container>
         <StyledItemInfo>
            <StyledTitle>{meal.title}</StyledTitle>
            <p>{meal.description}</p>
            <StyledPrice>${meal.price}</StyledPrice>
        </StyledItemInfo>
       <MealItemForm id={meal._id} price={meal.price} title={meal.title}/>
    </Container>
  )
}

export default MealItem;

const Container = styled.li`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #D6D6D6;
    margin-bottom: 20px;
    &:last-child{
        border-bottom: 0;
        margin-bottom: 0;
    }
`

const StyledItemInfo = styled.div`
    margin-bottom: 20px;
    p{
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
    margin: 0px 0px 4px 0px;
    }
`

const StyledTitle = styled.h4`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
    margin: 0px 0px 4px 0px;
`
const StyledPrice = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #AD5502;
`
