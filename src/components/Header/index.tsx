import styles from './header.module.scss';
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.headerContent}>
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="logo" className={styles.logo} />
        </a>
      </Link>
    </header>
  );
}
