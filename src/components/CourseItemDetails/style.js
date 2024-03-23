import styled from 'styled-components'

// Styling Home view ...
export const HomeCard = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const AlignmentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding-left: 11px;
`
export const CourseTitle = styled.h2`
  font-family: 'Roboto';
  color: #1e293b;
  letter-spacing: 0.6px;
  margin: 0;
  margin-left: 9px;
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #64748b;
  line-height: 1.5;
`
export const CoursesList = styled.div`
  padding: 0;
  display: flex;
  width: 90%;
  border: solid 1px #ffffff;
  border-radius: 11px;
  box-shadow: 0 4px 16px 0 #e8e8e8;
`
export const CourseImg = styled.img`
  width: 40%;
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
