import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StatusBar,
    ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import styles from './Styles';
import Title from './Forms/Title';
import Person from './Forms/Person';
import Loc from './Forms/Loc';

const FormItem = ({ page, formData, setFormData, navigation}) => {
    switch (page) {
        case 0:
            return <Title formData={formData} setFormData={(item) => setFormData(item)} />
        case 1:
            return <Person formData={formData} setFormData={(item) => setFormData(item)} />
        case 2:
            return <Loc formData={formData} setFormData={(item) => setFormData(item)} />
        default:
            return <Title formData={formData} setFormData={(item) => setFormData(item)} />
    }
}

const NewListing = ({ route, navigation }) => {

    const [formData, setFormData] = useState([
        {
            title: '',
            maxPerson: 0,
            beds: 0,
            bedrooms: 0,
            bathrooms: 0,
            location: [
                {
                    street: '',
                    city: '',
                    state: '',
                    country: 'Nigeria',
                }
            ],
        }
    ])



    const [page, setPage] = useState(0);
    const [percent, setPercent] = useState(33.33);

    const handleNext = () => {
        setPage(page + 1);
        setPercent(percent + 33.33);
    }


    const handlePrev = () => {

        setPage(page - 1);
        setPercent(percent - 33.33);
    }


    return (

        <View style={[styles.container, styles.bgWhite]}>
            <SafeAreaView
                style={{
                    // height: height + StatusBar.currentHeight,
                    // width: width,
                    flex: 1,
                    backgroundColor: 'transparent',
                }}
                edges={['left', 'right', 'top']}>
                <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />

                <View style={[styles.newModalHeader, styles.RowB, styles.bgWhite]}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <IconM
                            name={'close-circle-outline'}
                            size={25}
                            color={'#343434'}
                            style={{ marginTop: 0, }} />

                    </TouchableOpacity>

                </View>


                <View style={[{ flex: 1, backgroundColor: '#fff', }]}>
                    
                <FormItem formData={formData} setFormData={setFormData} page={page} navigation={navigation} />

                </View>

            </SafeAreaView>

            <View>
                <View style={[styles.progressBar, { width: "" + percent + "%" }]} />
                <View style={[styles.pt10, styles.ph15, styles.bottomBar]}>
                    <View>

                        <View style={styles.RowB}>
                            {page > 0 ? (

                                <TouchableOpacity activeOpacity={0.7}
                                    onPress={() => handlePrev()}
                                    style={styles.Row}>
                                    <Icon
                                        name={'arrow-back-ios'}
                                        size={17}
                                        color={'#343434'}
                                        style={{ marginRight: 0, marginTop: 10 }}

                                    />
                                    <Text style={[styles.buttonLabel, styles.textDark, styles.pt10]}>Back</Text>
                                </TouchableOpacity>
                            ) : (<Text></Text>)}

                                <TouchableOpacity activeOpacity={0.7}
                                    onPress={() => handleNext()}
                                    style={styles.button}>
                                    <Text style={styles.buttonLabel}>{page === 2 ? 'Publish' : 'Next'}</Text>
                                </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>

        </View>

    );
};

export default NewListing;