import React from 'react';

import Directory from '../../components/Directory';

import { CATEGORIES } from '../../constats';

function Home() {
  return <Directory categories={CATEGORIES} />;
}

export default Home;
