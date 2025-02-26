import { colors } from '@/styles/colors';
import styled from 'styled-components';
import booksImage from '@/assets/categorybox/books_image.png';
import buildingImage from '@/assets/categorybox/building_image.png';
import computerImage from '@/assets/categorybox/computer_image.png';
import dogImage from '@/assets/categorybox/dog_image.png';
import doveImage from '@/assets/categorybox/dove_image.png';
import earthImage from '@/assets/categorybox/earth_image.png';
import homeImage from '@/assets/categorybox/home_img.png';
import hospitalImage from '@/assets/categorybox/hospital_image.png';
import moneyImage from '@/assets/categorybox/money_image.png';
import shoppingImage from '@/assets/categorybox/shopping_image.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  background-color: #313845;
  padding: 2rem;
  border-radius: 1rem;
`;
const ContentImg = styled.img`
  display: flex;
  width: 3rem;
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

enum Category {}

const categoryImages = {
  //기부 카테고리
  '교육·문화': booksImage,
  '공익·인권': doveImage,
  '국제·구호': earthImage,
  '사회·복지': homeImage,
  '의료·건강': hospitalImage,
  '환경·동물': dogImage,
  //투자 카테고리
  '기술 & AI 관련': computerImage,
  '금융 & 경제 성장 관련': moneyImage,
  '사회적 가치 & ESG 투자': earthImage,
  '헬스케어 & 바이오': hospitalImage,
  '리츠 & 인프라': buildingImage,
  '소비 & 리테일': shoppingImage,
};
type CategoryBoxProps = {
  title: string;
};

export default function CategoryBox({ title }: CategoryBoxProps) {
  //title이 categoryImages의 키 값들 중 하나라는 것을 명확하게 명시
  const imageSrc = categoryImages[title as keyof typeof categoryImages];

  return (
    <>
      <Wrapper>
        <ImageWrapper>
          <ContentImg src={imageSrc} />
        </ImageWrapper>
        <TitleBox>
          <ContentTitle>{title}</ContentTitle>
        </TitleBox>
      </Wrapper>
    </>
  );
}
