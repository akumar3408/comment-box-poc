import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    width: 312,
    borderRadius: 1,
    margin: 12,
    paddingHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 1.5,
  },
  buttonText: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '400',
    margin: 12,
    textAlignVertical: 'center',
  },
  initialsContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.redAjax,
    marginVertical: 12,
    overflow: 'hidden',
  },
  initialsText: {
    textAlignVertical: 'center',
    color: COLORS.white,
  },
});

export default styles;
