import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView, StyleSheet, BackHandler} from 'react-native';
import WebView from 'react-native-webview';

const App = () => {
  const webViewRef = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    const backAction = () => {
      if (canGoBack) {
        // @ts-ignore
        webViewRef.current.goBack();
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [canGoBack]);

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{uri: 'http://localhost:5173/'}} // localhost do not work now
        style={styles.webview}
        onNavigationStateChange={navState => setCanGoBack(navState.canGoBack)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;
