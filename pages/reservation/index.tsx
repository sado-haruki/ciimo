import axios from "axios";
import { Key, useEffect, useRef, useState } from "react";
import { Theater } from "../../types/Theater";
import Schedule from "./Schedule";

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

  return (
    <>
      <div>
        <div>◀︎検索条件に戻る</div>
        <div>検索結果</div>
        {data.current? (<Schedule theaters={data.current}></Schedule>)
        :(<div>読み込み中</div>)
        }
      </div>
    </>
  );
};

export default Index;
