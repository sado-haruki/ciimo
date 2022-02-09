import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Theater } from "../../types/Theater";
import Schedule from "./Schedule";
import Header from "../components/Header";
import styles from "../../styles/schedule/index.module.scss";

const Index = () => {
  const data = useRef<Theater[]>();
  const [show, setshow] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/theater").then((response) => {
      data.current = response.data;
      console.log(data.current);
      setshow(true);
    });
  }, []);

  // 日付タブを押すと、dateで絞り込んで表示する

  return (
    <>
      <Header />
      <div className={styles.main}>
        {/* TODO:検索画面実装時に戻す */}
        {/* <div className={styles.back}>◀︎検索条件に戻る</div> */}
        <div className={styles.title}>検索結果</div>
        <div className={styles.contants}>
          {/* 日付タブ実装時に戻す */}
          {/* <div className={styles.dateTabs}>
            <button className={styles.dateTab}>2/7(月)</button>
            <button className={styles.dateTab}>2/8(火)</button>
            <button className={styles.dateTab}>2/9(水)</button>
            <button className={styles.dateTab}>2/10(木)</button>
            <button className={styles.dateTab}>2/11(金)</button>
            <button className={styles.dateTab}>2/12(土)</button>
            <button className={styles.dateTab}>2/13(日)</button>
          </div> */}
          {data.current ? (
            <Schedule theaters={data.current}></Schedule>
          ) : (
            <div>読み込み中</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Index;
