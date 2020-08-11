import React from "react";
import { observer } from "mobx-react";
import { useParams, Redirect } from "react-router-dom";

//Styles
import { DetailWrapper } from "../../styles";

//Stores
import instituteStore from "../../Stores/instituteStore";
import courseStore from "../../Stores/courseStore";

//Components
import CourseList from "../CourseList";
import AddButton from "../Buttons/AddButton";
import UpdateButton from "../Buttons/UpdateButton";
import DeleteButton from "../Buttons/DeleteButton";

const InstituteDetail = () => {
  const courses = institute.courses
    .map((course) => courseStore.getCourseById(course.id))
    .filter((course) => course);

  const { instituteSlug } = useParams();

  const institute = instituteStore.institutes.find(
    (_institute) => _institute.slug === instituteSlug
  );

  if (!institute) return <Redirect to="/institutes" />;

  return (
    <div className="row">
      <div className="container">
        <DetailWrapper className="col-12">
          <h1>{institute.name}</h1>
          <img src={institute.image} />
          <UpdateButton />
        </DetailWrapper>
      </div>
      <div className="col-12">
        <CourseList courses={courses} />
        <AddButton instituteId={institute} />
        <DeleteButton instituteId={institute.id} />
      </div>
    </div>
  );
};

export default observer(InstituteDetail);
