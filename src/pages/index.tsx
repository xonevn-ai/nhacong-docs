import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro"
            style={{ padding: '1rem 2rem', borderRadius: '12px', fontSize: '1.1rem' }}>
            Bắt đầu khám phá 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Hướng dẫn sử dụng hệ thống quản lý bất động sản NET Partners (Nhà Cộng)">
      <HomepageHeader />
      <main style={{ backgroundColor: 'var(--ifm-background-color)' }}>
        <div className="container text--center" style={{ padding: '3rem 0 1rem' }}>
          <Heading as="h2" style={{ fontSize: '2rem' }}>Chọn vai trò của bạn</Heading>
          <p style={{ color: 'var(--ifm-color-primary-dark)', fontSize: '1.2rem' }}>Để xem hướng dẫn chi tiết dành riêng cho bạn</p>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

