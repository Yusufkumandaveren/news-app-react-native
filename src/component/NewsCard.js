import React from 'react'
import { Image, Text, View } from 'react-native';
import styles from './NewsCardStyle'


const NewsCard = ({ news }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: news.imageUrl }} style={styles.img} />
            <View styles={styles.body} >
                <Text styles={styles.title}>{news.title}</Text>
                <Text styles={styles.description}>{news.description}</Text>
                <Text styles={styles.author}>{news.author}</Text>
            </View>

        </View>
    );
};

export default NewsCard;