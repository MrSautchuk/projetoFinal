//Importando a biblioteca do React, o hook useState, a biblioteca do modal e os estilos
import React, { useState } from "react";
import Modal from "react-modal";
import "../STYLES/card.css";
import "../STYLES/gallery.css";

Modal.setAppElement("#root");

//criando uma constant Card para armazenar os dados que serão recebidos atraves de uma função
const Card = function ({ data }) {
  //criando constantes para aberuta do modal e da imagem, tambem uma função para que vai alterar o valor das constantes atravez do usestate
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  //Verificamos se !data e !data.attributes são verdadeiros, se não é exibido uma div com dados nao disponiveis
  if (!data || !data.attributes) {
    return <div className="card hide">Dados não disponíveis.</div>;
  }

  //data.atributes é desestruturado e seus dados sao salvos em variaveis
  const {
    title,
    description,
    director,
    genre,
    rating,
    releaseDate,
    poster,
    gallery,
  } = data.attributes;
  console.log(data.attributes);

  //openModal recebe uma funçao com parametro que vai ser a url da imagem, define a url da umagem para ser apresentada no modal atravez do setCurrentImage e define setModalIsOpen como true para mostrar o modal
  const openModal = function (image) {
    //console.log("Abrindo modal com imagem:", image);
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  //closeModal recebe uma função que define setModalIsOpen como false para deixar de exibir o modal
  const closeModal = function () {
    //console.log("Fechando modal");
    setModalIsOpen(false);
  };

  return (
    //aqui esta sendo retornado todo o html do card que faz o uso das variaveis adquiridas pelo data.atributes
    <div className="card">
      <h3>{title || "Título não disponível"}</h3>
      {poster && (
        <img
          src={poster}
          alt={`${title || "Sem título"} poster`}
          className="poster"
        />
      )}
      <p>
        <strong>Diretor:</strong> {director || "Desconhecido"}
      </p>
      <p>
        <strong>Gênero:</strong> {genre || "Desconhecido"}
      </p>
      <p>
        <strong>Data de Lançamento:</strong> {releaseDate || "Indisponível"}
      </p>
      <p>
        <strong>Avaliação:</strong> {rating || "N/A"}
      </p>
      <p>
        <strong>Descrição:</strong> {description || "Descrição não disponível."}
      </p>
      {/*Verificamos se gallery esta recebendo algo, caso sim, vamos retornar uma div*/}
      {gallery && gallery.length > 0 ? (
        <div className="gallery">
          {/* as imagens são mapeadas e a função retorna um elemento img pra cada uma delas */}
          {gallery.map(function (image, index) {
            return (
              <img
                key={index} //é criada uma chave com base no indice da imagem
                src={image} //url da imagem
                alt={`${title || "Sem título"} gallery ${index + 1}`} //texto aternativo
                //função para abrir o modal da exibição da imagem
                onClick={function () {
                  openModal(image);
                }}
                className="gallery-image"
              />
            );
          })}
        </div>
      ) : (
        //caso de algum erro ou esteja faltando imagens no serividor sera exibida uma mensagem
        <p>Nenhuma imagem disponível na galeria.</p>
      )}

      {/*Logica do modal*/}
      <Modal
        isOpen={modalIsOpen} //Define se o modal esta aberto
        onRequestClose={closeModal} //chama a função para fechar o modal
        className="modal" //estilos do modal
        overlayClassName="overlay" //css do overlay
      >
        {/*Botao para fechar o modal*/}
        <button onClick={closeModal} className="close-button">
          <strong>X</strong>
        </button>
        {/*imagem exibida dentro do modal*/}
        <img src={currentImage} alt="Imagem ampliada" className="modal-image" />
      </Modal>
    </div>
  );
};

//exporta o componente
export default Card;
