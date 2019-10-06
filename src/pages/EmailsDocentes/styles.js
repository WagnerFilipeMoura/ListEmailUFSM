import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: true,
})`
  align-self: stretch;
`

export const List = styled.View`
  padding: 5px;
  margin: 5px;
  background-color: #FFF;
  border-radius: 10px;
  height: 65px;
`
export const TextName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #3c577c
`
export const TextEmail = styled.Text`
  font-size: 15px;
  color: #49b1be
`
