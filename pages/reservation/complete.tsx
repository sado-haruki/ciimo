import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/complete.module.css";

const ReservationComplete: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>予約が完了しました。</h1>

        <div className={styles.items}>
          <div>
            <div>
              <label>支払番号</label>
              <span className={styles.paymentCode}>ECM271605</span>
            </div>
            <div>
              <label>映画館</label>
              <span>イオンシネマ みなとみらい</span>
            </div>
            <div>
              <label>作品</label>
              <span>劇場版 呪術廻戦０</span>
            </div>
            <div>
              <label>上映日時</label>
              <span>2/7（月）16:05～18:00</span>
            </div>
            <div>
              <label>座席</label>
              <span>J-17</span>
            </div>
            <div>
              <label>券の種類</label>
              <span>大人(20歳以上) 1枚</span>
            </div>
            <div>
              <label>お支払方法</label>
              <span>後から決済</span>
            </div>
            <div>
              <label>金額</label>
              <span>¥ 1,800</span>
            </div>
          </div>
          <div>
            <div className={styles.paymentCode}>{router.query.paymentCode}</div>
            <div>{router.query.theaterName}</div>
            <div>{router.query.filmName}</div>
            <div>{router.query.schedule}</div>
            <div>{router.query.seatName}</div>
            <div>
              {router.query.ticketType}
              {router.query.count}
            </div>
            <div>{router.query.paymentMethod}</div>
            <div>{router.query.money}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReservationComplete;
