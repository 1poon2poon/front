import { Outlet, useNavigate } from 'react-router-dom';
import { colors } from '@/styles/colors';
import styled from 'styled-components';

import { IoChevronBackSharp } from 'react-icons/io5';
import { MdHomeFilled } from 'react-icons/md';

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  width: 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:active {
    opacity: 0.6;
  }
`;

export default function HomeLayout() {
  const navigate = useNavigate();

  const HandleBackClick = () => {
    navigate(-1);
  };

  const HandleHomeClick = () => {
    navigate('/InvestmentHome'); // ✅ 홈 아이콘 클릭 시 이동
  };

  return (
    <div>
      <Top>
        <Icon onClick={HandleBackClick}>
          <IoChevronBackSharp color={colors.White} size="1.5rem" />
        </Icon>
        <Icon onClick={HandleHomeClick}>
          {/* ✅ 홈 아이콘에 클릭 이벤트 추가 */}
          <MdHomeFilled color={colors.White} size="1.5rem" />
        </Icon>
      </Top>
      <Outlet />
    </div>
  );
}
