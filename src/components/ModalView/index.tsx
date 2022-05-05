import React from "react";
import { ReactNode } from "react";
import {
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Background from "../Background";
import { styles } from "./styles";

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void
};

const ModalView = ({ children, closeModal, ...rest }:Props) => {
  return (
    <Modal transparent animationType="slide" {...rest}
    statusBarTranslucent>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalView;
