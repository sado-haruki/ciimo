import axios from "axios";
import Router from "next/router";
import { ChangeEvent, MouseEventHandler, useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import styles from "../../styles/search.module.scss";
import { Area } from "../../types/Area";
import { Zone } from "../../types/Zone";

const Search = () => {
  const[data,setData] = useState<Zone[]>([]);
  const [areaData,setAreaData] = useState<Area[]>([]);
  const isFrontFree = useRef<boolean>(false);
  const isSideFree = useRef<boolean>(false);
  const ZoneId = useRef<number>(0);
  const AreaId = useRef<number>(0);

  useEffect (() => {
  axios
    .get("http://localhost:5000/zone", { timeout: 200 })
    .then((response) => {
      setData(response.data);
    })
    .catch((e) => {
      axios
        .get("http://10.200.13.221:80/zone")
        .then((response) => {
          setData(response.data);
        });
    });

    axios
    .get("http://localhost:5000/area", { timeout: 200 })
    .then((response) => {
      setAreaData(response.data)
    })
    .catch((e) => {
      axios
        .get("http://10.200.13.221:80/area")
        .then((response) => {
          setAreaData(response.data)
        });
    });
  },[]);

  const search = () => {

    Router.push({
      pathname: "/schedule",
      query: {
        zoneId: ZoneId.current,
        frontFree: isFrontFree.current,
        sideFree: isSideFree.current,
        areaId: AreaId.current,
      },
    });
  };

  const selectZone = (e:ChangeEvent<HTMLSelectElement>) => {
    ZoneId.current = Number(e.target.value);
  };

  const selectArea = (e:ChangeEvent<HTMLSelectElement>) => {
    AreaId.current = Number(e.target.value);
  };

  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.title}>検索条件</div>
        <div className={styles.contants}>
          <form className={styles.items}>
            <div>
              <label className={styles.label}>希望の座席</label>
              <select className={styles.dropDown} onChange={(e) => selectZone(e)}>
                <option value="0">
                  指定なし
                </option>
                {/* optionはzonenameをmapする */}
                {data ? (
                  data.map((zone) => (
                    <option
                    value={zone.id}
                      key={zone.id}>
                      {zone.name}
                    </option>
                  ))
                ) : (
                  <>読み込み中</>
                )}
              </select>
            </div>
            <div>
              <div className={styles.checkbox}>
                <input
                  id="frontFree"
                  type="checkbox"
                  onChange={() => (isFrontFree.current = !isFrontFree.current)}
                />
                <label> 前の席が空いている</label>
              </div>
              <div className={styles.checkbox}>
                <input
                  id="sideFree"
                  type="checkbox"
                  onChange={() => (isSideFree.current = !isSideFree.current)}
                />
                <label>左右の席が空いている</label>
              </div>
            </div>
            <div>
              <label className={styles.label}>映画館のエリア</label>
              <select className={styles.dropDown} onChange={(e) => selectArea(e)}>
                <option value="0">
                  指定なし
                </option>
                {areaData ? (
                  areaData.map((area) => (
                    <option
                    value={area.id}
                      key={area.id}
                    >
                      {area.name}
                    </option>
                  ))
                ) : (
                  <>読み込み中</>
                )}

              </select>
            </div>
          </form>
          <div className={styles.buttons}>
            <button onClick={search} className={styles.searchButton}>
              検索
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
