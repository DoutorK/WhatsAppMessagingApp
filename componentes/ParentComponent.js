import React, { useState } from "react";
import { View, Button, Linking, Alert } from "react-native";
import ChildComponent from "./ChildComponent";

export default function ParentComponent(){
        const [number, setNumber] = useState('');
        const [message, setMessage] = useState('');

        const handleNumberchange = (text) => {
            setNumber(text);
        };
        
        const handleMessageChange = (text) => {
            setMessage(text);
        };
      
        const handleSend = () => {
            if(number.startsWith('55') && number.length >= 11){
                const whatsappUrl = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`;
                Linking.openURL(whatsappUrl);
            }else{
                Alert.alert('Número inválido! Por favor insira um número que comece com "55" e tenha pelo menos 11 caracteres.')
            }

          console.log('Número:', number);
          console.log('Mensagem:', message);
        };
      
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ChildComponent
              number={number}
              message={message}
              setNumber={setNumber}
              setMessage={setMessage}
            />
            <Button title="Enviar" onPress={handleSend} />
          </View>
        );
};
      
