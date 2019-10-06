import styled from 'styled-components/native'
import { BaseButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
`
export const Input = styled.TextInput`
  background-color: #fff;
  border-radius: 10px;
  margin-top: 10px;

  font-size: 16px;
  font-weight: bold;
`
export const ButtonSave = styled(BaseButton)`
  height: 40px;
  background: #3c577c;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
  margin-top: 15px;
`

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`
