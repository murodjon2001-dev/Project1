import React from 'react'
import "./style.css"
import Cards from './Components/Cards'
import Posts from './Api'
const App = () => {
  return (
    <div className='cards'>

      {
        Posts.map(x => {
          return (
            <Cards key={x.id} body={x.body} userId={x.userId} title={x.title}/>
          )
        })
      }
      
    </div>
  )
}

export default App