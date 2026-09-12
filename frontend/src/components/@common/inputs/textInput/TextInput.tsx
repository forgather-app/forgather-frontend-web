import * as C from '../input.common.styles';
import * as S from './TextInput.styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  subLabel?: string;
  errorMessage?: string;
  maxCount?: number;
  validLength?: number;
  isRequired?: boolean;
  prefix?: string;
}

const TextInput = ({
  label,
  subLabel,
  errorMessage,
  maxCount,
  validLength,
  isRequired = false,
  prefix,
  ...inputProps
}: InputProps) => {
  return (
    <C.Wrapper>
      <C.Label htmlFor={inputProps.id}>
        {label}
        <C.requiredDot>{isRequired && '*'}</C.requiredDot>
      </C.Label>
      <S.SubLabel>{subLabel}</S.SubLabel>
      {prefix ? (
        <S.InputWrapper $isError={!!errorMessage}>
          <S.Prefix>{prefix}</S.Prefix>
          <S.PrefixedInputField
            {...inputProps}
            id={inputProps.id}
            aria-label={inputProps['aria-label']}
          />
        </S.InputWrapper>
      ) : (
        <S.InputField
          {...inputProps}
          id={inputProps.id}
          aria-label={inputProps['aria-label']}
          $isError={!!errorMessage}
        />
      )}
      <C.InputFooterContainer>
        <C.ErrorMessage>{errorMessage ? errorMessage : ''}</C.ErrorMessage>
        <C.InputCount>
          {maxCount && `${validLength} / ${maxCount}`}
        </C.InputCount>
      </C.InputFooterContainer>
    </C.Wrapper>
  );
};

export default TextInput;
