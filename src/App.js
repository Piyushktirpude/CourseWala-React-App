
import './App.css';
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import {apiUrl,filterData} from "./data";
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function App() {
  const [courses,setCourses]= useState([]);
  const [loading,setLoading]= useState(true);
  const [category,setCategory]= useState(filterData[0].title);

   async function fetchdata(){
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output= await response.json();
      //output//
      setCourses(output.data);
    } catch (error) {
      toast.error("Error occured")
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchdata();
  },[])

  return (
    <div className='flex flex-col min-h-screen'>
      <div>
        <Navbar/>
      </div>
      <div >
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      </div>
      <div className='w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]'>
      {
        loading ? (<Spinner/>):(<Cards courses={courses} category={category}/>)
      }
      </div>
    </div>
      
   
  );
}

export default App;
