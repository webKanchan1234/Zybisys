import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import "./about.css"

const About = () => {
    const {id} = useParams()
    // console.log(id)
    const [details, setDetails] = useState({})

    useEffect(() => {
        axios.get(`https://api.jikan.moe/v4/anime/${id}`).then(res => {
        setDetails(res.data)
        console.log(res.data)
    }).then(err => {
        console.log(err)
    })
},[id])

    // console.log(details.data.title)
    
  return (
    <div className='container'>
        <div className="details">
            <div className="image">
                <img src={details.data.images.jpg.image_url} alt="" />
            </div>
            <div className="about">
                <p className='title'>{details.data.title}</p>
                <a href={details.data.trailer.url}>Trailer</a>
                <p className='episode'>Episodes:- {details.data.episodes}</p>
                <p className='duration'>Duration {details.data.duration}</p>
                <p className='rating'>Rating {details.data.rating}</p>
                <p className='synposis'><span>Synopsis:-</span> {details.data.synopsis}</p>
            </div>
        </div>
    </div>
  )
}

export default About