import React from 'react';
import { FaRegThumbsUp } from "react-icons/fa";
import { toast } from 'react-toastify';

export const Card = (props) => {
    let course= props.course;
    let likedcourses = props.likedcourses;
    let setLikedcourse = props.setLikedcourse;

    function likehandler(){
        //logic for likedcourses//
        if(likedcourses.includes(course.id)){
            setLikedcourse((prev)=> prev.filter((cid)=>(cid !== course.id)));
            toast.warning("like removed")
        }
        else{
            //courses that are not liked from starting
            if(likedcourses.length === 0){
                setLikedcourse([course.id])
            }
            else{
                //if non-empty from start
                setLikedcourse((prev)=>[...prev,course.id])
            }
            toast.success("liked")
        }
    }

  return (
    <div className='w-[400px] bg-slate-800 bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url}/>
          <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center'>
            <button onClick={likehandler}>
               <FaRegThumbsUp />
            </button>
          </div>
        </div>
        
        <div className='p-4'>
            <p className='text-white text-lg font-semibold'>{course.title}</p>
            <p className='mt-2 text-white'>{course.description}</p>
        </div>
    </div>
  )
}
export default Card;