import React, { useState, useEffect} from 'react';
import { AsyncStorage, TouchableOpacity, Linking, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import Background from '../../Components/Background'

import { Container, Form, AddButton, BoxButton, List, TextEmail, TextName } from './styles';

export default function EmailsAcademicos({ navigation }) {
  const [dadosEmail, setDadosEmail] = useState([])
  const idNovoEmail = navigation.getParam('id')

  useEffect(() => {
    BuscaEmails()
  }, [idNovoEmail])

  async function BuscaEmails() {
    const dados = await AsyncStorage.getItem('emails')
    const emails = JSON.parse(dados) || []

    setDadosEmail(emails)
  }

  async function RemoveEmail(id) {
    const emails = dadosEmail.filter(email => email.id != id)

    await AsyncStorage.setItem('emails', JSON.stringify(emails))

    setDadosEmail(emails)
  }

  renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        Linking.openURL(`mailto:${item.email}?subject=Digite o Assunto &body=Email enviado do app Emails SI`)}
      onLongPress={() => RemoveEmail(item.id)}
    >
      <List>
        <TextName>{item.name}</TextName>
        <TextEmail>{item.email}</TextEmail>
      </List>
    </TouchableOpacity>
  )

  return (
    <Background>
      <Container>
        <Form>
          <FlatList
            data={dadosEmail}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItem}
            showsVerticalScrollIndicator={true}
          />
        </Form>

        <BoxButton>
          <AddButton onPress={() => navigation.navigate('AddEmail') }>
            <Icon name={'add'} size={45} color={'#fff'} />
          </AddButton>
        </BoxButton>
      </Container>
    </Background>
  );
}

EmailsAcademicos.navigationOptions = {
  title: 'Emails Acadêmicos'
}
