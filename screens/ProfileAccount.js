import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants';
import { AntDesign } from '@expo/vector-icons';
import PageContainer from '../components/PageContainer';
import PageTitle from '../components/PageTitle';
import Input from '../components/Input';
import Button from '../components/Button';

const ProfileAccount = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <PageTitle title="Your Profile" onPress={() => navigation.navigate('Vefification')} />
        <View style={{ flex: 1, alignItems: 'center' }}>
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: COLORS.secondaryWhite,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AntDesign name="user" size={64} color="111" />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
              }}
            >
              <AntDesign name="pluscircle" size={24} color={COLORS.gray} />
            </View>
          </View>
          <View style={{ width: '100%', paddingHorizontal: 22, paddingVertical: 60 }}>
            <Input id="firstName" placeholder="First Name (Optional)" />
            <Input id="lastName" placeholder="Last Name (Optional)" />
            <Button
              title="Save"
              style={{
                width: '100%',
                paddingVertical: 12,
                marginVertical: 12,
                marginBottom: 48,
              }}
            />
          </View>
        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default ProfileAccount;
