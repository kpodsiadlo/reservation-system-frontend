import PropTypes from "prop-types"

const User = ({onToggleAddReservation}) => {
    return (
        <div>
            <h2>FirstName LastName</h2>
            <p>User Function<button onClick={() => onToggleAddReservation()}>Add Reservation</button>
            </p>
        </div>
    )
}

User.propTypes = {
    onToggleAddReservation: PropTypes.func.isRequired
}

export default User
