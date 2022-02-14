import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NYTimesArticle from '../components/NYTimesArticle';
import { fetchArticles } from '../redux/features/articles/articlesSlice';

const Success = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [uri, setUri] = useState('');
  const nytArticles = useSelector((state) => state.articles.data);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <NYTimesArticle
      employees={nytArticles}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      uri={uri}
      setUri={setUri}
    />
  );
};

export default Success;
