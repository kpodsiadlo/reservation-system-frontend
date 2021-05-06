import Reservation from "./Reservation";

const Reservations = ({ reservations, onRemove }) => {
  return (
    <>
      {reservations.map((reservation) => (
        <Reservation
          key={reservation.id}
          reservation={reservation}
          onRemove={onRemove}
        />
      ))}
    </>
  );
};

export default Reservations;
