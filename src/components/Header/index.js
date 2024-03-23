import {withRouter} from 'react-router-dom'
import {Navbar, Logo, LinkItem} from './style'

const Header = () => (
  <LinkItem to="/">
    <Navbar>
      <Logo
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
    </Navbar>
  </LinkItem>
)

export default withRouter(Header)
