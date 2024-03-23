import Header from '../Header'
import {ErrorCard, ErrorImage, ErrorTitle, ErrorText} from './style'

const NotFound = () => (
  <>
    <Header />
    <ErrorCard>
      <ErrorImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
      />
      <ErrorTitle>Page Not Found</ErrorTitle>
      <ErrorText>
        We are sorry, the page you requested could not be found.
      </ErrorText>
    </ErrorCard>
  </>
)
export default NotFound
