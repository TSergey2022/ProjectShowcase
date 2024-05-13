import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';

function GalleryFragment() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const images = [
    'https://via.assets.so/img.jpg?w=300&h=225',
    'https://via.assets.so/img.jpg?w=300&h=225',
    'https://via.assets.so/img.jpg?w=300&h=225',
    // Add more image URLs as needed
  ];

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <h2 className="text-center">Галерея</h2>
      <Row>
        {images.map((imageUrl, index) => (
          <Col key={index} className="mb-4">
            <Image
              className="cursor-pointer"
              src={imageUrl}
              alt={`Image ${index + 1}`}
              thumbnail
              fluid
              onClick={() => handleImageClick(imageUrl)}
            />
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Оригинальное изображение</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={selectedImage} alt="Full Screen Image" fluid />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default GalleryFragment;
