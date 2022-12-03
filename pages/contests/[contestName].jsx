import Head from "next/head";
const Contest = () => {
    const router = useRouter();
    const {contestName} = router.query;
  return (
    <div>
      <Head>
        <title>{`${contestName} - DeCode`}</title>
          </Head>
          <p>Problems: </p>
          <table>
              <tr>
                  <td>Name</td>
                  <td>Start time</td>
                  <td>End time</td>
                  <td>Duration</td>
                  <td>Starts in</td>
                  <td>Starts in</td>
            </tr>
      </table>
    </div>
  );
};

export default Contest;
