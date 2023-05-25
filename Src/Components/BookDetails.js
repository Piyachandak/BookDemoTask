import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';

const BookDetails = ({ route }) => {
    const params = route.params;
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>
                <View style={[styles.mainContainer, {  margin: 10, }]}>
                    <View style={{ backgroundColor: 'white', margin: 10, padding: 10, borderRadius: 10 }}>
                        <Image
                            style={{ width: 200, height: 200,alignSelf:'center' }}
                            source={{ uri: params?.bookitem?.volumeInfo?.imageLinks?.thumbnail }}
                        />
                        <Text style={[styles.textStyle, { fontSize: 18, color: 'black', textAlign: 'center', fontStyle: "italic",marginVertical:5 }]}>{params.bookitem.volumeInfo.title}</Text>
                        <Text style={[styles.textStyle, { fontSize: 14, color: 'black',marginVertical:5 }]}>Publisher : {params.bookitem.volumeInfo.publisher}</Text>
                        <Text style={[styles.textStyle,{color:'gray'}]}>Category : {params.bookitem.volumeInfo.categories}</Text>
                        <Text style={[styles.textStyle, { color: 'red', fontSize: 16, margin: 10 }]}>Summary</Text>
                        <Text style={[styles.textStyle, { color: 'black' }]}>{params.bookitem.volumeInfo.description}</Text>
                    </View>
                    <Text style={[styles.textStyle, { color: 'black' }]}>Publish Date : {params.bookitem.volumeInfo.publishedDate}</Text>
                    <Text style={[styles.textStyle, { color: 'red', fontSize: 16, margin: 10 }]}>Author : {params.bookitem.volumeInfo.authors}</Text>
                    <Text style={[styles.textStyle, { color: 'blue' }]}>Sale Status:{params.bookitem.saleInfo?.saleability}</Text>


                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default BookDetails;
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#ECEFF1'
    },
    textStyle: {
        flexShrink: 1,
        flexWrap: 'wrap',
        marginHorizontal: 5,
        fontWeight: 'bold'
    }
})