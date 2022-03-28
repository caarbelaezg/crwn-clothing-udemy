import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './DirectoryItem.styles.jsx';

function DirectoryItem({ category }) {
  const { route, imageUrl, title } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}

export default DirectoryItem;
