import { useState, useEffect } from "react";

function useCoursesData(){
    const [courses, setNames] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/courses")
        .then((response) => response.json())
        .then((data) => {
            setNames(data);
        })
        .catch((error) =>
        console.error("Error fetching products data:", error));
    }, []);
    
    return {courses};
}

export default useCoursesData;