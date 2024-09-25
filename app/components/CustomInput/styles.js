import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: 312,
    padding: 10,
    height: 60,
    borderRadius: 8,
    backgroundColor: COLORS.greenBottle,
  },
  input: {
    height: 50,
    width: 250,
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    borderColor: COLORS.darkGray,
  },
});

export default styles;
