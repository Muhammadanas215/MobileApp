import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Header = (props) => {
    return (
        <View style={{ width: '100%', height: 55, paddingVertical: 10, alignItems: 'center', flexDirection: "row", paddingHorizontal: 3, backgroundColor: 'green' }}>
            {props.headerLeftIcon ? <TouchableOpacity style={{ flex: 0.1, justifyContent: 'center', paddingHorizontal: 8 }}>
                <Ionicons name="arrow-back" color='black' size={26} />
            </TouchableOpacity> : null}

            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', color: '#000', fontSize: 18, }}>{props.title}</Text>
            </View>

            {props.headerLeftIcon ? <View style={{ flex: 0.1, backgroundColor: 'red' }} /> : null}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})

