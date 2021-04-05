import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const Header = () =>{
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    return(
        <div className="form-group mx-sm-3 mb-2">
            <header className="App-header">
                <h1>Определение вида треугольника по заданным сторонам</h1>
                <Button type="primary" onClick={showModal}>
                    Информация 
                </Button>
                <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
                <hr/>
            </header>
        </div>
    )
}
export default Header