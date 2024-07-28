

import React from 'react'
import Navbar from './Navbar'
import Aboutme from './Aboutme'
import Skills from './Skills'
import Hero from './Hero'
import Qualification from './Qualification'

Qualification

function App() {

  const admin={
    "name":"Niya Viby",
    "degree":"Btech",
    "dob":"26/12/2000",
    "experience":"1 year",
    "phone":"9847010945",
    "email":"niyamviby2000@gmail.com"
  }

  const myskills=[
    {
      "name":"Python",
      "percentage":"85%"
    },
    {
      "name":"JS",
      "percentage":"80%"
    },
    {
      "name":"Front End",
      "percentage":"85%"
    },
    {
      "name":"Django",
      "percentage":"80%"
    }
  ]
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Aboutme admin={admin}></Aboutme>
      <Skills myskills={myskills}></Skills>
      <Qualification></Qualification>
    </div>
  )
}

export default App

