import User from './Components/User'
import Reservations from "./Components/Reservations"
import './App.css';
import { useState } from 'react'
import AddReservation from "./Components/AddReservation"


const App = () => {

  const [reservations, setReservations] = useState([
    {
      id: 1,
      roomNumber: 234,
      startTime: "2023-08-19T23:15:30.000Z",
      endTime: "2045-08-19T23:19:30.000Z",
    },
    {
      id: 2,
      roomNumber: 13,
      startTime: "1975-08-19T23:15:30.000Z",
      endTime: "1975-08-19T23:15:30.000Z",
    },
    {
      id: 3,
      roomNumber: 18,
      startTime: "1975-08-19T23:15:30.000Z",
      endTime: "1975-08-19T23:15:30.000Z",
    },
  ])

  const [showAddReservation, setShowAddReservation] = useState(
    false
  )

  const Remove = (id) => {
    setReservations(reservations.filter(reservation => reservation.id !== id))
  }

  const toggleAddReservation = () => {
    setShowAddReservation(!showAddReservation)
  }

  return (
    <div className="App">
      <User onToggleAddReservation={toggleAddReservation} />
      {showAddReservation && <AddReservation/>}
      <Reservations reservations={reservations} onRemove={Remove} />
    </div>
  );
}

export default App;
