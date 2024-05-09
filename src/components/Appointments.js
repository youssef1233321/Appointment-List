import "bootstrap/dist/css/bootstrap.min.css";
import { SlCalender } from "react-icons/sl";
import { useState } from "react";

export default function AddAppointments({ onSendAppoinment, lastId }) {
  const clearData = {
    ownerName: "",
    petName: "",
    aptDate: "",
    aptTime: "",
    aptNotes: "",
  };
  let [data, setData] = useState(false);
  let [formData, setFormData] = useState(clearData);

  function formDataPublish() {
    const appoinmentInfo = {
      id: lastId + 1,
      ownerName: formData.ownerName,
      petName: formData.petName,
      aptDate: formData.aptDate + " " + formData.aptTime,
      aptNotes: formData.aptNotes,
    };
    onSendAppoinment(appoinmentInfo);
    setFormData(clearData);
    setData(!data);
  }

  return (
    <>
      <div>
        <section className="  mx-auto w-75 ">
          <header className="bg-primary text-white  mx-auto px-3 py-2 fs-5 text-start ">
            <button onClick={() => setData(!data)}>
              <SlCalender className="addAppoHead me-2 mb-2 fs-4  " />
            </button>
            Add Appointment
          </header>

          {data && (
            <div className="appoint   mx-auto d-flex flex-column align-items-center   ">
              <div className="fields px-4 py-3">
                <label>Owner Name</label>
                <input
                  type="text"
                  onChange={(event) => {
                    setFormData({ ...formData, ownerName: event.target.value });
                  }}
                  value={formData.ownerName}
                />
              </div>
              <div className="fields px-4 py-3">
                <label>Pet Name</label>
                <input
                  onChange={(event) => {
                    setFormData({ ...formData, petName: event.target.value });
                  }}
                  value={formData.petName}
                  type="text"
                />
              </div>
              <div className="fields px-4 py-3">
                <label>Apt Date</label>
                <input
                  type="date"
                  onChange={(event) => {
                    setFormData({ ...formData, aptDate: event.target.value });
                  }}
                  value={formData.aptDate}
                />
              </div>
              <div className="fields px-4 py-3">
                <label>Apt Time</label>
                <input
                  type="time"
                  onChange={(event) => {
                    setFormData({ ...formData, aptTime: event.target.value });
                  }}
                  value={formData.aptTime}
                />
              </div>
              <div className="fields px-4 py-3 ">
                <label>Appointment Note</label>
                <textarea
                  onChange={(event) => {
                    setFormData({ ...formData, aptNotes: event.target.value });
                  }}
                  value={formData.aptNotes}
                  className="p-2"
                  rows={4}
                  cols={10}
                  placeholder="Details Comment..."
                ></textarea>
              </div>
              <button
                onClick={formDataPublish}
                className="btn btn-primary mb-4 mt-3 me-4 w-25  "
              >
                Submit
              </button>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
