import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonStyle: {
    width: 'auto',
    height: 'auto',
    backgroundColor: 'transparent',
  },
  username: {color: COLORS.black, fontSize: 16, fontWeight: '700'},
  comment: {color: COLORS.black, fontSize: 16},
});

export default styles;
