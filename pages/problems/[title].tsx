import Head from "next/head";
import { useRouter } from "next/router";

const Problem = () => {
  const router = useRouter();
  const { title } = router.query;

  return (
    <div>
      <Head>
        <title>{`${title} - DeCode`}</title>
      </Head>
    </div>
  );
};

export default Problem;
