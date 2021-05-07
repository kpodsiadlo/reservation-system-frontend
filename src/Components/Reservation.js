const Reservation = ({ reservation, onRemove, onEdit }) => {
  return (
    <div>
      <h4>
        Room: {reservation.roomNumber}
        <button onClick={() => onEdit(reservation.id)}>Edit</button>
        <button onClick={() => onRemove(reservation.id)}>Remove</button>
      </h4>
      <p>
        Reservation start :
        {new Date(reservation.startTime).toLocaleString("pl-PL")} <br />
        Reservation end: {new Date(reservation.endTime).toLocaleString("pl-Pl")}
      </p>
    </div>
  );
};

export default Reservation;
