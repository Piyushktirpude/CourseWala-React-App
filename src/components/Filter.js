import React from 'react'

export const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;
    
    function filterhandler(title){
      setCategory(title)
    }
  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
        {
            filterData.map((data)=>(
                <button className='text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2' 
                onClick={()=> filterhandler(data.title)}
                key={data.id}>{data.title}</button>
            ))
        }
    </div>
  )
}
export default Filter;