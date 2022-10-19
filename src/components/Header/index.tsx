import { WrapperHeader } from "./styles";

interface IHeader {
  title: string;
}

export const Header: React.FC<IHeader> = ({ title }) => {
  return (
    <WrapperHeader>
      <span>{title}</span>
    </WrapperHeader>
  )
}
