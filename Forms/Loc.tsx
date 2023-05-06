import { View, Text, Dimensions, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState, useRef } from 'react';
import IconM from 'react-native-vector-icons/Ionicons';
import styles from '../Styles';

interface Props {
    formData: any;
    setFormData: any;
}

const Loc: React.FC<Props> = props => {
    const { formData, setFormData } = props;
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');


    useEffect(() => {

        setStreet(formData[0].location[0].street);
        setCity(formData[0].location[0].city);
        setState(formData[0].location[0].state);

    }, [])


    const changeStreet = (value) => {
        const updatedData = [...formData];
            updatedData[0].location[0].street = value;
            setFormData(updatedData);
    }

    
    const changeCity = (value) => {
        const updatedData = [...formData];
            updatedData[0].location[0].city = value;
            setFormData(updatedData);

    }

    
    const changeState = (value) => {
        const updatedData = [...formData];
            updatedData[0].location[0].state = value;
            setFormData(updatedData);
    }

    return (

        <>
            <ScrollView style={styles.ph15}>
                <View style={styles.pt10}>
                    <Text style={[styles.largeLabel, styles.mb5]}>Where is this apartment located?</Text>
                    <Text style={[styles.tinyLabel, styles.mb20]}>Guests will see exact location only after booking.</Text>
                    <View style={[styles.btn, styles.alignCenter, styles.Row, styles.mb20]}>
                        <IconM
                            name={'location'}
                            size={15}
                            color={'#343434'}
                            style={{ marginRight: 5 }}

                        />
                        <Text style={styles.userLabel}>Use current location</Text>
                    </View>

                    <Text style={[styles.userLabel, styles.mb5]}>Street</Text>
                    <View style={[styles.drop, styles.mb15]}>
                        <TextInput
                            style={styles.text}
                            placeholder=""
                            placeholderTextColor={'#808080'}
                            value={street}
                            onChangeText={(text) => {
                                setStreet(text)
                                changeStreet(text)
                            }}

                        />
                    </View>

                    <View style={styles.RowB}>
                        <View style={{width:'48%'}}>
                    <Text style={[styles.userLabel, styles.mb5]}>City</Text>
                    <View style={[styles.drop2, styles.mb15,]}>
                        <TextInput
                            style={styles.text}
                            placeholder=""
                            placeholderTextColor={'#808080'}
                            value={city}
                            onChangeText={(text) => {
                                setCity(text)
                                changeCity(text)
                            }}

                        />
                    </View>
                    </View>
                    
                    
                    <View style={{width:'48%'}}>
                    <Text style={[styles.userLabel, styles.mb5]}>State</Text>
                    <View style={[styles.drop2, styles.mb15,]}>
                        <TextInput
                            style={styles.text}
                            placeholder=""
                            placeholderTextColor={'#808080'}
                            value={state}
                            onChangeText={(text) => {
                                setState(text)
                                changeState(text)
                            }}

                        />
                    </View>
                    </View>
                    </View>


                    <Text style={[styles.userLabel, styles.mb5]}>Country</Text>
                    <View style={[styles.drop, styles.mb15, styles.bgGrey]}>
                        <View style={styles.text}> 
                    <Text style={[styles.userLabel]}>Nigeria</Text>
                    </View>
                    </View>


                </View>
            </ScrollView>


        </>
    )
}

export default Loc;