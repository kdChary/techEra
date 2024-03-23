import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {
  HomeCard,
  CourseTitle,
  Description,
  CoursesList,
  CourseImg,
  AlignmentCard,
  LoaderCard,
  ErrorCard,
  ErrorImage,
  ErrorTitle,
  ErrorText,
  RetryBtn,
} from './style'
// import CourseItem from '../CourseItem'
import Header from '../Header'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CourseItemDetails extends Component {
  state = {courseDetails: [], requestStatus: apiStatusConstant.initial}

  componentDidMount() {
    this.getCoursesItemDetails()
  }

  getCoursesItemDetails = async () => {
    this.setState({requestStatus: apiStatusConstant.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    if (response.ok) {
      const data = await response.json()
      const modifiedData = {
        id: data.course_details.id,
        name: data.course_details.name,
        imageUrl: data.course_details.image_url,
        description: data.course_details.description,
      }
      //   console.log(modifiedData)

      this.setState({
        requestStatus: apiStatusConstant.success,
        courseDetails: modifiedData,
      })
    } else {
      this.setState({requestStatus: apiStatusConstant.failure})
    }
  }

  onClickRetry = () => {
    this.getCoursesItemDetails()
  }

  renderErrorView = () => (
    <ErrorCard>
      <ErrorImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <ErrorTitle>Oops! Some Thing Went Wrong</ErrorTitle>
      <ErrorText>We cannot seem to find the page you are looking for</ErrorText>
      <RetryBtn type="button" onClick={this.onClickRetry}>
        Retry
      </RetryBtn>
    </ErrorCard>
  )

  renderLoadingView = () => (
    <LoaderCard data-testid="loader">
      <Loader
        type="ThreeDots"
        width="80"
        height="80"
        color="#7f00f7"
        radius={9}
      />
    </LoaderCard>
  )

  renderHomePage = () => {
    const {courseDetails} = this.state
    const {name, imageUrl, description} = courseDetails

    return (
      <HomeCard>
        <CoursesList>
          <CourseImg src={imageUrl} alt={name} />
          <AlignmentCard>
            <CourseTitle>{name}</CourseTitle>
            <Description>{description}</Description>
          </AlignmentCard>
        </CoursesList>
      </HomeCard>
    )
  }

  successView = () => {
    const {requestStatus} = this.state

    switch (requestStatus) {
      case apiStatusConstant.inProgress:
        return this.renderLoadingView()
      case apiStatusConstant.success:
        return this.renderHomePage()
      case apiStatusConstant.failure:
        return this.renderErrorView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.successView()}
      </>
    )
  }
}

export default CourseItemDetails
