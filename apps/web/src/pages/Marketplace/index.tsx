import React, { useState } from 'react';

import CollectionGrid from 'src/pages/Marketplace/MarketplaceGrid';
import Filter from './FilterSidebar';

import Data from './seedData.json';
import { SeedDataType } from './seedDataType';
import MainBackground from 'src/components/MarketplaceLayouts/MainBackground/MainBackground';
import RightSideLayer from 'src/components/MarketplaceLayouts/RightSideLayer/RightSideLayer';
import LeftSideLayer from 'src/components/MarketplaceLayouts/LeftSidebar/LeftSidebar';
import SidebarContent from 'src/components/MarketplaceLayouts/LeftSidebar/SidebarContentLayout';

function MarketPlace() {
  const [currentData, setCurrentData] = useState<SeedDataType[]>(Data);

  return (
    <MainBackground>
      <LeftSideLayer>
        <SidebarContent>
          <Filter Data={currentData} setCurrentData={setCurrentData} />
        </SidebarContent>
      </LeftSideLayer>
      <RightSideLayer title={'Marketplace'}>
        <CollectionGrid Data={currentData} />
      </RightSideLayer>
    </MainBackground>
  );
}

export default MarketPlace;
