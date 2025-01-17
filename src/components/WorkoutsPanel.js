

export default function WorkoutsPanel({ workouts, completeWorkout, deleteWorkout, replaceWorkout }) {
    return (
        <ul>
            {workouts.map((workout, index) => (
            <li key={index}>
                <p>
                    {workout.sets}x sets of <strong>{workout.reps}x{workout.exercise}</strong> with {workout.rest} seconds rest
                </p>
                {
                    !workout.done && 
                    <button onClick={e=>completeWorkout(workout)}>Done</button>}
                {
                    workout.done && 
                    <p>✅</p>
                }
                <button onClick={e=>deleteWorkout(workout)}>Delete</button>
                <button onClick={e=>replaceWorkout(workout)}>Replace</button>
            </li>
            ))}
        </ul>
    )
}