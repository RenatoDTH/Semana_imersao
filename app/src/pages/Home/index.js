import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  Container,
  ContentHome,
  RowDataHome,
  DataIcon,
  DataHome,
  ViewContato,
} from './styles';

const Home = () => {
  const { navigate } = useNavigation();

  const handleNavigateToContact = useCallback(() => {
    navigate('Contato');
  }, [navigate]);

  return (
    <Container>
      <ContentHome onPress={handleNavigateToContact}>
        <RowDataHome>
          <DataIcon>
            <FontAwesome5 name="code" size={30} color="#fff" />
          </DataIcon>
          <DataHome>Serviço um</DataHome>
          <ViewContato>
            <MaterialCommunityIcons
              name="greater-than"
              size={30}
              color="#fff"
            />
          </ViewContato>
        </RowDataHome>
        <RowDataHome>
          <Text>Descrição</Text>
        </RowDataHome>
      </ContentHome>
    </Container>
  );
};

export default Home;
