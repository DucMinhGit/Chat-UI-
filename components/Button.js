import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants';

const Button = (props) => {
  const enableBgColor = props.color || COLORS.primary;
  const disableBgColor = COLORS.secondaryWhite;
  const bgColor = props.disabled ? disableBgColor : enableBgColor;

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        ...styles.btn,
        ...{ backgroundColor: bgColor },
        ...props.style,
      }}
    >
      <Text
        style={{
          ...FONTS.body3,
          color: props.disabled ? COLORS.primary : COLORS.white,
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding3,
    borderColor: COLORS.primary,
    borderRadius: SIZES.padding,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button;
