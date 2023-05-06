import { View, Text, Dimensions, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import styles from '../Styles';

interface Props {
    formData: any;
    setFormData: any;
}

const One: React.FC<Props> = props => {
    const { formData, setFormData} = props;
    const [title, setTitle] = useState('');


    useEffect(() => {

        setTitle(formData[0].title);

    }, [])


 //   const titleRef = useRef(null);
    const changeValue = (value) => {
        setFormData(prevState => [{
            ...prevState[0], // Copy the existing object
            title: value,
        }]
        )
      //      titleRef.current.focus();
    }

    return (

        <>
            <ScrollView style={styles.ph15}>
                <View style={styles.pt10}>
                    <Text style={[styles.largeLabel, styles.mb5]}>Create a title for your listing</Text>
                    <Text style={[styles.tinyLabel, styles.mb20]}>A title that speaks volume, highlighting 
                    what makes your place special</Text>
                    <View style={[styles.drop]}>
                        <TextInput
                       // ref={titleRef}
                            style={styles.text}
                            placeholder="Title"
                            placeholderTextColor={'#808080'}
                            value={title}
                            onChangeText={(text) => {
                               setTitle(text);
                               changeValue(text);
                            }}
                           // onEndEditing={changeValue}

                        />
                    </View>
                    <Text style={[styles.tinyLabel, styles.mb40]}>e.g Cosy 2 bedroom smart home</Text>

                </View>
            </ScrollView>


        </>
    )
}

export default One;