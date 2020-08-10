import { decorate, observable } from "mobx";
import axios from "axios";
import instance from "./instance";

class InstituteStore {
  institutes = [];

  fetchInstitutes = async () => {
    try {
      const res = await axios.get("http://localhost:8000/institutes");
      console.log(res);
      this.institutes = res.data;
    } catch (err) {
      console.log("InstituteStore -> fetchInstitute -> error", err);
    }
  };

  createInstitute = async (newInstitute) => {
    try {
      const formData = new FormData();
      for (const key in newInstitute) formData.append(key, newInstitute[key]);
      const res = await instance.post("/signup", formData);
      this.institutes.push(res.data);
    } catch (error) {
      console.log("InstituteStore -> creatInstitute -> error", error);
    }
  };

  updateInstitute = async (updatedInstitute) => {
    try {
      // update in the backend
      const formData = new FormData();
      for (const key in updatedInstitute)
        formData.append(key, updatedInstitute[key]);
      await axios.put(
        `http://localhost:8000/Institutes/${updatedInstitute.id}`,
        formData
      );
      // update in the frontend
      const institute = this.institutes.find(
        (institute) => institute.id === updatedInstitute.id
      );
      for (const key in updatedInstitute)
        institute[key] = updatedInstitute[key];
      URL.createObjectURL(updatedInstitute.image);
    } catch (error) {
      console.log("InstituteStore -> updateInstitute -> error", error);
    }
  };

  deleteInstitute = async (instituteId) => {
    try {
      await axios.delete(`http://localhost:8000/institutes/${instituteId}`);
      this.institutes = this.institutes.filter(
        (institute) => institute.id !== +instituteId
      );
    } catch (error) {
      console.log("InstituteStore -> deleteInstitute -> error", error);
    }
  };
}

decorate(InstituteStore, {
  institutes: observable,
});

const instituteStore = new InstituteStore();
instituteStore.fetchInstitutes();

export default InstituteStore;
