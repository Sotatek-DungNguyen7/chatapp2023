/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../themes/colors';
// import styles from '../../themes/styles';
import { NaviProps } from '../../Model/NaviProps';


interface Props extends NaviProps {
    title: string,
    leftIconName?: string,
    rightIconName?: string,
    onPressLeftIcon?: any,
    onPressRightIcon?: any,
}

function Header(props: Props) {
    const { title,
        leftIconName,
        rightIconName,
        onPressLeftIcon,
        onPressRightIcon,
    } = props;
    return (
        <SafeAreaView style={style.container}>
            {leftIconName != undefined ?
                <TouchableOpacity
                    onPress={onPressLeftIcon}
                >
                    <Icon
                        name={leftIconName}
                        size={18}
                        color={colors.white}
                    />
                </TouchableOpacity>
                : <View />
            }
            <Text style={style.header}>{title}</Text>
            {rightIconName != undefined ?
                <TouchableOpacity
                    onPress={onPressRightIcon}
                >
                    <Icon
                        name={rightIconName}
                        size={18}
                        color={colors.white}
                    />
                </TouchableOpacity>
                : <View />
            }
        </SafeAreaView>
    );
}

export default Header;
