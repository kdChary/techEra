import styled from 'styled-components'

// Styling Home view ...
export const HomeCard = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const AlignmentCard = styled.div`
  padding: 7px;
`
export const CourseTitle = styled.h1`
  font-family: 'Roboto';
  color: #1e293b;
  letter-spacing: 0.6px;
  margin: 0;
  margin-left: 9px;
`
export const CoursesList = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  //   width: 95%;
  @media (min-width: 1040px) {
    justify-content: flex-start;
  }
`

// Styling Error view ...
export const ErrorCard = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ErrorImage = styled.img`
  width: 320px;
`
export const ErrorTitle = styled.h1`
  font-family: 'Roboto';
  color: #1e293b;
  letter-spacing: 0.6px;
  margin: 0;
  margin-left: 9px;
`
export const ErrorText = styled.p`
  font-family: 'Roboto';
  font-size: '13px';
  font-weight: '500';
  color: #475569;
`
export const RetryBtn = styled.button`
  border: solid 1.3px #4656a1;
  background-color: #4656a1;
  color: #ffffff;
  padding: 7px 13px;
  font-size: 13px;
  font-weight: 600;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
`
// styling Loader card
export const LoaderCard = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
