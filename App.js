import React from 'react';
import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
const styles = StyleSheet.create({
  webView: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
});

const App = () => {
  return (
    <WebView
      source={{
        uri:
          'https://publish-p29443-e94130.adobeaemcloud.com/content/eyas-web/en/home.html',
      }}
      style={styles.webView}
    />
  );
};

export default App;
