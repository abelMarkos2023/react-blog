import React from 'react'

const Pagination = ({current,change,posts,size}) => {

    const totalPages = Math.ceil(posts.length / size);
    const links = Array.from({length:totalPages},(_,i)=>i+1)
    console.log(links)
  return (
    <div className="paginate flex gap-4 items-center">
        <button className={`cursor-pointer ${current == 1?'disabled:opacity-50':''} px-2 py-1 shadow-lg bg-orange-400 rounded`} disabled ={current == 1} onClick={() => change(current+1)}>Prev</button>
        {
         links.map(page =>(
            <button key={page} className={`px-2 py-1 shadow-lg bg-orange-400 rounded ${page === current?'bg-orange-800 text-white':''}`} onClick={() => change(page)}>{page}</button>
        ))   
        }
    <button className={`px-2 py-1 shadow-lg ${current == totalPages?'disabled:opacity-50':''} bg-orange-400 rounded cursor-pointer`} disabled={totalPages == current} onClick={() => change(current+1)}>Next</button>
    </div>
  )
}

export default Pagination