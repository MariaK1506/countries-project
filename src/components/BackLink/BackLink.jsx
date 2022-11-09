// import { HiArrowLeft } from 'react-icons/hi';
import { IoArrowBack } from 'react-icons/io5';
import { StyledLink } from 'components/BackLink/BackLink.styled';

export default function BackLink({ to, children }) {
  return (
    <StyledLink to={to}>
      <IoArrowBack size="24" />
      {children}
    </StyledLink>
  );
}
