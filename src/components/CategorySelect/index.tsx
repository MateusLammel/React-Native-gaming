import { style } from "@mui/system";
import React from "react";
import { ScrollView } from "react-native";
import { styles } from "./styles";
import { categories } from "../../utils/categories";
import Category from "../Category";

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean
};


const CategorySelect = ({ categorySelected, setCategory, hasCheckBox = false }: Props) => {

  
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          icon={category.icon}
          title={category.title}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </ScrollView>
  );
};

export default CategorySelect;
