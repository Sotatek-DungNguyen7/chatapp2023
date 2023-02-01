/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import styles from '../../themes/styles';
import style from './style';
import Header from '../../components/Header';
// import EntypoIcon from 'react-native-vector-icons/Entypo';
// import colors from '../../themes/colors';
import ASSETS from '../../assets/ASSETS';
import {NaviProps} from '../../Model/NaviProps';
import MessageItem from '../../components/MessageItem';

interface Props extends NaviProps {
  // babsd: string
}

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
    message: 'Hello, how are you?',
    numberOfUnreadMessages: 0,
  },
];

const Message = (props: Props) => {
  const [chatHistory, setChatHistory] = React.useState([
    {
      url: ASSETS.user1,
      showUrl: true,
      isSender: true,
      messengers: 'Hello',
      timestamp: 1659344671000,
    },
    {
      url: ASSETS.user1,
      showUrl: false,
      isSender: true,
      messengers: 'How are you?',
      timestamp: 1659344769000,
    },
    {
      url: ASSETS.user1,
      showUrl: false,
      isSender: true,
      messengers: 'How about your work?',
      timestamp: 1659344972000,
    },
    {
      url: ASSETS.user2,
      showUrl: true,
      isSender: false,
      messengers: 'Yes',
      timestamp: 1659345060000,
    },
    {
      url: ASSETS.user2,
      showUrl: false,
      isSender: false,
      messengers:
        "I'm fine! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro in dolorem autem asperiores, tempora voluptatum veniam, sed harum laudantium optio?",
      timestamp: 1659345090000,
    },
    {
      url: ASSETS.user2,
      showUrl: false,
      isSender: false,
      messengers: "Let's go out",
      timestamp: 1659345150000,
    },
    {
      url: ASSETS.user1,
      showUrl: true,
      isSender: true,
      messengers: 'Okay',
      timestamp: 1659345150000,
    },
  ]);

  const {url, name} = props.route.params.user;

  const onPressLeft = () => props.navigation.goBack();

  return (
    <SafeAreaView style={[styles.container]}>
      <Header
        title={name}
        leftIconName="arrow-left"
        rightIconName="ellipsis-v"
        onPressLeftIcon={onPressLeft}
      />
      <View style={[styles.padding10]}>
        <View style={styles.alignSpace}>
          <Text style={style.titleChatList}>6 Messages Unread</Text>
          <TouchableOpacity>
            <Image
              source={ASSETS.iconsRecycling}
              style={style.iconsRecycling}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={{}}
        data={chatHistory}
        renderItem={({item}) => (
          <MessageItem
            onPress={() => {
              Alert.alert(`You press item's name: ${item.timestamp}`);
            }}
            item={item}
            key={`${item.timestamp}`}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Message;
