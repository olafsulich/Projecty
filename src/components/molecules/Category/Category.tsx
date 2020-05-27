import React from 'react';
import { CategoryWrapper, CategoryHeading } from './Category.styles';

interface Props {
  heading: string;
  type: string;
}

const Category: React.FC<Props> = ({ heading, children, type }) => (
  <CategoryWrapper>
    <CategoryHeading type={type}>{heading}</CategoryHeading>
    {children}
  </CategoryWrapper>
);

export default Category;
