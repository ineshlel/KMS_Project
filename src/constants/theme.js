import {Dimensions} from 'react-native';
const{width,height}=Dimensions.get("window");

export const COLORS={
    purple:'#014C78',
    //orange:'#F26E11',
    orange:'#f6a150',
    blue:'#4592F2',
    green:'#008C80',
    grey:'#D9D9D9',
    blueClair:'#00C5D4',
}

export const FONTS={
  
    tabheader:{fonFamily:"Cairo-SemiBold",fontSize:18}
}

const appTheme={COLORS,FONTS}
export default appTheme;
