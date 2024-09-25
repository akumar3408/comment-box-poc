import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 24,
  },
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputLabel: {
    textAlignVertical: 'center',
    color: COLORS.black,
  },
  buttonStyle: {
    marginTop: 60,
    alignSelf: 'center',
  },
});

export default styles;
