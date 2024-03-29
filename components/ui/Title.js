import { Text, StyleSheet, Platform } from 'react-native';

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    // fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    // borderWidth: Platform.OS === 'ios' ? 0 : 2,
    borderWidth: Platform.select({ ios: 2, android: 0 }),
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});
