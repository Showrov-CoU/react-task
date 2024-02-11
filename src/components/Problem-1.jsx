import React, { useEffect, useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("All");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [tryToFilter, setTryToFilter] = useState(false);

  //   const handleClick = (val) => {
  //     setShow(val);
  //   };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
      setFilteredTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && status) {
      setTasks([...tasks, { name, status }]);
      setName("");
      setStatus("");
      //   console.log(name, status);
    }
  };

  const handleClick = (val) => {
    // console.log(val);
    setShow(val);

    let filtered = tasks;
    switch (val) {
      case "Active":
        filtered = tasks.filter((task) => task.status === "Active");
        break;
      case "Completed":
        filtered = tasks.filter((task) => task.status === "Completed");
        break;
      default:
        filtered = [
          ...tasks.sort((a, b) => {
            const statusPriority = {
              Active: 1,
              Completed: 2,
              Pending: 3,
              Archive: 4,
            };

            return statusPriority[a.status] - statusPriority[b.status];
          }),
        ];
        //console.log(tasks);
        break;
    }
    setFilteredTasks(filtered);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={handleSubmit}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status- Active/Completed/Pending/Archive"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "All" && "active"}`}
                type="button"
                onClick={() => {
                  handleClick("All");
                  setTryToFilter(true);
                }}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "Active" && "active"}`}
                type="button"
                onClick={() => {
                  handleClick("Active");
                  setTryToFilter(true);
                }}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "Completed" && "active"}`}
                type="button"
                onClick={() => {
                  handleClick("Completed");
                  setTryToFilter(true);
                }}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {tryToFilter
                ? filteredTasks.map((task, index) => (
                    <tr key={index}>
                      <td>{task.name}</td>
                      <td>{task.status}</td>
                    </tr>
                  ))
                : tasks.map((task, index) => (
                    <tr key={index}>
                      <td>{task.name}</td>
                      <td>{task.status}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
