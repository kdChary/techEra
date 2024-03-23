import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {
  HomeCard,
  CourseTitle,
  CoursesList,
  AlignmentCard,
  LoaderCard,
  ErrorCard,
  ErrorImage,
  ErrorTitle,
  ErrorText,
  RetryBtn,
} from './style'
import CourseItem from '../CourseItem'
import Header from '../Header'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {courseList: [], requestStatus: apiStatusConstant.initial}

  componentDidMount() {
    this.getCourses()
  }

  getCourses = async () => {
    this.setState({requestStatus: apiStatusConstant.inProgress})

    const response = await fetch('https://apis.ccbp.in/te/courses')
    if (response.ok) {
      const data = await response.json()
      const modifiedData = data.courses.map(course => ({
        id: course.id,
        name: course.name,
        imageUrl: course.logo_url,
      }))
      //   console.log(modifiedData)

      this.setState({
        requestStatus: apiStatusConstant.success,
        courseList: modifiedData,
      })
    } else {
      this.setState({requestStatus: apiStatusConstant.failure})
    }
  }

  onClickRetry = () => {
    this.getCourses()
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
    const {courseList} = this.state

    return (
      <HomeCard>
        <AlignmentCard>
          <CourseTitle>Courses</CourseTitle>
          <CoursesList>
            {courseList.map(course => (
              <CourseItem key={course.id} courseData={course} />
            ))}
          </CoursesList>
        </AlignmentCard>
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

export default Home
