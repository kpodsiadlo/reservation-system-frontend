import User from "./Components/User";
import Reservations from "./Components/Reservations";
import "./App.css";
import { useState } from "react";
import AddReservation from "./Components/AddReservation";
import EditReservation from "./Components/EditReservation";

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
  ]);

  const [showAddReservation, setShowAddReservation] = useState(false);

  const addReservation = (reservation) => {
    const startTimeUTC = new Date(reservation.startTime).toISOString();
    const endTimeUTC = new Date(reservation.endTime).toISOString();
    const timeProcessedReservation = {
      ...reservation,
      startTime: startTimeUTC,
      endTime: endTimeUTC,
    };
    console.log(timeProcessedReservation);
    setReservations([...reservations, timeProcessedReservation]);
  };

  const removeReservation = (id) => {
    setReservations(
      reservations.filter((reservation) => reservation.id !== id)
    );
  };

  const editReservation = (updatedReservation) => {
    console.log("upd", updatedReservation);
    const startTimeISO = new Date(updatedReservation.startTime).toISOString();
    const endTimeISO = new Date(updatedReservation.endTime).toISOString();
    const updatedReservations = reservations.forEach((reservation) => {
      if (reservation.id === updatedReservation.id) {
        reservation.roomNumber = updatedReservation.roomNumber;
        reservation.startTime = startTimeISO;
        reservation.endTime = endTimeISO;
      }
    });
    setReservations(updatedReservations);
    console.log(reservations);
  };

  const toggleAddReservation = () => {
    setShowAddReservation(!showAddReservation);
  };

  return (
    <div className="App">
      <User onToggleAddReservation={toggleAddReservation} />
      {showAddReservation && (
        <AddReservation onAddReservation={addReservation} />
      )}
      <EditReservation
        reservation={reservations[1]}
        onEditReservation={editReservation}
      />
      <Reservations
        reservations={reservations}
        onRemove={removeReservation}
        onEdit={editReservation}
      />
    </div>
  );
};

export default App;
