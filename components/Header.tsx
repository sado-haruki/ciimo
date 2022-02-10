import styles from '../styles/components/Header.module.scss';

interface LinkProps {
  topLink?: string;
}

const Header = ({ topLink }: LinkProps) => {
  return (
  <div className={styles.header}>
      <span className={styles.ciimo}>CIIMO</span>
  </div>
  );
};

export default Header;
