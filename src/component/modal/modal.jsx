import { useState } from "react";
import Modal from "./index.jsx";
import "./index.css";

const ComponentModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container">
      <button onClick={() => setOpen(true)}>Open</button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        Hello
      </Modal>
    </div>
  );
};

export default ComponentModal;
