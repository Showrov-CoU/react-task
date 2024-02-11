import React, { useState } from "react";
import ContactsModal from "./ContactsModal";
import UsContactsModal from "./UsContactsModal";

const Problem2 = () => {
  //   const [isOpenModal, setIsOpenModal] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleClose2 = () => setShowModal2(false);
  const handleShow2 = () => setShowModal2(true);

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

          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={handleShow2}
          >
            US Contacts
          </button>
          <UsContactsModal
            showModal2={showModal2}
            handleClose2={handleClose2}
            handleShow2={handleShow2}
          ></UsContactsModal>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
