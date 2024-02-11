import React from 'react';
import '../css/index.css';
import NavMenu from '../components/common/NavMenu';
import Footer from '../components/common/footer';
import Cours1 from '../components/courses/Cours1'

function CoursesPage(){
  return(
    <div>
        <NavMenu />
        <Cours1 />
        <Footer />
    </div>
  )
}

    export default CoursesPage;