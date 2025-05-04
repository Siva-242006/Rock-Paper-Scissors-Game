import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.display};
  align-items: center;
  justify-content: ${props => props.justifyContent};
  padding: 0px !important;
  margin-bottom: ${props => props.mb};
`

export const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  background-color: white;
  border-radius: 8px;
  padding: 10px;

  @media screen and (min-width: 768px) {
    width: 50%;
    padding: 15px;
  }
`

export const Button = styled.button`
  padding: 5px;
  border: 0px;
  color: #223a5f;
  cursor: pointer;
  padding: 5px;
  margin-bottom: ${props => props.mb};
`

export const RulesButton = styled.button`
  padding: 10px;
  padding-right: 15px;
  padding-left: 15px;
  font-family: 'Bree Serif';
  font-size: 15px;
  color: #223a5f;
  border-radius: ${props => props.radius};
  border: 0px;
  cursor: pointer;
`

export const Heading = styled.h1`
  font-size: ${props => props.size};
  font-family: 'Roboto';
  color: White;
  margin-bottom: 10px;
`
export const Para = styled.p`
  font-size: ${props => props.size};
  font-family: 'Roboto';
  color: ${props => props.cl};
  margin: ${props => props.ma};
`
