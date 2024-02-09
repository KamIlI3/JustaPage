import React from 'react';
import '../../css/Courses.css';
import useCoursesData from '../../hooks/useCoursesData';
import { Link } from 'react-router-dom';

function Courses() {
    const {courses} = useCoursesData();

  return (
    <div className='Courses'>
        <div className='Courses-content'>
            {courses.map((cours) => (
                <div key={cours.id} className='Courses-item'>
                    <div className='Courses-item-img'>
                    <img src={cours.imgURL} alt={cours.name}/>
                    </div>
                    <div className='Courses-item-content'>
                        <h3>{cours.name}</h3>
                        <p>{cours.short_description}</p>
                        <Link to={cours.reference} className='Find-out-more'>Dowiedz się więcej</Link>
                    </div>
                </div>
                ))}
        </div>
    </div>
  );
}
export default Courses;
