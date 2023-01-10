import React from 'react'
import styled from 'styled-components'
import modalimg from '../imgs/modalimg.PNG'
import exit from '../imgs/red_cross.png'

function Modal({ isOpen, setIsOpen }) {
  if (!isOpen) return
  return (
    <ModalWrapper>
      <ExitModal onClick={() => setIsOpen(isOpen => !isOpen)}></ExitModal>
      <Thank>Thank you for your purchase!</Thank>
    </ModalWrapper>
  )
}

export default Modal

const ModalWrapper = styled.div`
  width: 300px;
  height: 275px;
  padding: 2.5px 0;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: calc(50% - 160px);
  border: 1px solid #fff;
  background-image: url('${modalimg}');
  background-size: 300px 275px;
`

const ExitModal = styled.button`
  width: 10%;
  height: 10%;
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  background-image: url('${exit}');
  background-size: 100%;
  background-repeat: no-repeat;
`

const Thank = styled.h2`
  position: absolute;
  translate: 15px 125px;
`