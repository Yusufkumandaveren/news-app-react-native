import { SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions, } from 'react-native';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';
import NewsCard from './src/component/NewsCard';

export default function App() {
  const renderNews = ({item}) => <NewsCard news={item} />
  return (
    <SafeAreaView style={styles.container}>
      <FlatList ListHeaderComponent={()=>(<ScrollView horizontal showsHorizontalScrollIndicator={false}>
  {news_banner_data.map(bannerNews => (
    <Image
      style={styles.banner_image}
      source={{uri: bannerNews.imageUrl}}
      key={bannerNews.id}
    />
  ))}
</ScrollView>)}
        renderItem={renderNews}
        data={news_data}
        keyExtractor={item => item.u_id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
  },
});
