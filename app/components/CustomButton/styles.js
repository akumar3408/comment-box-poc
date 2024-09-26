import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: 312,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginRight: 10,
    height: 60,
    borderRadius: 8,
    backgroundColor: COLORS.greenBottle,
  },
  buttonText: {
    color: COLORS.grayText,
    fontSize: 14,
    fontWeight: '400',
  },
});

export default styles;
