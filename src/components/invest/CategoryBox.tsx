import { colors } from '@/styles/colors';
import styled from 'styled-components';
import buildingImage from '@/assets/categorybox/building_image.png';
import computerImage from '@/assets/categorybox/computer_image.png';
import moneyImage from '@/assets/categorybox/money_image.png';
import shoppingImage from '@/assets/categorybox/shopping_image.png';
import earthImage from '@/assets/categorybox/earth_image.png';
import hospitalImage from '@/assets/categorybox/hospital_image.png';

const Wrapper = styled.div<{ $active: boolean }>`
  // "$active"로 변경하여 DOM 전달 방지!
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: ${({ $active }) => ($active ? 1.0 : 0.5)};
  cursor: pointer; // 클릭 가능하게 변경!
  transition: opacity 0.3s;
`;

const ImageWrapper = styled.div`
  display: flex;
  background-color: #313845;
  padding: 2rem;
  border-radius: 1rem;
`;

const ContentImg = styled.img`
  display: flex;
  width: 2.7rem;
  height: 2.7rem;
`;

const TitleBox = styled.div`
  width: 6rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentTitle = styled.div`
  display: flex;
  font-size: 1rem;
  color: ${colors.White};
  margin: 0.5rem 0;
  text-align: center;
`;

const categoryImages = {
  //투자 카테고리
  '기술 & AI 관련': computerImage,
  '금융 & 경제 성장 관련': moneyImage,
  '사회적 가치 & ESG 투자': earthImage,
  '헬스케어 & 바이오': hospitalImage,
  '리츠 & 인프라': buildingImage,
  '소비 & 리테일': shoppingImage,
};

interface Props {
  title: string;
  imageSrc: string;
  active: boolean;
  onClick: () => void; // 클릭 이벤트 추가!
}

export default function CategoryBox({ title, imageSrc, active, onClick }: Props) {
  return (
    <>
      <Wrapper $active={active} onClick={onClick}>
        <ImageWrapper>
          <ContentImg src={imageSrc} alt={title} />
        </ImageWrapper>
        <TitleBox>
          <ContentTitle>{title}</ContentTitle>
        </TitleBox>
      </Wrapper>
    </>
  );
}
