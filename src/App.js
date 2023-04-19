import { useState } from "react"
import {initialWorkouts, generateWorkout} from "./Workouts.js"

import "./App.css"

import WorkoutsPanel from "./components/WorkoutsPanel.js"

function App() {
  const [workouts, setWorkouts] = useState(initialWorkouts)
  const [showDoneWorkouts, setShowDoneWorkouts] = useState(true)

  const addNewWorkout = () => {
    setWorkouts([...workouts, generateWorkout()])
  }

  const deleteWorkout = (workout) => {
    setWorkouts(workouts.filter(w => w !== workout))
  }

  const completeWorkout = (workout) => {
    setWorkouts(workouts.map(w => {
      if (w === workout)
        w.done = true
      return w
    }))
  }

  const replaceWorkout = (workout) => {
    setWorkouts(workouts.map(w => {
      if (w === workout)
        return generateWorkout()
      return w
    }))
  }

  const getWorkouts = () => {
    return showDoneWorkouts ? 
      workouts.filter(w => w.done) :
      workouts
  }

  return (
    <div className="App">
      <h1>🏋️‍♀️Workout Generator</h1>

      <button onClick={addNewWorkout}>Add New Workout</button>

      <span>
        <input type="checkbox" 
          onChange={e => setShowDoneWorkouts(e.target.checked)} />
        <span>Show Done Only</span>
      </span>
      
      <WorkoutsPanel
        workouts={getWorkouts()}
        completeWorkout={completeWorkout}
        deleteWorkout={deleteWorkout}
        replaceWorkout={replaceWorkout}
      />
    </div>
  )
}

export default App
