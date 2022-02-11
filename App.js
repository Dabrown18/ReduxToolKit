import React, {useEffect, useState} from 'react';
import {
	Text,
	FlatList,
	SafeAreaView,
	View,
	Image,
	StyleSheet,
	TouchableOpacity,
	Modal,
	StatusBar,
	Pressable
} from 'react-native';
import axios from 'axios';
import { WebView } from 'react-native-webview';

const App = () => {
	const [employees, setEmployees] = useState([]);
	const [modalVisible, setModalVisible] = useState(false);
	const [uri, setUri] = useState('');

	useEffect(() => {
		axios.get('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=EWrmCqczT8LBAAVxuUxgP7mL8MbFVpkP')
			.then(({ data }) => {
				setEmployees(data.results);
			})
			.catch(error => alert(error.message));
	}, []);

	return (
		<SafeAreaView style={styles.safeAreaViewStyle}>
			<View style={styles.screenContainer}>
				<FlatList
					showsVerticalScrollIndicator={false}
					keyExtractor={((item, index) => index.toString())}
					data={employees}
					renderItem={({item}) => {
						return (
							<>
								<TouchableOpacity
									style={styles.cardStyle}
									onPress={() => {
										setUri(item.url);
										setModalVisible(!modalVisible);
									}}>
									<Image source={{uri: item.multimedia[0].url}} style={styles.imageStyle} />
									<View style={styles.articleContent}>
										<Text style={styles.title}>{item.title}</Text>
										<Text>{item.byline}</Text>
									</View>
								</TouchableOpacity>
							</>
						);
					}}
				/>
				<Modal
					animationType={'slide'}
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => setModalVisible(!modalVisible)}
				>
					<SafeAreaView style={{backgroundColor: 'black'}} />
					<StatusBar barStyle={'light-content'} />
					<View style={{flex: 1}}>
						<Pressable
							style={{backgroundColor: 'black', paddingLeft: 10, paddingBottom: 10}}
							onPress={() => setModalVisible(!modalVisible)}
						>
							<Text style={{color: 'white'}}>Close</Text>
						</Pressable>
						<WebView source={{ uri }} />
					</View>
				</Modal>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeAreaViewStyle: {
		flex: 1,
		backgroundColor: '#f2f2f2',
	},
	screenContainer: {
		paddingHorizontal: 20,
		backgroundColor: '#f2f2f2',
	},
	cardStyle: {
		marginVertical: 5,
		backgroundColor: 'white',
		borderRadius: 5,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	imageStyle: {
		width: '100%',
		height: 200,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
	},
	articleContent: {
		padding: 10,
	},
	title: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: 20,
		marginBottom: 10,
	},
});

export default App;
