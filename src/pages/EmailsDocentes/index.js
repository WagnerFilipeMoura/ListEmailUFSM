import React from 'react';
import { TouchableOpacity, Linking, FlatList } from 'react-native';

import Background from '../../Components/Background'

import { Container, List, Form, TextEmail, TextName } from './styles';

export default function EmailsDocentes({ navigation }) {
  const list = [
    {
      id: 1,
      name: 'Adriana Soares Pereira',
      email: 'adriana.pereira@ufsm.br'
    },
    {
      id: 2,
      name: 'Antonio Rodrigo Delepiane de Vit',
      email: 'rodrigodevit@inf.ufsm.br'
    },
    {
      id: 3,
      name: 'Cristiano Bertolini',
      email: 'cristiano.bertolini@ufsm.br'
    },
    {
      id: 4,
      name: 'Guilherme Bernardino da Cunha',
      email: 'guilherme@ufsm.br'
    },
    {
      id: 5,
      name: 'Igor Senger',
      email: 'igorsenger@ufsm.br'
    },
    {
      id: 6,
      name: 'Joel da Silva',
      email: 'joel.silva@ufsm.br'
    },
    {
      id: 7,
      name: 'Lorimar Francisco Munaretto',
      email: 'franciscomunaretto@gmail.com'
    },
    {
      id: 8,
      name: 'Nara Martini Bigolin',
      email: 'narabigolin@hotmail.com'
    },
    {
      id: 9,
      name: 'Patricia Rodrigues Fortes',
      email: 'patricia@ufsm.br'
    },
    {
      id: 10,
      name: 'Ricardo Tombesi Macedo',
      email: 'rmacedo1987@gmail.com'
    },
    {
      id: 11,
      name: 'Roberto Franciscatto',
      email: 'roberto.franciscatto@gmail.com'
    },
    {
      id: 12,
      name: 'Sidnei Renato Silveira',
      email: 'sidneirenato.silveira@gmail.com'
    },
    {
      id: 13,
      name: 'Solange de Lurdes Pertile',
      email: 'solangepertile@gmail.com'
    },
    {
      id: 14,
      name: 'Teresinha Leticia da Silva',
      email: 'leticiasilva.ufsm@gmail.com'
    }
  ]

  renderItem = ({item}) =>
  <TouchableOpacity
    onPress={() =>
      Linking.openURL(`mailto:${item.email}?subject=Digite o Assunto &body=Email enviado do app Emails SI`)}>
    <List>
      <TextName>{item.name}</TextName>
      <TextEmail>{item.email}</TextEmail>
    </List>
  </TouchableOpacity>

  return (
    <Background>
      <Container>
        <Form>
          <FlatList
            data={list}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItem}
            showsVerticalScrollIndicator={true}
          />
        </Form>
      </Container>
    </Background>
  );
}

EmailsDocentes.navigationOptions = {
  title: 'Emails Docentes'
}
