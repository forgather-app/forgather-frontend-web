import { IoLink } from 'react-icons/io5';
import * as S from './LinkCapsule.styles';

interface LinkCapsuleProps {
  name: string;
  onClick: () => void;
}

const LinkCapsule = ({ name, onClick }: LinkCapsuleProps) => {
  return (
    <S.Capsule onClick={onClick}>
      <IoLink size={14} />
      <S.Name>{name}</S.Name>
    </S.Capsule>
  );
};

export default LinkCapsule;
