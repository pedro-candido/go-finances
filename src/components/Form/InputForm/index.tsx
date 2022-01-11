import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import Input from '../Input';
import { Container } from './style';

interface InputFormProps extends TextInputProps {
  control: Control;
  name: string;
}

const InputForm = ({ control, name, ...rest }: InputFormProps) => {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />
    </Container>
  );
};

export default InputForm;
