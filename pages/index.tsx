import type { NextPage } from 'next'
import { useEffect } from 'react';
import { useRouter } from "next/router";

// TODO: トップページのデザインが決まった後で実装を追加する
const Index: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push({
      pathname: "../search",
    });
  }, []);

  return (
    <>
      <span>Not implemented</span>
    </>
  );
};

export default Index;