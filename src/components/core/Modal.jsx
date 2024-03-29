import React from 'react';
import {Modal} from 'react-native';

const ModalComp = props => {
  const {visible, onRequestClose, title, children, ...other} = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}
      {...other}>
      {children}
    </Modal>
  );
};

export default ModalComp;
