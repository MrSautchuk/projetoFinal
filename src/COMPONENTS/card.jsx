import React, { useState } from 'react';
import Modal from 'react-modal';
import '../STYLES/card.css';

const Card = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  if (!data || !data.attributes) {
    return <div className="card hide">Dados não disponíveis.</div>;
  }

  const { title, description, director, genre, rating, releaseDate, poster, gallery } = data.attributes;

  const openModal = function(image) {
    console.log("Abrindo modal com imagem:", image);
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  const closeModal = function() {
    console.log("Fechando modal");
    setModalIsOpen(false);
  };

  return (
    <div className="card">
      <h3>{title || 'Título não disponível'}</h3>
      {poster && <img src={poster} alt={`${title || 'Sem título'} poster`} className="poster" />}
      <p><strong>Diretor:</strong> {director || 'Desconhecido'}</p>
      <p><strong>Gênero:</strong> {genre || 'Desconhecido'}</p>
      <p><strong>Data de Lançamento:</strong> {releaseDate || 'Indisponível'}</p>
      <p><strong>Avaliação:</strong> {rating || 'N/A'}</p>
      <p><strong>Descrição:</strong> {description || 'Descrição não disponível.'}</p>
      {gallery && gallery.length > 0 ? (
        <div className="gallery">
          {gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${title || 'Sem título'} gallery ${index + 1}`}
              onClick={() => openModal(image)}
              className="gallery-image"
            />
          ))}
        </div>
      ) : (
        <p>Nenhuma imagem disponível na galeria.</p>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Imagem da Galeria"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-button">Fechar</button>
        <img src={currentImage} alt="Imagem ampliada" className="modal-image" />
      </Modal>
    </div>
  );
};

export default Card;
