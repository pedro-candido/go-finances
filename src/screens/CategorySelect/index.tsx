import { FlatList } from 'react-native';
import Button from '../../components/Form/Button';
import Header from '../../components/Header';
import { categories } from '../../utils/categories';
import { Container, Content } from './style';

interface Category {
  key: string;
  name: string;
}

interface CategorySelectProps {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

const CategorySelect = ({ category, setCategory, closeSelectCategory }: CategorySelectProps) => {
  const handleSetCategory = (categorySelected: Category) => setCategory(categorySelected);

  return (
    <Container>
      <Header title={'Categorias'} />
      <Content.Wrapper>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <Content.Card
              onPress={() => handleSetCategory(item)}
              isActive={category.key === item.key ? true : false}>
              <Content.Icon name={item.icon} color={item.color} fontSize={20} />
              <Content.Category>{item.name}</Content.Category>
            </Content.Card>
          )}
        />
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </Content.Wrapper>
    </Container>
  );
};

export default CategorySelect;
