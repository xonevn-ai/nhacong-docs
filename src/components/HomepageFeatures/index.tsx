import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
  to: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Chủ nhà (Host)',
    emoji: '🏠',
    description: (
      <>
        Quản lý tòa nhà, căn hộ, cư dân, hợp đồng và dòng tiền tài chính một cách tự động và chuyên nghiệp.
      </>
    ),
    to: '/docs/host/overview/buildings',
  },
  {
    title: 'Cư dân (Resident)',
    emoji: '👤',
    description: (
      <>
        Trải nghiệm sống hiện đại: thanh toán hóa đơn, gửi yêu cầu hỗ trợ và tham gia cộng đồng cư dân.
      </>
    ),
    to: '/docs/customer/dashboard/overview',
  },
  {
    title: 'Cộng tác viên (Agent)',
    emoji: '🤝',
    description: (
      <>
        Công cụ tiếp thị mạnh mẽ, quản lý khách hàng tiềm năng và theo dõi hoa hồng minh bạch.
      </>
    ),
    to: '/docs/agent/dashboard/overview',
  },
];

function Feature({ title, emoji, description, to }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={to} className={styles.featureCard}>
        <div className="text--center">
          <span style={{ fontSize: '4rem' }}>{emoji}</span>
        </div>
        <div className="text--center padding-horiz--md mt-4">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

