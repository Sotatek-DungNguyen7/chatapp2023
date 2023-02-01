/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import style from './style';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import colors from '../../themes/colors';
import styles from '../../themes/styles';


interface Props {
    onPress: any,
    user: {
        name: string,
        url: string,
        message: string,
        numberOfUnreadMessages: number
    }
}

function ChatItem(props: Props) {

    const { onPress } = props;
    let { name, url, message, numberOfUnreadMessages } = props.user;

    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View style={styles.alignCenter}>
                <View>
                    <Image
                        source={{ uri: url }}
                        style={style.imageItem}
                    />
                    {
                        numberOfUnreadMessages == 0 ?
                            null
                            :
                            <View style={style.unreadMessages}>
                                <Text style={style.numberUnreadMessages}>{numberOfUnreadMessages}</Text>
                            </View>
                    }
                </View>
                <View>
                    <Text style={style.nameUser}>{name}</Text>
                    <Text style={style.messageUser}>{message}</Text>
                </View>
            </View>
            <Text style={style.timeItem}>5 min ago</Text>
        </TouchableOpacity>
    );
}

export default ChatItem;
