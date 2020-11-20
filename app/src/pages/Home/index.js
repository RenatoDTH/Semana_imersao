import React, { useCallback, useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Text, ActivityIndicator } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  Container,
  ContentHome,
  RowDataHome,
  DataIcon,
  DataHome,
  ViewContato,
  LoadingArea,
} from './styles';
import api from '../../services/api';

const Home = () => {
  const [dataHome, setDataHome] = useState('');
  const [loading, setLoading] = useState(false);

  const { navigate } = useNavigation();

  const getDataHome = async () => {
    setLoading(true);
    try {
      const response = await api.get('/home');
      setDataHome(response.data.home);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getDataHome();
    }, []),
  );

  const handleNavigateToContact = useCallback(() => {
    navigate('Contato');
  }, [navigate]);

  return (
    <Container>
      <ContentHome onPress={handleNavigateToContact}>
        <RowDataHome>
          <DataIcon>
            <FontAwesome5 name={dataHome.serUmIcone} size={30} color="#fff" />
          </DataIcon>
          <DataHome>{dataHome.serUmTitulo}</DataHome>
          <ViewContato>
            <MaterialCommunityIcons
              name="greater-than"
              size={30}
              color="#fff"
            />
          </ViewContato>
        </RowDataHome>
        <RowDataHome>
          <Text>{dataHome.serUmDesc}</Text>
        </RowDataHome>
      </ContentHome>

      <ContentHome onPress={handleNavigateToContact}>
        <RowDataHome>
          <DataIcon>
            <FontAwesome5 name={dataHome.serDoisIcone} size={30} color="#fff" />
          </DataIcon>
          <DataHome>{dataHome.serDoisTitulo}</DataHome>
          <ViewContato>
            <MaterialCommunityIcons
              name="greater-than"
              size={30}
              color="#fff"
            />
          </ViewContato>
        </RowDataHome>
        <RowDataHome>
          <Text>{dataHome.serDoisDesc}</Text>
        </RowDataHome>
      </ContentHome>

      <ContentHome onPress={handleNavigateToContact}>
        <RowDataHome>
          <DataIcon>
            <FontAwesome5 name={dataHome.serTresIcone} size={30} color="#fff" />
          </DataIcon>
          <DataHome>{dataHome.serTresTitulo}</DataHome>
          <ViewContato>
            <MaterialCommunityIcons
              name="greater-than"
              size={30}
              color="#fff"
            />
          </ViewContato>
        </RowDataHome>
        <RowDataHome>
          <Text>{dataHome.serTresDesc}</Text>
        </RowDataHome>
      </ContentHome>

      {loading && (
        <LoadingArea>
          <ActivityIndicator size="large" color="#fff" />
        </LoadingArea>
      )}
    </Container>
  );
};

export default Home;
