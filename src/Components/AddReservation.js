import ReservationEditor from "./ReservationEditor";
import { useState } from "react";

const AddReservation = ({ onAddReservation }) => {
  const timezoneOffset = new Date().getTimezoneOffset() * 60000;
  const currentLocalTime = new Date(Date.now() - timezoneOffset)
    .toISOString()
    .slice(0, -8);
  console.log(currentLocalTime);
  const [roomNumber, setRoomNumber] = useState();
  const [startTime, setStartTime] = useState(currentLocalTime);
  const [endTime, setEndTime] = useState(currentLocalTime);

  const onSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000000) + 1;
    console.log(id);
    onAddReservation({
      id: id,
      roomNumber: roomNumber,
      startTime: startTime,
      endTime: endTime,
    });
  };

  const props = {
    roomNumber: roomNumber,
    startTime: startTime,
    endTime: endTime,
    setRoomNumber: setRoomNumber,
    setStartTime: setStartTime,
    setEndTime: setEndTime,
    onSubmit: onSubmit,
  };

  return <ReservationEditor {...props} />;
};

export default AddReservation;
