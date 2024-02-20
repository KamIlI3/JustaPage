import React from 'react';
import '../../css/Courses.css';
import useCoursesData from '../../hooks/useCoursesData';
import { Link } from 'react-router-dom';

function Courses() {
    const {courses} = useCoursesData();

  return (
    <div className='Courses'>
        <div className='Front-img'>
        <h1>Kursy</h1>
        <img src='https://images.unsplash.com/photo-1512207855369-643452a63d46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MjQ3fDB8MXxzZWFyY2h8ODF8fG1ha2V1cCUyMHByb2R1Y3RzfGVufDB8fHx8MTcwODQ1MzUyOHww&ixlib=rb-4.0.3&q=80&w=1456' alt="zdjecie"/></div>        <div className='Courses-content'>
            {courses.map((cours) => (
                <div key={cours.id} className='Courses-item'>
                    <div className='Courses-item-img'>
                    <img src={cours.imgURL} alt={cours.name}/>
                    </div>
                    <div className='Courses-item-content'>
                        <h3>{cours.name}</h3>
                        <p>{cours.short_description}</p>
                        <Link to={cours.reference} className='Find-out-more'>Zobacz więcej!</Link>
                    </div>
                </div>
                ))}
        </div>
    </div>
  );
}
export default Courses;
