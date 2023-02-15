import { createPortal } from "react-dom"
import styled from "styled-components"

const StyledBackdrop = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`

const ModalContent = ({children}) => {
    return <StyledModalContent>{children}</StyledModalContent>
}

const StyledModalContent = styled.div`
  position: fixed;
  top: 20vh;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  width: 40rem;
  left: calc(50% -  20rem);

  @keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`
const backdropRoot = document.getElementById('backdrop');
const modalOverlayRoot = document.getElementById('modal-overlay')

const Modal = ({children, onClose}) => {
  return (
    <>
    {createPortal(<StyledBackdrop onClick={onClose}/>, backdropRoot)}
    {createPortal(<ModalContent>{children}</ModalContent>, modalOverlayRoot)}
    </>
  )
}

export default Modal;