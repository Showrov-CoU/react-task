import axios from "axios";

import { useEffect, useState } from "react";

const UsContactsModal = ({ showModal2, handleClose2, handleShow2 }) => {
  const [usContactsData, setUsContactsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [onlyEven, setOnlyEven] = useState(false);
  //const [onlyEvenData, setOnlyEvenData] = useState([]);

  useEffect(() => {
    if (showModal2) {
      fetchUsContacts();
    }
    // console.log(allContactsData);
  }, [showModal2]);

  const fetchUsContacts = async () => {
    try {
      if (page <= 2) {
        const res = await axios.get(
          `https://contact.mediusware.com/api/country-contacts/United%20States/?page=${page}`
        );
        const newData = res.data.results;
        //   console.log(newData);
        setUsContactsData((prevData) => [...prevData, ...newData]);
        setPage((prevPage) => prevPage + 1);
      }

      //console.log(res.data.results);
    } catch (error) {
      console.log("Fetch Problem Occur in US Contacts Data");
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = (e) => {
    if (
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight <= 1 &&
      !loading
    ) {
      fetchUsContacts();
    }
  };

  const handleCheckboxChange = (e) => {
    setOnlyEven(e.target.checked);
    // console.log("thus", onlyEven);
  };

  return (
    <div>
      {showModal2 && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: "block" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">US Contacts</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose2}
                ></button>
              </div>
              <div
                className="modal-body"
                style={{ height: "200px", overflowY: "scroll" }}
                onScroll={handleScroll}
              >
                {!onlyEven
                  ? usContactsData.map((item, index) => (
                      <p key={index}>
                        ID:{item.id} &nbsp;&nbsp; CountryName:{" "}
                        {item.country.name}
                      </p>
                    ))
                  : usContactsData
                      .filter((item) => item.id % 2 == 0)
                      .map((item, index) => (
                        <p key={index}>
                          ID:{item.id} &nbsp;&nbsp; CountryName:{" "}
                          {item.country.name}
                        </p>
                      ))}
              </div>
              <div className="modal-footer flex flex-row-reverse align-align-items-center justify-content-between">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose2}
                >
                  Close
                </button>
                <div>
                  <input
                    type="checkbox"
                    checked={onlyEven}
                    onChange={handleCheckboxChange}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsContactsModal;
