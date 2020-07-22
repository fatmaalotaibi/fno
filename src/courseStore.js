import { decorate, observable } from "mobx";
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

  createCourse = async (newCourse) => {
    try {
      const res = await axios.post("http://localhost:8000/courses", newCourse);
      this.courses.push(res.data);
    } catch (error) {
      console.log("CourseStore -> creatCourse -> error", error);
    }
  };

  updateCourse = async (updatedCourse) => {
    // update in the backend
    try {
      await axios.put(
        `http://localhost:8000/courses/${updatedCourse.id}`,
        updatedCourse
      );
      // update in the frontend
      const course = this.courses.find(
        (course) => course.id === updatedCourse.id
      );
      for (const key in updatedCourse) course[key] = updatedCourse[key];
    } catch (error) {
      console.log("CourseStore -> updateCourse -> error", error);
    }
  };

  deleteCourse = async (courseId) => {
    try {
      await axios.delete(`http://localhost:8000/courses/${courseId}`);
      this.courses = this.courses.filter((course) => course.id !== +courseId);
    } catch (error) {
      console.log("CourseStore -> deleteCourse -> error", error);
    }
  };
}

decorate(CourseStore, {
  courses: observable,
});

const courseStore = new CourseStore();
courseStore.fetchCourses();

export default courseStore;
