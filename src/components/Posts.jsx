import React,{useState,useEffect} from 'react'
import Pagination from './Pagination';
import Post from './Post';
import { data } from '../blogsData';
const Posts = () => {
    const [posts,setPosts] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [categories,setCategories] = useState([])
    const [category,setCategory] = useState(null)
    const pageSize = 12;
    useEffect(()=>{
       
        const fetchData = async()=>{
         
            // getting all categories
            const cats = data.map(post => post.category)
            const unique = [...new Set(cats)]
            console.log(unique)

            setCategories(unique)
            if(category){
              
              const filterdPosts = data.filter(post => post.category === category)
              setPosts(filterdPosts)
              console.log('changing',posts)
              return;
            }
            setPosts(data);
        }
        fetchData()
    },[currentPage,category])
    
    // handle page chang

    const handlePageChange = pageNumber => setCurrentPage(pageNumber);

    // when the user select a category
    const handleCategoryChange = cat => {
     
      const categoryPosts = posts.filter(post => post.category === cat);
      setPosts(categoryPosts)
      setCurrentPage(1)
      setCategory(cat);
    }

  return (
    <div className="flex-3 max-w-[100%]">
      {/* Category section */}
      <div className="px-1- py-4 font-bold text-2xl">
      <h2>Categories</h2>
      </div>
     {categories.length && (
      <div className="flex p-8 overflowX-scroll max-w-[100%] items-center justify-between flex-wrap text-gray-300">
      {categories.map(cat => <button onClick={() => handleCategoryChange(cat)} className={`rounded-2xl px-2 py-4 bg-gray-200 text-gray-900 font-bold shadow-lg ${category === cat?'text-orange-600':''}`} key={cat}>{cat}</button>)}
     </div>
     )}
      {/* Posts Secction */}
      <div className="posts grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[100%]">
       {
        posts.slice(currentPage,pageSize).map(post => <Post key={post.id} post={post} />)
       }
      </div>
      {/* Pagination section */}
      <div className="pagination flex justify-center mt-8">
        <Pagination current={currentPage} change={handlePageChange} posts={posts} size={pageSize}/>
      </div>
    </div>
  )
}

export default Posts