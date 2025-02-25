import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(({ title, ...touchableProps }, ref) => {
  return (
    <TouchableOpacity
      ref={ref}
      {...touchableProps}
      className={`${styles.button} ${touchableProps.className}`}>
      <Text className="font-poppins text-lg font-bold text-black">{title}</Text>
    </TouchableOpacity>
  );
});

const styles = {
  button: 'items-center rounded-xl shadow-md h-10 w-40 justify-center',
  buttonText: 'font-Poppins text-lg  text-center',
};
