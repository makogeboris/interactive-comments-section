import { useState } from "react";
import Container from "./components/Container";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <main className="px-4 py-8 sm:px-8 sm:py-16">
        <Container setIsModalOpen={setIsModalOpen} />
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default App;
