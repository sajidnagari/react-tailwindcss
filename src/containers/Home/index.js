import React from 'react'
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div>Home go to  <Link to={"/about"}>About</Link></div>
  )
}
