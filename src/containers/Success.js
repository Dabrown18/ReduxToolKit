import React, {useEffect, useState} from 'react';
import axios from 'axios';
import NYTimesArticle from '../components/NYTimesArticle';

const Success = () => {
  const [employees, setEmployees] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [uri, setUri] = useState('');

  useEffect(() => {
    axios.get('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=EWrmCqczT8LBAAVxuUxgP7mL8MbFVpkP')
      .then(({ data }) => {
        setEmployees(data.results);
      });
  }, []);

  return (
    <NYTimesArticle
      employees={employees}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      uri={uri}
      setUri={setUri}
    />
  );
};

export default Success;
