import { decorate, observable } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class CourseStore {
  courses = [];

  fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:8000/courses");
      this.courses = res.data;
    } catch (err) {
      console.err("CourseStore -> fetchCourse -> error", err);
    }
  };

  createCourse = (newCourse) => {
    newCourse.id = this.courses[this.courses.length - 1].id + 1;
    newCourse.slug = slugify(newCourse.name);
    this.courses.push(newCourse);
  };

  updateCourse = (updatedCourse) => {
    const course = this.courses.find(
      (course) => course.id === updatedCourse.id
    );

    for (const key in updatedCourse) course[key] = updatedCourse[key];
  };

  deleteCourse = (courseId) => {
    this.courses = this.courses.filter((course) => course.id !== +courseId);
  };
}

decorate(CourseStore, {
  courses: observable,
});

const courseStore = new CourseStore();
courseStore.fetchCourses();

export default courseStore;
