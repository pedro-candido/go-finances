import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import Input from '../Input';
import { Container, Error } from './style';

interface InputFormProps extends TextInputProps {
  control: Control;
  name: string;
  error: string;
}

const InputForm = ({ control, name, error, ...rest }: InputFormProps) => {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />

      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default InputForm;
