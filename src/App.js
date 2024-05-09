import { FaHome } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import AddAppointments from "./components/Appointments";
import AppointmentsInfo from "./components/AppointmentsInfo";
import { useCallback, useState, useEffect } from "react";

function App() {
  let [appointmentList, setAppointmentListt] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("petName");
  let [orderBy, setOrderBy] = useState("asc");

  const filterSearchAppointment = appointmentList.filter((item) => {
    return (
      item.petName.toLowerCase().includes(query.toLocaleLowerCase()) ||
      item.ownerName.toLowerCase().includes(query.toLocaleLowerCase()) ||
      item.aptNotes.toLowerCase().includes(query.toLocaleLowerCase())
    );
  });
  if (sortBy !== "" && orderBy !== "") {
    filterSearchAppointment.sort((a, b) => {
      let order = orderBy === "asc" ? 1 : -1;
      return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order
        : 1 * order;
    });
  }

  console.log(filterSearchAppointment);

  const fetchData = useCallback(async () => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setAppointmentListt(data));
    // const {data} = await axios.get('./data.json');
    // setAppointmentListt(data)
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className="App container opacity-100   pt-3 text-center ">
        <h1 className=" ">
          <FaHome className="text-primary text-opacity-75   mb-2 me-2" />
          Home
        </h1>
        <AddAppointments
          onSendAppoinment={(myAppoinment) =>
            setAppointmentListt([...appointmentList, myAppoinment])
          }
          lastId={appointmentList.reduce(
            (max, item) => (Number(item.id) > max ? Number(item.id) : max),
            0
          )}
        />
        <Search
          query={query}
          onQueryChange={(myQuery) => setQuery(myQuery)}
          sortBy={sortBy}
          onSortByChange={(mySort) => setSortBy(mySort)}
          orderBy={orderBy}
          onOrderByChange={(myOrder) => setOrderBy(myOrder)}
        />

        <ul className="border-top  p-0 mt-3">
          {filterSearchAppointment.map((appointment) => (
            <AppointmentsInfo
              key={appointment.id}
              appointment={appointment}
              onDeleteApp={(appointmentId) =>
                setAppointmentListt(
                  appointmentList.filter(
                    (appointment) => appointmentId !== appointment.id
                  )
                )
              }
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
