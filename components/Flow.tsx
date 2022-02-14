import styles from "../styles/components/Flow.module.scss";

interface FlowProps {
  select?: number;
}

const Flow = ({ select }: FlowProps) => {
  return (
    <div className={styles.items}>
      {select == 1 ? (
        <div className={styles.item}>
          <div className={styles.selectedback} />
          <div className={styles.selectedlabel}>座席を選ぶ</div>
          <div className={styles.selectedfront} />
        </div>
      ) : (
        <div className={styles.item}>
          <div className={styles.back} />
          <div className={styles.label}>座席を選ぶ</div>
          <div className={styles.front} />
        </div>
      )}
      {select == 2 ? (
        <div className={styles.item}>
          <div className={styles.selectedback} />
          <div className={styles.selectedlabel}>予約内容確認</div>
          <div className={styles.selectedfront} />
        </div>
      ) : (
        <div className={styles.item}>
          <div className={styles.back} />
          <div className={styles.label}>予約内容確認</div>
          <div className={styles.front} />
        </div>
      )}
      {select == 3 ? (
        <div className={styles.item}>
          <div className={styles.selectedback} />
          <div className={styles.selectedlabel}>予約完了</div>
          <div className={styles.selectedfront} />
        </div>
      ) : (
        <div className={styles.item}>
          <div className={styles.back} />
          <div className={styles.label}>予約完了</div>
          <div className={styles.front} />
        </div>
      )}
    </div>
  );
};

export default Flow;
