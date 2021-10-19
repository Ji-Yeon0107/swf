import Head from "next/head";


export default function Share() {
  return (
    <>
      <Head>
        <title>스우파 과몰입 테스트</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
        <script>
            Kakao.init('178a2bb850640c5dee765d4a93e39bfb');
        </script>
      </Head>
    </>
  );
}