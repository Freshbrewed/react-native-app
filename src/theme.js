import { Platform, useWindowDimensions } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    appBar: '#F8F8FF'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    inputPlaceholder: 20,
    appBar: 30
  },
  fonts: { 
    font: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700',
    appBar: '900'
  },
  backgroundColor: {
    appBar: '#24292e'
  },
  paddingBottom: {
    appBar: 30
  },
  flexContainer: {
    display: 'flex',
  },
  flexItemRow: {
    flexDirection: 'row',
  },
  flexLastItemRow: {
   // flexGrow: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingBottom: 15
  },
  flexItemCol: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexShrink: 1,
    paddingLeft: 10
  },
  logo: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  languageDisplay: {
    borderWidth: 4,
    borderRadius: 4,
    margin: 5,
    borderColor: '#0366d6',
    backgroundColor: '#0366d6',
  },
  languageWrapper: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 10,
  },
  gitLink: {
    flexGrow: 1,
    padding: 15,
    borderRadius: 4,
    margin: 15,
    marginTop: 5,
    borderColor: '#0366d6',
    backgroundColor: '#0366d6',
  },
  separator: {
    height: 10,
    backgroundColor: "#e1e4e8"
  },
  ratingContainer: {
    borderRadius: 4,
    border: "4 solid #0366d6",
    padding: 10,
    borderColor: '#0366d6'
  }
};

export default theme;