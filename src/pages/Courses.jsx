import CoursesCatalog from "../components/coursesPage/CoursesCatalog"
import FixedBg from "../shared/FixedBg"

const Courses = () => {
  return (
    <>
    <FixedBg img="/assets/backgroundDesign.png" />
    <section>
      <CoursesCatalog />
    </section>
    </>
  )
}

export default Courses