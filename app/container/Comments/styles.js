import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'space-between',
  },
  flatListContainer: {flexGrow: 1, marginBottom: 24},
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
  activeCommentContainer: {
    width: 280,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    paddingHorizontal: 12,
    paddingVertical: 18,
    backgroundColor: COLORS.greenBottle,
    borderTopLeftRadius: 35,
    borderBottomLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  activeCommentText: {
    color: COLORS.white,
    fontSize: 14,
  },
  flexRow: {
    flexDirection: 'row',
  },
  inputStyle: {
    marginHorizontal: 24,
    width: 280,
    height: 60,
    alignSelf: 'center',
  },
  submitButton: {width: 70, marginTop: 12},
  imageContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Adjust the image to fit within the bounds
  },
});

export default styles;
