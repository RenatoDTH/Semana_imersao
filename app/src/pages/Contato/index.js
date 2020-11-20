import React, { useCallback, useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Alert, ActivityIndicator } from 'react-native';
import {
  Container,
  TitleInput,
  InputForm,
  BtnSubmitForm,
  TxtSubmitForm,
  TitleRequired,
  LoadingArea,
} from './styles';
import api from '../../services/api';

const Contato = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const emailInputRef = useRef(null);
  const subjectInputRef = useRef(null);
  const contentInputRef = useRef(null);

  const { navigate } = useNavigation();

  const handleSubmitContact = useCallback(async () => {
    setLoading(true);
    await api
      .post('/contato', { name, email, subject, content })
      .then((response) => {
        Alert.alert('', response.data.message);
        setLoading(false);
        navigate('Home');
      })
      .catch((err) => {
        if (err) {
          Alert.alert('', err.data.message);
        } else {
          Alert.alert(
            '',
            'Mensagem de contato não cadastrada com sucesso, tente mais tarde!',
          );
        }
        setLoading(false);
      });
  }, [name, email, subject, content, navigate]);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <TitleInput>* Nome:</TitleInput>
        <InputForm
          placeholder="Nome completo"
          autoCorrect={false}
          value={name}
          editable={!loading}
          returnKeyType="next"
          onSubmitEditing={() => {
            emailInputRef.current.focus();
          }}
          onChangeText={(text) => setName(text)}
        />

        <TitleInput>* E-mail:</TitleInput>
        <InputForm
          placeholder="E-mail"
          autoCorrect={false}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          editable={!loading}
          returnKeyType="next"
          ref={emailInputRef}
          onSubmitEditing={() => {
            subjectInputRef.current.focus();
          }}
          onChangeText={(text) => setEmail(text)}
        />

        <TitleInput>* Assunto:</TitleInput>
        <InputForm
          placeholder="Assunto da mensagem"
          autoCorrect={false}
          value={subject}
          editable={!loading}
          returnKeyType="next"
          ref={subjectInputRef}
          onSubmitEditing={() => {
            contentInputRef.current.focus();
          }}
          onChangeText={(text) => setSubject(text)}
        />

        <TitleInput>* Conteúdo:</TitleInput>
        <InputForm
          placeholder="Conteúdo da mensagem"
          autoCorrect={false}
          value={content}
          editable={!loading}
          returnKeyType="send"
          ref={contentInputRef}
          onSubmitEditing={handleSubmitContact}
          onChangeText={(text) => setContent(text)}
        />

        <TitleRequired>* Campo Obrigatório</TitleRequired>
        <BtnSubmitForm disabled={loading} onPress={handleSubmitContact}>
          <TxtSubmitForm>Cadastrar</TxtSubmitForm>
        </BtnSubmitForm>

        {loading && (
          <LoadingArea>
            <ActivityIndicator size="large" color="#fff" />
          </LoadingArea>
        )}
      </Container>
    </ScrollView>
  );
};

export default Contato;
