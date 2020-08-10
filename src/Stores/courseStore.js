import { decorate, observable } from "mobx";
import axios from "axios";
import instance from "./instance";

class CourseStore {
  courses = [];
  loading = true;

  fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:8000/courses");
      this.courses = res.data;
      this.loading = false;
    } catch (err) {
      console.log("CourseStore -> fetchCourse -> error", err);
    }
  };

  createCourse = async (newCourse) => {
    try {
      const formData = new FormData();
      for (const key in newCourse) formData.append(key, newCourse[key]);
      const res = await axios.post(
        `http://localhost:8000/institutes/${newCourse.instituteId}/courses`,
        formData
      );
      this.courses.push(res.data);
    } catch (error) {
      console.log("CourseStore -> creatCourse -> error", error);
    }
  };

  updateCourse = async (updatedCourse) => {
    try {
      // update in the backend
      const formData = new FormData();
      for (const key in updatedCourse) formData.append(key, updatedCourse[key]);
      await axios.put(
        `http://localhost:8000/courses/${updatedCourse.id}`,
        formData
      );
      // update in the frontend
      const course = this.courses.find(
        (course) => course.id === updatedCourse.id
      );
      for (const key in updatedCourse) course[key] = updatedCourse[key];
      URL.createObjectURL(updatedCourse.image);
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
  loading: observable,
});

const courseStore = new CourseStore();
courseStore.fetchCourses();

export default courseStore;
