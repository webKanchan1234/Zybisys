import React, { useEffect, useState } from 'react'
import "./home.css"
import axios from "axios"
import Genre from "../Data/Data.json"
import Pagination from '../Pagination/Pagination'
import {Link} from "react-router-dom"

const Home = () => {

    const [seachText, setSeachText] = useState("")
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(4)

    useEffect(() => {
      axios.get('https://api.jikan.moe/v4/anime').then((res) => {
        setData(res.data.data)
        // console.log(res.data.data)
      }
      
    )}, [])

    const filterFun = async(category) =>{
        
        const newData = await data.filter((curElem) => {
            // console.log(curElem.genres[0].name)
            return (curElem.genres[0].name === category)
        })
        console.log(newData)
        setData(newData)
    }

    //-------------------------
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    
  return (
    <div>
        <div className="functionality">
            <input type="text" onChange={(e)=>setSeachText(e.target.value)} 
            placeholder='Search anime' name="" id="" />

        </div>
        <div className="genre">
        {
            Genre.map((item,key)=>{
                return(
                    <button className='btn' onClick={()=>filterFun(item.name)}>{item.name}</button>
                )
            })
        }
        <button className='btn' onClick={()=>setData(data)}>All</button>
        </div>
        <div className="container_box">
        {
            currentPosts.filter((val)=>{
                if(seachText===""){
                    return val
                }else if(val.title.toLowerCase().includes(seachText.toLowerCase())){
                    return val
                }
            }).map((item)=>{
                return(
                    <div className="card">
                        <Link to={`/anime/${item.mal_id}`} className="link">
                        <img src={item.images.jpg.image_url} alt="" />
                        <p className='title'>{item.title}</p>
                        <p className='rating'>{item.rating}</p>
                        </Link>
                    </div>
                )
            })
        }
        
            {/* <div className="card">
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="img" />
                <h2>Title</h2>
                <p>Ratings</p>
            </div> */}
            
        </div>
        <div className="pagination">
        <Pagination
            postPerPage={postPerPage}
            totalPosts={data.length}
            paginate={paginate}
        />
        </div>
    </div>
  )
}

export default Home