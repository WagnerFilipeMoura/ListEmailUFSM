import React, {useState} from 'react';
import { AsyncStorage, Alert } from 'react-native'

import Background from '../../../Components/Background'

import { Container, Input, ButtonSave, ButtonText } from './styles';

export default function AddEmail({ navigation }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  async function SalvarBanco() {
    if (name == '') {
      Alert.alert('Digite o nome')
      return null
    }

    if (email == '') {
      Alert.alert('Digite o email')
      return null
    }

    const dadosSalvos = await AsyncStorage.getItem('emails')

    let dataBase = JSON.parse(dadosSalvos);

    if( !dataBase ){
      dataBase = []
    }

    const id = dataBase.length + 1

    const dados =
      {
        id,
        name,
        email
      }

    dataBase.push(dados)

    AsyncStorage.setItem('emails', JSON.stringify(dataBase))

    Alert.alert('Salvo com sucesso')

    navigation.navigate('EmailsAcademicos', {id})
  }

  return (
    <Background>
      <Container>
        <Input
          placeholder={'Digite o nome'}
          onChangeText={setName}
        />

        <Input
          placeholder={'Digite o email'}
          onChangeText={setEmail}
        />

        <ButtonSave onPress={SalvarBanco}>
          <ButtonText>Salvar</ButtonText>
        </ButtonSave>

      </Container>
    </Background>
  );
}

AddEmail.navigationOptions = {
  title: 'Cadastrar Email'
}
