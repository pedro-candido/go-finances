import Header from '../../components/Header';
import { categories } from '../../utils/categories';
import { Container, Content } from './style';

interface Category {
  key: string;
  name: string;
}

interface CategorySelectProps {
  category: string;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

const ResumeCategory = ({ category, setCategory, closeSelectCategory }: CategorySelectProps) => {
  return (
    <Container>
      <Header title={'Resumo por Categoria'} />

      <Content.Wrapper>
        <Content.Header>
          <Content.Icon name={'chevron-left'} />
          <Content.Title>{'Teste'}</Content.Title>
          <Content.Icon name={'chevron-right'} />
        </Content.Header>
        <Content.Graph></Content.Graph>
        <Content.List
          data={categories}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <Content.Card>
              <Content.CardWrapper>
                <Content.Icon name={item.icon} color={item.color} fontSize={20} />
                <Content.Category>{item.name}</Content.Category>
              </Content.CardWrapper>
              <Content.Amount>{'R$ 2000'}</Content.Amount>
            </Content.Card>
          )}
        />
      </Content.Wrapper>
    </Container>
  );
};

export default ResumeCategory;
