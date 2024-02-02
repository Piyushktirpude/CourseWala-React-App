import React, { useState } from 'react'
import Card from "./Card";

export const Cards = (props) => {
  let courses = props.courses;
  const[likedcourses,setLikedcourse]= useState([]);
  let category = props.category;

  function getcourses(){
    if(category ==="All"){
      let allcourses= [] ;
      Object.values(courses).forEach(array=>{
        array.forEach(courseData => {
          allcourses.push(courseData);
        })
      })
      return allcourses;
    }
    else{
      //return only specific category data
      return courses[category];
    }

  }
  return (
    <div className=" flex flex-wrap justify-center gap-3 mb-4">
        {
          getcourses().map((course)=>(
             <Card key={course.id} course={course} likedcourses={likedcourses} setLikedcourse={setLikedcourse}/>
          ))
        }
    </div>
  )
}
export default Cards;
