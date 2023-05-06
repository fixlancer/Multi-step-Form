import { View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import styles from '../Styles';

interface Props {
    formData: any;
    setFormData: any;
}

const Person: React.FC<Props> = props => {
    const { formData, setFormData } = props;
    const [person, setPerson] = useState(0);
    const [room, setRoom] = useState(0);
    const [bed, setBed] = useState(0);
    const [bathroom, setBathroom] = useState(0);


    useEffect(() => {
        setPerson(formData[0].maxPerson);
        setRoom(formData[0].bedrooms);
        setBed(formData[0].beds);
        setBathroom(formData[0].bathrooms);
    }, [])


    const savePerson = (value) => {
        setFormData(prevState => [{
            ...prevState[0], // Copy the existing object
            maxPerson: value,
        }]
        )
    }

    const saveRoom = (value) => {
        setFormData(prevState => [{
            ...prevState[0], // Copy the existing object
            bedrooms: value,
        }]
        )
    }

    const saveBed = (value) => {
        setFormData(prevState => [{
            ...prevState[0], // Copy the existing object
            beds: value,
        }]
        )
    }

    const saveBath = (value) => {
        setFormData(prevState => [{
            ...prevState[0], // Copy the existing object
            bathrooms: value,
        }]
        )
    }



    return (

        <>

            <ScrollView style={styles.ph15}>
                <View style={styles.pt10}>
                    <Text style={[styles.largeLabel, styles.mb5]}>How many persons can your apartment accomodate?</Text>

                    <Text style={[styles.tinyLabel, styles.mb20]}>Make sure you have enough beds to accomodate them comfortably.</Text>

                    <View style={[styles.RowB, styles.mb30]}>
                        <View>
                            <Text style={[styles.userLabel, styles.pt5]}>Maximum Persons</Text>
                        </View>

                        <View style={styles.Row}>
                            <TouchableOpacity activeOpacity={0.7}
                                disabled={person === 0 ? true : false}
                                onPress={() => {
                                    setPerson(person - 1)
                                    savePerson(person - 1);
                                }}
                                style={{ opacity: person === 0 ? 0.4 : 1 }}>
                                <View style={styles.circlePlus2}>
                                    <Text style={[styles.circleLabel, styles.textCenter]}>-</Text>
                                </View>
                            </TouchableOpacity>

                            <Text style={[styles.userLabel, styles.pt5, styles.ph15]}>{person}</Text>

                            <TouchableOpacity activeOpacity={0.7}
                                onPress={() => {
                                    setPerson(person + 1)
                                    savePerson(person + 1);
                                }}>
                                <View style={styles.circlePlus2}>
                                    <Text style={[styles.circleLabel, styles.textCenter]}>+</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={[styles.RowB, styles.mb30]}>
                        <View>
                            <Text style={[styles.userLabel, styles.pt5]}>No. of Bedrooms</Text>
                        </View>

                        <View style={styles.Row}>
                            <TouchableOpacity activeOpacity={0.7}
                                disabled={room === 0 ? true : false}
                                onPress={() => {
                                    setRoom(room - 1)
                                    saveRoom(room - 1)
                                }}
                                style={{ opacity: room === 0 ? 0.4 : 1 }}>
                                <View style={styles.circlePlus2}>
                                    <Text style={[styles.circleLabel, styles.textCenter]}>-</Text>
                                </View>
                            </TouchableOpacity>

                            <Text style={[styles.userLabel, styles.pt5, styles.ph15]}>{room}</Text>

                            <TouchableOpacity activeOpacity={0.7}
                                onPress={() => {
                                    setRoom(room + 1)
                                    saveRoom(room + 1)
                                    }}>
                                    <View style={styles.circlePlus2}>
                                        <Text style={[styles.circleLabel, styles.textCenter]}>+</Text>
                                    </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={[styles.RowB, styles.mb30]}>
                        <View>
                            <Text style={[styles.userLabel, styles.pt5]}>No. of Beds</Text>
                        </View>

                        <View style={styles.Row}>
                            <TouchableOpacity activeOpacity={0.7}
                                disabled={bed === 0 ? true : false}
                                onPress={() => {
                                    setBed(bed - 1)
                                    saveBed(bed - 1)
                                }}
                                style={{ opacity: bed === 0 ? 0.4 : 1 }}>
                                <View style={styles.circlePlus2}>
                                    <Text style={[styles.circleLabel, styles.textCenter]}>-</Text>
                                </View>
                            </TouchableOpacity>

                            <Text style={[styles.userLabel, styles.pt5, styles.ph15]}>{bed}</Text>

                            <TouchableOpacity activeOpacity={0.7}
                                onPress={() => {
                                    setBed(bed + 1)
                                    saveBed(bed + 1)
                                }}>
                                <View style={styles.circlePlus2}>
                                    <Text style={[styles.circleLabel, styles.textCenter]}>+</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <Text style={[styles.tinyLabel, styles.mb10]}>Count bathrooms without shower as half</Text>

                    <View style={[styles.RowB, styles.mb20]}>
                        <View>
                            <Text style={[styles.userLabel, styles.pt5]}>No. of Bathrooms</Text>
                        </View>

                        <View style={styles.Row}>
                            <TouchableOpacity activeOpacity={0.7}
                                disabled={bathroom === 0 ? true : false}
                                onPress={() => {
                                    setBathroom(bathroom - 0.5)
                                    saveBath(bathroom - 0.5)
                                }}
                                style={{ opacity: bathroom === 0 ? 0.4 : 1 }}>
                                <View style={styles.circlePlus2}>
                                    <Text style={[styles.circleLabel, styles.textCenter]}>-</Text>
                                </View>  
                            </TouchableOpacity>

                            <Text style={[styles.userLabel, styles.pt5, styles.ph15]}>{bathroom}</Text>

                            <TouchableOpacity activeOpacity={0.7}
                                onPress={() => {
                                    setBathroom(bathroom + 0.5)
                                    saveBath(bathroom + 0.5)
                                }}>
                                <View style={styles.circlePlus2}>
                                    <Text style={[styles.circleLabel, styles.textCenter]}>+</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>



                </View>
            </ScrollView>


        </>
    )
}

export default Person;