/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from '../../themes/styles';
import style from './style';
import Header from '../../components/Header';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import colors from '../../themes/colors';
import ASSETS from '../../assets/ASSETS';
// import ChatItem from '../../components/ChatItem';
import { NaviProps } from '../../Model/NaviProps';
import { Screens } from '../../navigation/Screens';



interface Props extends NaviProps {

}

// const contacts = ['Cao Minh', 'Đỗ Chiến', 'Chiến Dũng', 'Đăng Khoa', 'Đắc Danh', 'Huy Hoàng'];

// const [users, setUsers] = React.useState([
const users = [
    {
        // id: 0,
        url: ASSETS.user1,
        name: 'David Silva',
        message: 'Hello, how are you?',
        numberOfUnreadMessages: 0,
    },
    {
        url: ASSETS.user2,
        name: 'Kevin De Bruyne',
        message: 'Hello, how are you?',
        numberOfUnreadMessages: 0,
    },
    {
        url: ASSETS.user3,
        name: 'Ilkay Gundogan',
        message: 'Hello, how are you?',
        numberOfUnreadMessages: 0,

    },
    {
        url: ASSETS.user4,
        name: 'Kyle Walker',
        message: 'Hello, how are you?',
        numberOfUnreadMessages: 2,
    },
    {
        url: ASSETS.user5,
        name: 'Rúben Dias',
        message: 'Hello, how are you?',
        numberOfUnreadMessages: 3,
    },
    {
        url: ASSETS.user6,
        name: 'Rodri Hernández Cascante',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae explicabo ab voluptate cumque ex recusandae corrupti expedita nam quis.',
        numberOfUnreadMessages: 0,
    },
    {
        url: ASSETS.user7,
        name: 'Aymeric Laporte',
        message: 'Hello, how are you?',
        numberOfUnreadMessages: 2,
    },
    {
        url: ASSETS.user8,
        name: 'João Cancelo',
        message: 'Hello, how are you?',
        numberOfUnreadMessages: 3,
    },
    {
        url: ASSETS.user9,
        name: 'Erling Haaland',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae explicabo ab voluptate cumque ex recusandae corrupti expedita nam quis.',
        numberOfUnreadMessages: 0,
    },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Chat = ({ route, navigation }: Props) => {
    return (
        <SafeAreaView style={[style.container]}>
            <Header title="Chat" leftIconName="arrow-left" rightIconName="search" />
            <View style={[styles.padding10]}>
                <View style={[styles.alignSpace, styles.marginBottom15, styles.marginTop5]}>
                    <Text style={style.titleChatList}>6 Messages Unread</Text>
                    <TouchableOpacity>
                        <Image
                            source={ASSETS.iconsRecycling}
                            style={style.iconsRecycling}
                        />
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={style.chatList}
                    data={users}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        // <ChatItem
                        //     onPress={() => {
                        //         Alert.alert(`you press item's name: ${item.name}`)
                        //     }}
                        //     user={item} key={item.url}
                        // />
                        <TouchableOpacity
                            style={style.chatItem}
                            onPress={() => {
                                navigation.navigate(Screens.Message, { user: item });
                            }}
                        >
                            <View style={[styles.alignCenter, style.flex2]}>
                                <View>
                                    <Image
                                        source={item.url}
                                        style={style.imageItem}
                                    />
                                    {
                                        item.numberOfUnreadMessages > 0 &&
                                        <View style={style.unreadMessages}>
                                            <Text style={style.numberUnreadMessages}>{item.numberOfUnreadMessages}</Text>
                                        </View>
                                    }
                                </View>
                                <View style={{ width: '85%' }}>
                                    <Text style={style.nameUser} numberOfLines={1}>{item.name}</Text>
                                    <Text style={style.messageUser} numberOfLines={1}>{item.message}</Text>
                                </View>
                            </View>
                            <View style={style.timeView}>
                                <Text style={style.timeItem}>5 min ago</Text>
                            </View>
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item.url}
                />
            </View>

        </SafeAreaView>
    );
};

export default Chat;
