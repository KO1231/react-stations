// DO NOT DELETE

import { useState } from 'react'
import './App.css'
import Header from './Header'
import Description from './Description'
import DogListContainer from './DogListContainer'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <div>
      <Header />
      <Description />
      <DogListContainer/>
    </div>
  )
}
