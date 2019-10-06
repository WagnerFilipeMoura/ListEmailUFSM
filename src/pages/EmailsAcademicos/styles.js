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

export const BoxButton = styled.View`
  /* align-items: flex-end;
  top: 80%; */
  width: 100%;
  height: 100%;
  position: absolute;
  top: 90%;
  margin-left: 83%;
`
export const AddButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: #C5626B;
  border-radius: 50px;

  align-items: center;
  justify-content: center;
`
