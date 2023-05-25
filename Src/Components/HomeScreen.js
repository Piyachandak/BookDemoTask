import React, { useEffect, useState } from 'react';
import {
    View, Text, SafeAreaView, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions
} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { getCatgoryList } from '../../Redux/Actions/CategoryAction';
import { getbooks } from '../../Redux/Actions/BookAction';
import DropDownPicker from 'react-native-dropdown-picker';
import SearchBox from '../Common/SearchBox';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const bookReducerData = useSelector(state => state.BookReducer)
    const categoryReducerData = useSelector(state => state.CategoryReducer)
    const [bookData, setBookData] = useState([]);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("Select Category");
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState(null);

    const setSearchValue = value => {
        if ((value.length >= 3)) {
            setSearch(value);
        } else
            setSearch(null)
    };


    useEffect(() => {
        dispatch(getCatgoryList());
        callBookApi(search, null)

    }, [])
    useEffect(() => {
        callBookApi(search, value)

    }, [search, value])
    useEffect(() => {
        setBookData(bookReducerData.bookResponse)

    }, [bookReducerData.bookResponse])
    useEffect(() => {
        if (categoryReducerData.categoryResponse != null) {
            let newArray = [];
            for (i of categoryReducerData.categoryResponse) {

                newArray.push(i);
            }
            setItems(newArray);
        }
    }, [categoryReducerData.categoryResponse]);

    function onPressFunction(item, value) {
        setValue(item);
        setOpen(value);
        callBookApi(search, item)
    }
    function callBookApi(string, cat) {
        dispatch(getbooks(string, cat))
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.mainContainer}>
                <SearchBox
                    setSearchValue={setSearchValue}
                />
                <DropDownPicker
                    style={styles.dropdownViewStyle}
                    placeholder={value}
                    placeholderStyle={{ color: 'black' }}
                    listMode="MODAL"
                    dropDownContainerStyle={styles.dropDownContainerStyle}
                    renderListItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                id={item.items}
                                onPress={() => {
                                    onPressFunction(item, false)

                                }}
                                style={styles.cellStyle}
                                key={index}
                            >
                                <Text style={styles.cellTextStyle}>{item}</Text>
                            </TouchableOpacity>
                        );
                    }}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    zIndex={100}
                />
                <FlatList
                    data={bookData}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.bookContainer}
                            onPress={() => {
                                navigation.navigate('BookDetails', { bookitem: item })
                            }}
                        >
                            <Image
                                style={{ height: 100, width: 100 }}
                                source={{ uri: item?.volumeInfo?.imageLinks?.smallThumbnail }}
                            />
                            <View style={{ flexShrink: 1 }}>
                                <Text style={[styles.textStyle, { fontSize: 17, color: 'black' }]}>{item.volumeInfo.title}</Text>
                                <Text style={[styles.textStyle, { color: 'gray',marginVertical:5 }]}>Author:{item.volumeInfo.authors}</Text>
                                <Text style={[styles.textStyle, { fontSize: 12, marginTop: 10, color: 'black' }]}>Publisher:{item.volumeInfo.publisher}</Text>

                            </View>
                        </TouchableOpacity>
                    )}
                />

            </View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#ECEFF1'
    },
    bookContainer: {
        flexDirection: 'row',
        margin: 10,
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    dropdownViewStyle: {
        backgroundColor: 'white',
        margin: 10,
        // marginHorizontal: 20,
        alignSelf: 'center',
        borderColor: '#fff',
        color: 'black',
        width: Dimensions.get('screen').width - 20
    },
    dropDownContainerStyle: {
        marginVertical: 10,
        paddingVertical: 4,
        borderColor: '#fff',
    },
    cellStyle: {
        padding: 8,
        marginVertical: 4,
    },
    cellTextStyle: {
        color: '#000',
        fontSize: 14,
        textTransform: 'capitalize',
        fontWeight: '600',
    },
    textStyle: {
        flexShrink: 1,
        flexWrap: 'wrap',
        marginHorizontal: 5,
        fontWeight: 'bold'
    }
})

export default HomeScreen;