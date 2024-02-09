import React from 'react';
import '../css/index.css';
import NavMenu from '../components/common/NavMenu';
import Footer from '../components/common/footer';
import Courses from '../components/courses/Courses'

function CoursesPage(){
  return(
    <div>
        <NavMenu />
        <Courses />
        <Footer />
    </div>
  )
}

    export default CoursesPage;