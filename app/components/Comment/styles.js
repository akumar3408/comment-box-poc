import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexWrap: 'wrap',
    flexDirection: 'row',
  },
  buttonStyle: {
    width: 'auto',
    height: 'auto',
    backgroundColor: 'transparent',
  },
  username: {color: COLORS.black, fontSize: 16, fontWeight: '700'},
  comment: {color: COLORS.black, fontSize: 16, flexWrap: 'wrap'},
});

export default styles;
