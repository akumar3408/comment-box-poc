import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    marginTop: 12,
  },
  flatListContentContainer: {
    flexGrow: 1,
  },
  deviceStyle: {
    color: COLORS.darkGray,
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 12,
  },
});

export default styles;
