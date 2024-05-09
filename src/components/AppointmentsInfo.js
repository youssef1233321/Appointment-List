import { FaTrash } from "react-icons/fa";

function AppointmentsInfo({ appointment, onDeleteApp }) {
  return (
    <li className="list-unstyled  row mt-1 p-3  ">
      <div className="col-md-1 d-flex align-items-center">
        <button
          onClick={() => onDeleteApp(appointment.id)}
          className="btn btn-danger"
        >
          <FaTrash />
        </button>
      </div>
      <div className="col-md-9  text-start">
        <h3 className="mb-0">{appointment.petName}</h3>
        <p className="m-0  ">
          <b>Owner</b>:
          <span className="d-inline ps-0 ">{appointment.ownerName}</span>
        </p>
        <span className="  m-0 p-0">{appointment.aptNotes}</span>
      </div>
      <div className="col-md-2">
        <span>{appointment.aptDate}</span>
      </div>
    </li>
  );
}

export default AppointmentsInfo;
