import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";

//Styles
import { DetailWrapper } from "../../styles";

//Stores
import instituteStore from "../../Stores/instituteStore";

//Components
import CourseList from "../CourseList";

const InstituteDetail = () => {
  const { instituteSlug } = useParams();
  const institute = instituteStore.institutes.find(
    (_institute) => _institute.slug === instituteSlug
  );

  return (
    <>
      <DetailWrapper>
        <h4>{institute.name}</h4>
        <img src={institute.image} />
      </DetailWrapper>
      <CourseList courses={institute.courses} />
    </>
  );
};

export default InstituteDetail;
