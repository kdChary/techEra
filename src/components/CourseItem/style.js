import {Link} from 'react-router-dom'
import styled from 'styled-components'

// Styling Link item
export const LinkItem = styled(Link)`
  text-decoration: none;
`

// Styling List Item...
export const Course = styled.li`
  width: 135px;
  height: 73px;
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 11px;
  //   border: solid 1px #ff99ff;
  border: none;
  border-radius: 7px;
  //   box-shadow: 0 4px 12px 0 #e8e8e8;
  //   background-color: #e8e8e8;
`

// Styling Containers...
export const NameCard = styled.div`
  width: 50%;
`

// Styling images ...
export const CourseLogo = styled.img`
  width: 57px;
  margin-right: 5px;
`

// Styling textContent ...
export const CourseName = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 700;
  color: #475569;
  //   margin-left: 7px;
`
