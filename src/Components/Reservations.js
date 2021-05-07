import PropTypes from "prop-types";
import Reservation from "./Reservation";

const Reservations = ({ reservations, onRemove, onEdit }) => {
  return (
    <>
      {reservations.map((reservation) => (
        <Reservation
          key={reservation.id}
          reservation={reservation}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      ))}
    </>
  );
};

Reservations.propTypes = {
  reservations: PropTypes.array,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func,
};

export default Reservations;
