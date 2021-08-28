import React from "react";
import { Dimensions, Modal, Share, View } from "react-native";
import { HStack, Text, Icon, Button } from "native-base";

const webViewHeight = Dimensions.get("window").height - 56;

export default function ModalC(props) {
  const handleClose = () => {
    return props.onClose();
  };

  const handleShare = () => {
    const { url, title } = props.articleData;
    message = `${title}\n\nRead More @${url}\n\nShared via RN News App`;
    return Share.share(
      { title, message, url: message },
      { dialogTitle: `Share ${title}` }
    );
  };
  const { showModal, articleData } = props;
  const { url } = articleData;

  return (
    <View>
      <Modal
        animationType="slide"
        transparent
        visible={showModal}
        onRequestClose={handleClose}
      >
        <HStack style={{ backgroundColor: "#009387" }}>
          <Button onPress={handleClose} transparent>
            <Icon name="close" style={{ color: "white", fontSize: 12 }} />
          </Button>

          <Text children={articleData.title} style={{ color: "white" }} />

          <Button onPress={handleShare} transparent>
            <Icon name="share" style={{ color: "white", fontSize: 12 }} />
          </Button>
        </HStack>
        {/*<Content contentContainerStyle={{ height: webViewHeight }}>
          <WebView
            source={{ uri: url }}
            style={{ flex: 1 }}
            onError={handleClose}
            startInLoadingState
            scalesPageToFit
          />
        {/*</Content>*/}
      </Modal>
    </View>
  );
}
