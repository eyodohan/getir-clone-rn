import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  headerMain: {
    height: height * 0.064,
    backgroundColor: '#f7d102',
  },
  headerOne: {
    width: '80%',
    backgroundColor: 'white',
    height: height * 0.064,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerOneView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    paddingLeft: 8,
    borderLeftColor: '#f3f2fd',
    borderLeftWidth: 2,
  },
  image: {
    width: 30,
    height: 30,
  },
  headerTwo: {
    width: '25%',
    height: height * 0.064,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
  },
});

export default styles;
