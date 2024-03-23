import {LinkItem, Course, CourseLogo, CourseName} from './style'

const CourseItem = props => {
  const {courseData} = props
  const {id, name, imageUrl} = courseData

  return (
    <LinkItem to={`/courses/${id}`}>
      <Course>
        <CourseLogo src={imageUrl} alt={name} />
        <CourseName>{name}</CourseName>
      </Course>
    </LinkItem>
  )
}

export default CourseItem
