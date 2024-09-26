import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  initialsContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.redAjax,
    marginHorizontal: 12,
    overflow: 'hidden',
  },
  initialsText: {
    textAlignVertical: 'center',
    color: COLORS.white,
  },
});

export default styles;
