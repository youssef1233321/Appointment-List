import "bootstrap/dist/css/bootstrap.min.css";
import { IoSearch } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";

function DropDown({
  toggle,
  sortBy,
  onSortByChange,
  orderBy,
  onOrderByChange,
}) {
  if (!toggle) {
    return null;
  }
  return (
    <div className="dropItem position-absolute end-0 mt-2  ">
      <div className="drop shadow d-flex flex-column">
        <span
          onClick={() =>
            sortBy === "petName"
              ? onSortByChange("")
              : onSortByChange("petName")
          }
        >
          Pet Name {sortBy === "petName" && <FaCheck />}
        </span>
        <span
          onClick={() =>
            sortBy === "ownerName"
              ? onSortByChange("")
              : onSortByChange("ownerName")
          }
        >
          Owner Name
          {sortBy === "ownerName" && <FaCheck />}
        </span>
        <span
          onClick={() =>
            sortBy === "aptDate"
              ? onSortByChange("")
              : onSortByChange("aptDate")
          }
        >
          Date {sortBy === "aptDate" && <FaCheck />}
        </span>
        <hr />
        <span
          onClick={() =>
            orderBy === "asc" ? onOrderByChange("") : onOrderByChange("asc")
          }
        >
          Asc
          {orderBy === "asc" && <FaCheck />}
        </span>
        <span
          onClick={() =>
            orderBy === "desc" ? onOrderByChange("") : onOrderByChange("desc")
          }
        >
          Desc
          {orderBy === "desc" && <FaCheck />}
        </span>
      </div>
    </div>
  );
}

export default function Search({
  query,
  onQueryChange,
  sortBy,
  onSortByChange,
  orderBy,
  onOrderByChange,
}) {
  let [drop, setDrop] = useState(false);
  return (
    <div className="mt-4 d-flex justify-content-center align-items-center  ">
      <div className="position-relative  w-50 me-0  ">
        <IoSearch id="iconS" className="position-absolute fs-4 " />
        <input
          onChange={(event) => onQueryChange(event.target.value)}
          value={query}
          type="text"
          placeholder="Search"
          className="searchInp w-100 p-2 ps-5 "
        />
      </div>
      <div className="position-relative  ms-0  ">
        <button
          onClick={() => setDrop(!drop)}
          className="btn btn-primary fs-5 ps-3 pe-3  "
        >
          Sort By
          <FaArrowDown className="fs-5 ms-2" />
        </button>
        <DropDown
          toggle={drop}
          sortBy={sortBy}
          onSortByChange={(mySort) => onSortByChange(mySort)}
          orderBy={orderBy}
          onOrderByChange={(myOrder) => onOrderByChange(myOrder)}
        />
      </div>
    </div>
  );
}
