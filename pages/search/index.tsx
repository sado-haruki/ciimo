import Header from "../../components/Header";
import styles from "../../styles/search.module.scss";

const Search = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.title}>検索条件</div>
        <div className={styles.contants}>
            <div className={styles.items}>
          <div>
            <label className={styles.label}>希望の座席</label>
            <select className={styles.dropDown}>
              <option value="0">指定なし</option>
              <option value="1">前・左</option>
              <option value="2">前・中央</option>
              <option value="3">前・右</option>
              <option value="4">中央・左</option>
              <option value="5">中央・中央</option>
              <option value="6">中央・右</option>
              <option value="7">後・左</option>
              <option value="8">後・中央</option>
              <option value="9">後・右</option>
            </select>
          </div>
          <div>
              <div className={styles.checkbox}>
              <input type="checkbox" />
              <label > 前の席が空いている</label>
              </div>
              <div className={styles.checkbox}>
              <input type="checkbox" />
              <label >左右の席が空いている</label>
              </div>
          </div>
          <div>
            <label className={styles.label}>映画館のエリア</label>
            <select className={styles.dropDown}>
              <option value="jan">指定なし</option>
              <option value="feb">横浜</option>
              <option value="mar">みなとみらい</option>
            </select>
          </div>
          </div>
          <div className={styles.buttons}>
          <button className={styles.searchButton}>検索</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
