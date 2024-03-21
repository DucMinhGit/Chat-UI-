import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS } from '../constants';
import { GiftedChat, Send, Bubble } from 'react-native-gifted-chat';
import { useCallback, useEffect, useState } from 'react';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const PersonalChat = ({ navigation }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello Developers',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar:
            'https://cdn-img.thethao247.vn/storage/files/minhtuan/2022/04/13/man-city-2-16491996580591348220812-crop-16491996611981797730457-1649843820.jpg',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);

  // change button of send
  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View
          style={{
            height: 36,
            alignItems: 'center',
            justifyContent: 'center',
            width: 36,
            borderRadius: 18,
            backgroundColor: COLORS.primary,
            marginRight: 5,
            marginBottom: 5,
          }}
        >
          <FontAwesome name="send" size={12} color={COLORS.white} />
        </View>
      </Send>
    );
  };

  // customize sender messages
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: COLORS.primary,
          },
        }}
        textStyle={{
          right: {
            color: COLORS.white,
          },
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, color: COLORS.secondaryWhite }}>
      <StatusBar style="light" backgroundColor={COLORS.white} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 22,
          backgroundColor: COLORS.white,
          height: 60,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate('Contacts')}>
            <MaterialIcons name="keyboard-arrow-left" size={24} color={COLORS.black} />
          </TouchableOpacity>
          <Text style={{ ...FONTS.h4, marginLeft: 8 }}>Athalia Muri</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity style={{ marginRight: 8 }}>
            <MaterialIcons name="search" size={24} color={COLORS.black} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 8 }}>
            <MaterialIcons name="menu" size={24} color={COLORS.black} />
          </TouchableOpacity>
        </View>
      </View>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        textInputStyle={{
          borderRadius: 22,
          borderWidth: 1,
          borderColor: COLORS.gray,
          marginRight: 6,
          paddingHorizontal: 12,
        }}
      />
    </SafeAreaView>
  );
};

export default PersonalChat;
