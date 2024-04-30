import {TextInput} from 'react-native';
 
export default function Button({TextColor,numero, valor, estilo, funcion}){
    return(
      <TextInput
        placeholderTextColor={TextColor}
        style={estilo}
        placeholder={numero}
        value={valor}
        onChangeText={funcion}
      />
    )
}