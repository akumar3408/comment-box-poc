import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  flatListContainer: {flexGrow: 0, marginBottom: 24},
  initialsContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.redAjax,
    marginLeft: 12,
    overflow: 'hidden',
  },
  initialsText: {
    textAlignVertical: 'center',
    color: COLORS.white,
  },
  replyContainer: {
    marginLeft: 60,
  },
  userCommentContainer: {
    flex: 1,
    marginTop: 12,
  },
  userContainer: {
    flexDirection: 'row',
  },
  activeCommentContainer: {
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
    alignSelf: 'flex-end',
  },
  inputStyle: {
    marginHorizontal: 24,
    width: 280,
    height: 60,
    alignSelf: 'center',
  },
  submitButton: {flex: 1, width: 70, marginTop: 12},
  imageContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -5,
    top: -5,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default styles;
