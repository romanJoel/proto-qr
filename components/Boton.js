import React from "react";
import { TouchableOpacity, Text,} from "react-native";

const Boton = ({ onPress, text, navigate }) => {
    return(
        <TouchableOpacity
          onPress={onPress}
          style={{
            borderWidth: 2,
            borderColor: 'white',
            padding: 15,
            alignItems: 'center',
            alignContent: 'center',
            width: 300,
            height:100,
            borderRadius:35,
            margin:15
          }}
        >
            <Text
             style={{
                color:'white',
                fontSize:35,
             }}
            >{text}</Text>
        </TouchableOpacity>
    );
}

export default Boton;