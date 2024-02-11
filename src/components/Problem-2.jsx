import React, { useState } from "react";
import ContactsModal from "./ContactsModal";

const Problem2 = () => {
  //   const [isOpenModal, setIsOpenModal] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={handleShow}
          >
            All Contacts
          </button>
          <ContactsModal
            showModal={showModal}
            handleClose={handleClose}
            handleShow={handleShow}
          ></ContactsModal>

          {/* <button
            className="btn"
            onClick={() => {
              document.getElementById("my_modal_1").showModal();
              setIsOpenModal(true);
            }}
          >
            All Contacts
          </button>
          <ContactsModal
            type="All Contacts"
            id="my_modal_1"
            isOpenModal={isOpenModal}
            onClose={setIsOpenModal}
          ></ContactsModal> */}

          {/* Modal Of ALL Contacts */}

          <button className="btn btn-lg btn-outline-warning" type="button">
            US Contacts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
