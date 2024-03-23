import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Navbar = styled.nav`
  width: 100%;
  height: 10vh;
  background-color: #f1f5f9;
  padding-left: 23px;
  display: flex;
  align-items: center;
`
export const Logo = styled.img`
  width: 112px;
  cursor: pointer;
`
export const LinkItem = styled(Link)`
  text-decoration: none;
  outline: none;
`
