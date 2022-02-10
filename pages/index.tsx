import type { NextPage } from 'next'

// TODO: トップページのデザインが決まった後で実装を追加する
const Index: NextPage = () => {
  return (
    <>
      <span>Not implemented</span>
    </>
  );
};

// トップページにアクセスされたときに書籍ページにリダイレクトする
// Index.getInitialProps = async ({ res }) => {
//   if (typeof window === 'undefined') {
//     res?.writeHead(302, { Location: '/schedule' });
//     res?.end();

//     return {};
//   }
// };
export default Index;