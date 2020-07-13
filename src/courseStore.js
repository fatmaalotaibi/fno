import { decorate, observable } from "mobx";
import slugify from "react-slugify";

//data
import courses from "./courses";

class CourseStore {
  courses = courses;

  createCourse = (newCourse) => {
    newCourse.id = this.courses[this.courses.length - 1].id + 1;
    newCourse.slug = slugify(newCourse.name);
    this.courses.push(newCourse);
  };

  deleteCourse = (courseId) => {
    this.courses = this.courses.filter((course) => course.id !== +courseId);
  };
}

decorate(CourseStore, {
  courses: observable,
});
const courseStore = new CourseStore();
export default courseStore;
