import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageProps } from 'src/animations/pages';

import { ReactComponent as MarketIcon } from '../../../assets/icons/Sidebar/Market.svg';
import { ReactComponent as WalletIcon } from '../../../assets/icons/Sidebar/Wallet.svg';
import { ReactComponent as PublishIcon } from '../../../assets/icons/Sidebar/Publish.svg';
import { ReactComponent as HostIcon } from '../../../assets/icons/Sidebar/Host.svg';

import styles from './RightSideLayer.module.scss';

interface IRightSide {
  children: ReactNode;
}

const IconArray = [
  { title: 'marketplace', icon: <MarketIcon /> },
  { title: 'wallet', icon: <WalletIcon /> },
  { title: 'publish', icon: <PublishIcon /> },
  { title: 'host', icon: <HostIcon /> },
];

function RightSideLayer({ children }: IRightSide) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.OuterBg}>
      <div className={styles.InnerBg}>
        <div className={styles.TopBar}>
          <div className={styles.IconContainer}>
            {IconArray.map((item, index) => {
              return (
                <div key={index} onClick={() => navigate(`/${item.title}`)} className={classNames(styles.BtnContainer, { [styles.active]: pathname.includes(`${item.title}`) })}>
                  {item.icon}
                </div>
              );
            })}
          </div>
        </div>
        <motion.div style={{ width: '100%', height: '100%' }} {...PageProps}>
          {children}
        </motion.div>
      </div>
    </div>
  );
}

export default RightSideLayer;
