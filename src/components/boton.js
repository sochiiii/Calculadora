import {TouchableOpacity, Text} from 'react-native';
 
export default function Button({texto, funcion, estilo, estilo_texto}){
    return(
        <TouchableOpacity
        style={estilo}
        onPress={funcion}>
            <Text
            style={estilo_texto}>
                {texto}
            </Text>
        </TouchableOpacity>
    )
}