/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import colors from '../../themes/colors';
// import styles from '../../themes/styles';
import { NaviProps } from '../../Model/NaviProps';
// import ASSETS from '../../assets/ASSETS';


interface Props extends NaviProps{
    onPress: any,
    item: {
        url: any,
        showUrl: boolean,
        isSender: boolean,
        messengers: string,
        timestamp: number,
    }
}

function MessageItem(props: Props) {

    const { onPress } = props.onPress;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { url, isSender, messengers, timestamp, showUrl } = props.item;

    return ( isSender ?
        <TouchableOpacity
            onPress={onPress}
            style={style.messageUserReceived}
        >
            {showUrl ?
                <Image
                    source={url}
                    style={style.imageUser}
                />
                :
                <View style={style.imageNull}/>
            }
            <View style={style.messageViewReceived}>
                <View>
                    <Text style={style.messageReceived}>{messengers}</Text>
                </View>
            </View>
        </TouchableOpacity>
        :
        <TouchableOpacity
            onPress={onPress}
            style={style.messageUserSent}
        >
            <View style={style.messageViewSent}>
                <View>
                    <Text style={style.messageSent}>{messengers}</Text>
                </View>
            </View>
            {showUrl ?
                <Image
                    source={url}
                    style={style.imageUser}
                />
                :
                <View style={style.imageNull}/>
            }
        </TouchableOpacity>
    );
}

export default MessageItem;
