import React from 'react'
// import './App.css'
import { MovieItem } from './components/UI/molecules/MovieItem/MovieItem'

function App() {
  const movies = [
    {
      id: 1,
      title: 'Braver',
      image: 'https://source.unsplash.com/cFbNlpRZKi0',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quidem accusantium facere natus molestiae aspernatur ullam dicta rem at consectetur?',
    },
  ]
  return (
    <div className="App">
      <MovieItem
        title={movies[0].title}
        image={movies[0].image}
        description={movies[0].description}
      />
    </div>
  )
}

export default App
