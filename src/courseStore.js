import { decorate, observable } from "mobx";
import slugify from "react-slugify";

//data
import courses from "./courses";

class CourseStore {
  courses = courses;

  updateCourse = (updatedCourse) => {
    const course = this.courses.find(
      (course) => course.id === updatedCourse.id
    );

    course.name = updatedCourse.name;
    course.price = updatedCourse.price;
    course.image = updatedCourse.image;
    course.description = updatedCourse.description;
    console.log("updateCourse -> course", course);
  };

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
