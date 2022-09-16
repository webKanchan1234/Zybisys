import React from 'react'
import "./pagination.css"

const Pagination = ({postPerPage,totalPosts,paginate}) => {
    const pageNumber=[]
    for(let i=1;i<=Math.ceil(totalPosts/postPerPage);i++){
        pageNumber.push(i)
    }
  return (
    <div>
        <ul>
            {
                pageNumber.map(number=>{
                    return (
                        <li key={number}>
                            <a onClick={()=>paginate(number)} href="#">{number}</a>
                        </li>
                    )
            })
            }
        </ul>
    </div>
  )
}

export default Pagination