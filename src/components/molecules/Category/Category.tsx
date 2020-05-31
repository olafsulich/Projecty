import React from 'react';
import { CategoryWrapper, CategoryHeading } from './Category.styles';
import { Props } from './Category.types';

const Category: React.FC<Props> = ({ heading, children, type }) => (
  <CategoryWrapper>
    <CategoryHeading type={type}>{heading}</CategoryHeading>
    {children}
  </CategoryWrapper>
);

export default Category;
