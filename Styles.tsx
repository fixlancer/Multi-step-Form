import { StyleSheet, Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('screen');


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7E178E',
    width: '100%',
    height: height,
    flex: 1,
  },

  lineBottom: {
    borderBottomColor: '#ddd',
    paddingVertical: 10,
    marginBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },


  newModalHeader: {
    width: '100%', height: 'auto', paddingTop: 20, 
    paddingBottom: 10, marginBottom: 10, paddingHorizontal: 15, 
  },


  modalLine: {
    height: 4, width: 30, borderRadius: 8, backgroundColor: '#ddd', marginTop: 10, marginBottom: 15, alignSelf: 'center'
  },

 
  midBg: {
    paddngTop: 0,
    paddingHorizontal: 0, width: '100%', height: '100%',
    backgroundColor: '#fff',
  },


  Row: {
    flexDirection: 'row',
  },

  RowB: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },


  bgWhite: {
    backgroundColor: '#fff',
  },

  bgGrey: {
    backgroundColor: '#f2f2f2',
  },


  alignCenter: {
    justifyContent: 'center', alignItems: 'center'
  },

  textCenter: {
    textAlign: 'center',
  },

  textWhite: {
    color: '#fff',
  },

  textDark: {
    color: '#343434'
  },

  textGrey: {
    color: '#808080',
  },

  textGreen: {
    color: '#1cc88a',
  },

  textPurple: {
    color: '#7E178E'
  },

  /*PADDING & MARGN **/

  mb40: {
    marginBottom: 40,
  },

  mb30: {
    marginBottom: 30,
  },

  mb20: {
    marginBottom: 20,
  },
  mb15: {
    marginBottom: 15,
  },

  mb10: {
    marginBottom: 10,
  },

  mb5: {
    marginBottom: 5,
  },

  mt5: {
    marginTop:5,
  },

  mr10: {
    marginRight: 10
  },

  mr5: {
    marginRight: 5
  },

  newPH: {
    width: width - 68
  },

  pt30: {
    paddingTop: 30,
  },

  pt5: {
    paddingTop: 5
  },

  pb5: {
    paddingBottom: 5,
  },
  ph15: {
    paddingHorizontal: 15
  },
  ph5: {
    paddingHorizontal:5,
  },

  pt10: {
    paddingTop: 10,
  },

  pt15: {
    paddingTop: 15,
  },

  pt20: {
    paddingTop: 20,
  },

  pl15: {
    paddingLeft: 15,
  },

  pl10: {
    paddingLeft: 10,
  },

  pl5: {
    paddingLeft: 5,
  },

  /* END OF PADDING **/




  /*** TEXT LABEL */

  largeLabel: {
    fontSize: 17,
    textAlign: 'left',
    color: '#343434',
    marginTop: 2,
    marginBottom: 0,
    fontFamily: 'Nunito-SemiBold',
  },

  largeLabel2: {
    fontSize: 15,
    textAlign: 'left',
    color: '#343434',
    marginBottom: 15,
    fontFamily: 'Nunito-SemiBold',
  },

  userLabel: {
    fontSize: 13,
    textAlign: 'left',
    color: '#343434',
    fontFamily: 'Nunito-SemiBold',
  },

  subLabel: {
    fontSize: 13,
    textAlign: 'left',
    color: '#343434',
    marginTop: 2,
    fontFamily: 'Nunito-Regular'
  },

  tinyLabel: {
    fontSize: 12,
    textAlign: 'left',
    color: '#808080',
    marginTop: 2,
    marginBottom: 5,
    fontFamily: 'Nunito-Regular',
    width: (width - 65) / 1,
  },


  tinyDark: {
    fontSize: 12,
    textAlign: 'left',
    color: '#343434',
    fontFamily: 'Nunito-Regular',
    width: (width - 65) / 1,
  },


  /** END OF TEXT LABEL */


  circleLabel: {
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#343434',
    fontFamily: 'Nunito-Regular',
  },

  circlePlus2: {
    width: 27,
    height: 27,
    padding: 0,
    marginHorizontal: 1,
    justifyContent: 'center',   
    alignItems:'center',
    borderRadius: 100,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#808080',
  },


  drop: {
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    borderRadius: 10, alignItems: 'center',
    paddingHorizontal: 15,
    height: 40,
    marginTop: 0,
    marginBottom: 10,
  },

  drop2: {
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    borderRadius: 10, alignItems: 'center',
    paddingHorizontal: 15,
    height: 40,
    marginTop: 0,
    marginBottom: 10,
  },

  text: {
    color: '#343434',
    alignSelf: 'center',
    padding: 10,
    paddingLeft: 0,
    fontSize: 13,
    fontFamily: 'Nunito-Regular',
    width: '100%'
  },

  hr: {
    borderBottomColor: '#ddd', borderBottomWidth: StyleSheet.hairlineWidth
  },

  progressBar: {
    height: 2,
    backgroundColor: '#7E178E',
    position: 'absolute',
    top: -1,
    left: 0,
    zIndex: 999,
    maxWidth: '100%',
  },

  bottomBar: {
    backgroundColor: '#fff',
    // paddingBottom: Platform.OS === 'ios' ? 40 : 10,
    borderTopColor: '#ddd',
    borderTopWidth: StyleSheet.hairlineWidth,
    height: Platform.OS === 'ios' ? 100 : 65
  },

  button: {
    backgroundColor: '#7E178E',
    // borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    marginTop: 0,
    width: 'auto',
    marginRight: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 'auto',
    justifyContent: 'center', alignItems: 'center',
  },

  buttonLabel: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },

  
  btn: {
    backgroundColor: '#fff', borderRadius: 10, padding: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#343434',
    width: 180,
  },

});


export default styles;
