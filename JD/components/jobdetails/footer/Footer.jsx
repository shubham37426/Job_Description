import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";

const Footer = ({ url,refetch }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}  onPress={()=>refetch()}>
        <Image
          source={icons.heartOutline}
          resizeMode='contain'
          style={styles.likeBtnImage}
         
        />
        
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.applyBtn}
      onPress={()=> Linking.openURL(url)} >
        <Text style={styles.applyBtnText}>Apply for this job</Text>
        </TouchableOpacity>

      </View>
      );
};

export default Footer;