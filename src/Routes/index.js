import React from "react";
import { observer } from "mobx-react";
import { Route, Switch } from "react-router";

//components
import CourseList from "../components/CourseList";
import CourseDetail from "../components/CourseDetail";
import Home from "../components/HomePage";
import InstituteList from "../components/InstituteList/";
import InstituteDetail from "../components/InstituteDetail";

//Stores
import courseStore from "../Stores/courseStore";

const Routes = () => {
  return (
    <Switch>
      <Route path="/institutes/:instituteSlug">
        <InstituteDetail />
      </Route>
      <Route path="/institutes">
        <InstituteList />
      </Route>
      <Route path="/courses/:courseSlug">
        <CourseDetail />
      </Route>
      <Route path="/courses">
        <CourseList course={courseStore.courses} />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
