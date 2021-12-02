import React from 'react'
import { useState, useEffect } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
import { grabResultsToFix } from '../services/index.js'


export default function ToOrder() {

  const [toFixs, setToFixs] = useState([])
  // const [toggle, setToggle] = useState(false)
  // const params = useParams()
  // const navigate = useNavigate()

  useEffect(() => {
    const getAllToFixs = async () => {
      const res = await grabResultsToFix()
      console.log(res)
      setToFixs(res)
    }
    getAllToFixs()
  }, [])


  return (
    <div className='toFix-Container'>
      {toFixs.map((toFix) => {
        return (
          <div id={toFix?.id}>
            <h1>Name: {toFix?.fields?.name}</h1>
            <h3>Notes: {toFix?.fields?.notes}</h3>
          </div>
        )
      })}
    </div>
  )
}