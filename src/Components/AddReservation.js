import { useState } from "react";

const AddReservation = ({ onAddReservation }) => {
  const timezoneOffset = new Date().getTimezoneOffset() * 60000;
  const currentLocalTime = new Date(Date.now() - timezoneOffset)
    .toISOString()
    .slice(0, -8);
  console.log(currentLocalTime);
  const [roomNumber, setRoomNumber] = useState();
  const [startTime, setStartTime] = useState(currentLocalTime);
  const [endtime, setEndTime] = useState(currentLocalTime);

  const onSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000000) + 1;
    console.log(id);
    onAddReservation({
      id: id,
      roomNumber: roomNumber,
      startTime: startTime,
      endTime: endtime,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="roomNumber"
        value={roomNumber}
        onChange={(e) => {
          setRoomNumber(e.target.value);
        }}
      />
      <p>
        Reservation Start:
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        ></input>
      </p>
      <p>
        Reservation End::
        <input
          type="datetime-local"
          value={endtime}
          onChange={(e) => setEndTime(e.target.value)}
        ></input>
      </p>
      <input type="submit" value="Apply"></input>
    </form>
  );
};

export default AddReservation;
