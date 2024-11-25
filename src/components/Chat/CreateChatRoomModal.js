import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './CreateChatRoomModal.css';

const CreateChatRoomModal = ({ show, onClose, onCreate }) => {
  const [title, setTitle] = useState('');
  const [isCreated, setIsCreated] = useState(false); // 채팅방 생성 완료 상태

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCreate = () => {
    if (title.trim() !== '') {
      onCreate(title);
      setTitle(''); // 제목 초기화
      setIsCreated(true); // 채팅방 생성 완료 모달 표시
    } else {
      alert('채팅방 제목을 입력해주세요.');
    }
  };

  const handleCloseCreatedModal = () => {
    setIsCreated(false);
    window.location.reload(); // 새로고침
  };

  return (
    <>
      <Modal show={show} onHide={onClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">채팅방 개설하기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="chatroomTitle" className="text-center">
              <Form.Label className="chatroom-label">제목</Form.Label>
              <Form.Control
                type="text"
                placeholder="채팅방 제목을 입력하세요"
                value={title}
                onChange={handleTitleChange}
                className="text-center"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button className="button-color" onClick={handleCreate} size="lg">
            생성
          </Button>
          <Button variant="secondary" onClick={onClose} size="lg" className="ml-2">
            취소
          </Button>
        </Modal.Footer>
      </Modal>

      {/* 채팅방 생성 완료 모달 */}
      <Modal show={isCreated} onHide={() => setIsCreated(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">채팅방 생성 완료</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p className="success-text">채팅방 생성이 완료되었습니다.</p>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button className="button-color" onClick={handleCloseCreatedModal} size="lg">
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateChatRoomModal;
