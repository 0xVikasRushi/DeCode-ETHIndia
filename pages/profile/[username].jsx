import { GitHub, Twitter } from "components/BrandIcons";
import Head from "next/head";
import { useRouter } from "next/router";

export default function UserProfile() {
  const router = useRouter();
  const { username } = router.query;

  const data = {
    profilePicURL: "https://picsum.photos/600",
    fullName: "Shubh A Chudasama",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione similique necessitatibus ipsum quibusdam officia atque assumenda dolore, pariatur, aspernatur",
    languages: [
      { name: "C++", numProb: 70 },
      { name: "C", numProb: 1 },
    ],
    solvedProblems: {
      total: 2488,
      solved: 68,
    },
    submissionsLastYear: 159,
    totalActiveDays: 34,
    maxStreak: 13,
    topics: [
      { url: "#", name: "Dynamic Programming", numProb: 7 },
      { url: "#", name: "Divide and Conquer", numProb: 1 },
      { url: "#", name: "Tree", numProb: 19 },
      { url: "#", name: "Binary Tree", numProb: 16 },
      { url: "#", name: "Array", numProb: 22 },
      { url: "#", name: "String", numProb: 18 },
      { url: "#", name: "Stack", numProb: 15 },
    ],
    recentAC: [
      {
        title: "Construct String from Binary Tree",
        url: "/submissions/detail/795685401/",
        relativeDate: "3 months ago",
      },
      {
        title: "Count Nodes Equal to Average of Subtree",
        url: "/submissions/detail/792651604/",
        relativeDate: "3 months ago",
      },
      {
        title: "Deepest Leaves Sum",
        url: "/submissions/detail/792253634/",
        relativeDate: "3 months ago",
      },
      {
        title: "Find a Corresponding Node of a Binary Tree in a Clone",
        url: "/submissions/detail/792180760/",
        relativeDate: "3 months ago",
      },
      {
        title: "Insert into a Binary Search Tree",
        url: "/submissions/detail/753093708/",
        relativeDate: "4 months ago",
      },
      {
        title: "Search in a Binary Search Tree",
        url: "/submissions/detail/753088105/",
        relativeDate: "4 months ago",
      },
      {
        title: "Invert Binary Tree",
        url: "/submissions/detail/752266445/",
        relativeDate: "4 months ago",
      },
      {
        title: "Binary Tree Inorder Traversal",
        url: "/submissions/detail/750264956/",
        relativeDate: "4 months ago",
      },
    ],
    socials: [
      {
        icon: <GitHub />,
        url: "https://github.com/c-shubh/",
      },
      {
        icon: <Twitter />,
        url: "https://twitter.com/c_shubh_",
      },
    ],
    education: [
      {
        from: "December 2021",
        to: "June 2025",
        name: "CVR College Of Engineering",
      },
      {
        from: "June 2019",
        to: "June 2021",
        name: "Intermediate college",
      },
    ],
  };

  return (
    <div>
      <Head>
        <title>{`${username} - DeCode Profile`}</title>
      </Head>

      <div className="flex min-h-screen min-w-[360px] flex-col">
        <div className="mx-auto mt-[50px] w-full grow p-4 md:mt-0 md:max-w-[888px] md:p-6 lg:max-w-screen-xl">
          <div className="flex flex-col overflow-visible lc-lg:flex-row lc-lg:space-x-4">
            <div>
              <div className="drop-shadow-xl text-slate-100 bg-[#1a253c] rounded-lg flex w-full min-w-[300px] flex-col px-4 pt-[21px] lc-lg:w-[300px]">
                <div className="flex flex-col items-center">
                  <img src={data.profilePicURL} alt="" className="mb-4 rounded-full w-24 h-24 block flex-col shadow-md border-4 border-gray-50" />
                  <p className="mb-4 text-2xl">{data.fullName}</p>
                  <p className="mb-6 text-slate-300 text-sm">{data.bio}</p>
                  <div className="mb-6 mt-1 relative w-full flex items-center border border-gray-700 rounded shadow-lg p-4">
                    <p className="absolute left-2 top-[-10px] text-xs bg-[#17243f] border border-gray-700 rounded px-[3px] py-[1px]">Links</p>
                    <ul className="flex gap-4">
                      {data.socials.map((item, idx) => (
                        <li key={idx}>
                          <a href={item.url}>{item.icon}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mb-4 h-px w-full border-b border-gray-600   mt-2.5" />
                <div className="text-base font-medium leading-6">Languages</div>
                <div className="mt-4 flex flex-col space-y-3">
                  {data.languages.map((lang, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs  ">
                      <div className="text-xs">
                        <span className="bg-[#263659] inline-flex items-center px-2 whitespace-nowrap text-xs leading-6 rounded-full">{lang.name}</span>
                      </div>
                      <div className="flex">
                        <span className="text-xs font-medium  ">{lang.numProb}</span>
                        &nbsp;
                        <span className="text-slate-300">problems solved</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 mb-4 h-px w-full border-b border-gray-600  " />
                <div className="mb-3">
                  <div className="text-base font-medium leading-6">Solved Problems</div>
                  <div className="mt-4 flex flex-col space-y-4">
                    <div className="flex min-w-[100px] justify-center">
                      <div className="shrink-1 relative max-h-[100px] max-w-[100px] z-base">
                        <svg className="h-full w-full origin-center -rotate-90 transform" viewBox="0 0 100 100">
                          <circle fill="none" cx="50px" cy="50px" r={46} strokeWidth={3} strokeLinecap="round" stroke="#263659" className="w-[100px] text-gray-4 dark:text-dark-gray-4" />
                          <circle
                            fill="none"
                            cx="50px"
                            cy="50px"
                            r={46}
                            strokeWidth={5}
                            strokeLinecap="round"
                            stroke="currentColor"
                            className="cursor-pointer  drop-shadow-[0_2px_4px_rgba(255,161,22,0.2)]"
                            strokeDasharray={`${289.026524122}`}
                            strokeDashoffset={`${289.026524122 - (data.solvedProblems.solved / data.solvedProblems.total) * 289.026524122}`}
                            data-difficulty="ALL"
                          />
                        </svg>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-default text-center">
                          <div>
                            <div className="text-[24px] font-medium  ">68</div>
                            <div className="whitespace-nowrap text-xs  ">Solved</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 mb-4 h-px w-full border-b border-gray-600  " />
                <div>
                  <div className="text-base font-medium leading-6">Skills</div>
                  <div className="mt-4 flex flex-col space-y-4">
                    <div>
                      <div className="mt-3 flex flex-wrap">
                        {data.topics.map((topic, idx) => (
                          <div key={idx} className="mr-4 mb-3 inline-block text-xs">
                            <a href={topic.url}>
                              <span className="bg-[#263659] inline-flex items-center px-2 whitespace-nowrap text-xs leading-6 rounded-full bg-fill-3 dark:bg-dark-fill-3 cursor-pointer transition-all hover:bg-fill-2 dark:hover:bg-dark-fill-2 text-label-2 dark:text-dark-label-2">{topic.name}</span>
                            </a>
                            <span className="text-slate-300 pl-1 text-xs  ">x{topic.numProb}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lc-lg:max-w-[calc(100%_-_316px)]">
              <div className="mt-4 lc-lg:mt-0">
                <div className="text-slate-100 bg-[#1a253c] drop-shadow-xl dark:shadow-dark-level3 bg-layer-1 dark:bg-dark-layer-1 rounded-lg flex h-auto flex-col space-y-4 p-4 pb-0 lc-md:h-[185px] lc-md:pb-4">
                  <div className="flex flex-col flex-wrap space-y-2 lc-md:flex-row lc-md:items-center lc-md:space-y-0">
                    <div className="flex flex-1 items-center">
                      <span className="mr-[5px] text-base font-medium lc-md:text-xl">{data.submissionsLastYear}</span>
                      <span className="whitespace-nowrap lc-md:text-base text-label-2 dark:text-dark-label-2">submissions in the last year</span>
                    </div>
                    <div className="flex items-center text-xs">
                      <div className="mr-4 space-x-1">
                        <span className=" ">Total active days:</span>
                        <span className="font-medium text-label-2 dark:text-dark-label-2">{data.totalActiveDays}</span>
                      </div>
                      <div className="space-x-1">
                        <span className=" ">Max streak:</span>
                        <span className="font-medium text-label-2 dark:text-dark-label-2">{data.maxStreak}</span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden h-auto w-full flex-1 items-center justify-center lc-md:flex">
                    <svg viewBox="0 0 799.3 104.64" width={804}>
                      <g x={0} y={0} className="month 1">
                        <g x={0} y={0} className="week 1">
                          <rect x={0} y={0} width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x={0} y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x={0} y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                      </g>
                      <g x="15.95" y={0} className="month 2">
                        <g x="15.95" y={0} className="week 1">
                          <rect x="15.95" y={0} width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="15.95" y="11.52" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="15.95" y="23.04" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="15.95" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="15.95" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="15.95" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="15.95" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="27.47" y={0} className="week 2">
                          <rect x="27.47" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="27.47" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="27.47" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="27.47" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="27.47" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="27.47" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="27.47" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="38.989999999999995" y={0} className="week 3">
                          <rect x="38.989999999999995" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="38.989999999999995" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="38.989999999999995" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="38.989999999999995" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="38.989999999999995" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="38.989999999999995" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="38.989999999999995" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="50.50999999999999" y={0} className="week 4">
                          <rect x="50.50999999999999" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="50.50999999999999" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="50.50999999999999" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="50.50999999999999" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="50.50999999999999" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="50.50999999999999" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="50.50999999999999" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="62.02999999999999" y={0} className="week 5">
                          <rect x="62.02999999999999" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="62.02999999999999" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="62.02999999999999" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="62.02999999999999" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="62.02999999999999" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="62.02999999999999" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                      </g>
                      <g x="77.97999999999999" y={0} className="month 3">
                        <g x="77.97999999999999" y={0} className="week 1">
                          <rect x="77.97999999999999" y={0} width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="77.97999999999999" y="11.52" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="77.97999999999999" y="23.04" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="77.97999999999999" y="34.56" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="77.97999999999999" y="46.08" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="77.97999999999999" y="57.599999999999994" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="77.97999999999999" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="89.49999999999999" y={0} className="week 2">
                          <rect x="89.49999999999999" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="89.49999999999999" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="89.49999999999999" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="89.49999999999999" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="89.49999999999999" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="89.49999999999999" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="89.49999999999999" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="101.01999999999998" y={0} className="week 3">
                          <rect x="101.01999999999998" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="101.01999999999998" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="101.01999999999998" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="101.01999999999998" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="101.01999999999998" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="101.01999999999998" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="101.01999999999998" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="112.53999999999998" y={0} className="week 4">
                          <rect x="112.53999999999998" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="112.53999999999998" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="112.53999999999998" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="112.53999999999998" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="112.53999999999998" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="112.53999999999998" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="112.53999999999998" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="124.05999999999997" y={0} className="week 5">
                          <rect x="124.05999999999997" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="124.05999999999997" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="124.05999999999997" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="124.05999999999997" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="124.05999999999997" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="124.05999999999997" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="124.05999999999997" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="135.57999999999998" y={0} className="week 6">
                          <rect x="135.57999999999998" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="135.57999999999998" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                      </g>
                      <g x="151.53" y={0} className="month 4">
                        <g x="151.53" y={0} className="week 1">
                          <rect x="151.53" y={0} width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="151.53" y="11.52" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="151.53" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="151.53" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="151.53" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="151.53" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="151.53" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="163.05" y={0} className="week 2">
                          <rect x="163.05" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="163.05" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="163.05" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="163.05" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="163.05" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="163.05" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="163.05" y="69.12" width="8.86" height="8.86" fill="#4CC575" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="174.57000000000002" y={0} className="week 3">
                          <rect x="174.57000000000002" y={0} width="8.86" height="8.86" fill="rgba(44, 181, 93, 0.5)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="174.57000000000002" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="174.57000000000002" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="174.57000000000002" y="34.56" width="8.86" height="8.86" fill="rgba(44, 181, 93, 0.5)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="174.57000000000002" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="174.57000000000002" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="174.57000000000002" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="186.09000000000003" y={0} className="week 4">
                          <rect x="186.09000000000003" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="186.09000000000003" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="186.09000000000003" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="186.09000000000003" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="186.09000000000003" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="186.09000000000003" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="186.09000000000003" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="197.61000000000004" y={0} className="week 5">
                          <rect x="197.61000000000004" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="197.61000000000004" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                      </g>
                      <g x="213.56000000000006" y={0} className="month 5">
                        <g x="213.56000000000006" y={0} className="week 1">
                          <rect x="213.56000000000006" y={0} width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="213.56000000000006" y="11.52" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="213.56000000000006" y="23.04" width="8.86" height="8.86" fill="#6BCF8E" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="213.56000000000006" y="34.56" width="8.86" height="8.86" fill="#6BCF8E" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="213.56000000000006" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="213.56000000000006" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="213.56000000000006" y="69.12" width="8.86" height="8.86" fill="#2CBB5D" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="225.08000000000007" y={0} className="week 2">
                          <rect x="225.08000000000007" y={0} width="8.86" height="8.86" fill="#4CC575" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="225.08000000000007" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="225.08000000000007" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="225.08000000000007" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="225.08000000000007" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="225.08000000000007" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="225.08000000000007" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="236.60000000000008" y={0} className="week 3">
                          <rect x="236.60000000000008" y={0} width="8.86" height="8.86" fill="#4CC575" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="236.60000000000008" y="11.52" width="8.86" height="8.86" fill="rgba(44, 181, 93, 0.5)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="236.60000000000008" y="23.04" width="8.86" height="8.86" fill="#2CBB5D" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="236.60000000000008" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="236.60000000000008" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="236.60000000000008" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="236.60000000000008" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="248.1200000000001" y={0} className="week 4">
                          <rect x="248.1200000000001" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="248.1200000000001" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="248.1200000000001" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="248.1200000000001" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="248.1200000000001" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="248.1200000000001" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="248.1200000000001" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="259.6400000000001" y={0} className="week 5">
                          <rect x="259.6400000000001" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="259.6400000000001" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="259.6400000000001" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="259.6400000000001" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="259.6400000000001" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                      </g>
                      <g x="275.5900000000001" y={0} className="month 6">
                        <g x="275.5900000000001" y={0} className="week 1">
                          <rect x="275.5900000000001" y={0} width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="275.5900000000001" y="11.52" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="275.5900000000001" y="23.04" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="275.5900000000001" y="34.56" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="275.5900000000001" y="46.08" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="275.5900000000001" y="57.599999999999994" width="8.86" height="8.86" fill="#2CBB5D" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="275.5900000000001" y="69.12" width="8.86" height="8.86" fill="#4CC575" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="287.11000000000007" y={0} className="week 2">
                          <rect x="287.11000000000007" y={0} width="8.86" height="8.86" fill="#6BCF8E" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="287.11000000000007" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="287.11000000000007" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="287.11000000000007" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="287.11000000000007" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="287.11000000000007" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="287.11000000000007" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="298.63000000000005" y={0} className="week 3">
                          <rect x="298.63000000000005" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="298.63000000000005" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="298.63000000000005" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="298.63000000000005" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="298.63000000000005" y="46.08" width="8.86" height="8.86" fill="#2CBB5D" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="298.63000000000005" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="298.63000000000005" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="310.15000000000003" y={0} className="week 4">
                          <rect x="310.15000000000003" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="310.15000000000003" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="310.15000000000003" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="310.15000000000003" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="310.15000000000003" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="310.15000000000003" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="310.15000000000003" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="321.67" y={0} className="week 5">
                          <rect x="321.67" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="321.67" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="321.67" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="321.67" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="321.67" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="321.67" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="321.67" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="333.19" y={0} className="week 6" />
                      </g>
                      <g x="349.14" y={0} className="month 7">
                        <g x="349.14" y={0} className="week 1">
                          <rect x="349.14" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="349.14" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="349.14" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="349.14" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="349.14" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="349.14" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="349.14" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="360.65999999999997" y={0} className="week 2">
                          <rect x="360.65999999999997" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="360.65999999999997" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="360.65999999999997" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="360.65999999999997" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="360.65999999999997" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="360.65999999999997" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="360.65999999999997" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="372.17999999999995" y={0} className="week 3">
                          <rect x="372.17999999999995" y={0} width="8.86" height="8.86" fill="#6BCF8E" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="372.17999999999995" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="372.17999999999995" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="372.17999999999995" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="372.17999999999995" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="372.17999999999995" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="372.17999999999995" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="383.69999999999993" y={0} className="week 4">
                          <rect x="383.69999999999993" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="383.69999999999993" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="383.69999999999993" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="383.69999999999993" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="383.69999999999993" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="383.69999999999993" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="383.69999999999993" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="395.2199999999999" y={0} className="week 5">
                          <rect x="395.2199999999999" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="395.2199999999999" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="395.2199999999999" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                      </g>
                      <g x="411.1699999999999" y={0} className="month 8">
                        <g x="411.1699999999999" y={0} className="week 1">
                          <rect x="411.1699999999999" y={0} width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="411.1699999999999" y="11.52" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="411.1699999999999" y="23.04" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="411.1699999999999" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="411.1699999999999" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="411.1699999999999" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="411.1699999999999" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="422.6899999999999" y={0} className="week 2">
                          <rect x="422.6899999999999" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="422.6899999999999" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="422.6899999999999" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="422.6899999999999" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="422.6899999999999" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="422.6899999999999" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="422.6899999999999" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="434.20999999999987" y={0} className="week 3">
                          <rect x="434.20999999999987" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="434.20999999999987" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="434.20999999999987" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="434.20999999999987" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="434.20999999999987" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="434.20999999999987" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="434.20999999999987" y="69.12" width="8.86" height="8.86" fill="#6BCF8E" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="445.72999999999985" y={0} className="week 4">
                          <rect x="445.72999999999985" y={0} width="8.86" height="8.86" fill="#4CC575" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="445.72999999999985" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="445.72999999999985" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="445.72999999999985" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="445.72999999999985" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="445.72999999999985" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="445.72999999999985" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="457.24999999999983" y={0} className="week 5">
                          <rect x="457.24999999999983" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="457.24999999999983" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="457.24999999999983" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="457.24999999999983" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="457.24999999999983" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                      </g>
                      <g x="473.1999999999998" y={0} className="month 9">
                        <g x="473.1999999999998" y={0} className="week 1">
                          <rect x="473.1999999999998" y={0} width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="473.1999999999998" y="11.52" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="473.1999999999998" y="23.04" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="473.1999999999998" y="34.56" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="473.1999999999998" y="46.08" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="473.1999999999998" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="473.1999999999998" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="484.7199999999998" y={0} className="week 2">
                          <rect x="484.7199999999998" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="484.7199999999998" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="484.7199999999998" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="484.7199999999998" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="484.7199999999998" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="484.7199999999998" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="484.7199999999998" y="69.12" width="8.86" height="8.86" fill="#2CBB5D" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="496.2399999999998" y={0} className="week 3">
                          <rect x="496.2399999999998" y={0} width="8.86" height="8.86" fill="rgba(44, 181, 93, 0.5)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="496.2399999999998" y="11.52" width="8.86" height="8.86" fill="#6BCF8E" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="496.2399999999998" y="23.04" width="8.86" height="8.86" fill="#2CBB5D" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="496.2399999999998" y="34.56" width="8.86" height="8.86" fill="#6BCF8E" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="496.2399999999998" y="46.08" width="8.86" height="8.86" fill="#4CC575" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="496.2399999999998" y="57.599999999999994" width="8.86" height="8.86" fill="#6BCF8E" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="496.2399999999998" y="69.12" width="8.86" height="8.86" fill="#6BCF8E" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="507.75999999999976" y={0} className="week 4">
                          <rect x="507.75999999999976" y={0} width="8.86" height="8.86" fill="rgba(44, 181, 93, 0.5)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="507.75999999999976" y="11.52" width="8.86" height="8.86" fill="#4CC575" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="507.75999999999976" y="23.04" width="8.86" height="8.86" fill="#4CC575" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="507.75999999999976" y="34.56" width="8.86" height="8.86" fill="rgba(44, 181, 93, 0.5)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="507.75999999999976" y="46.08" width="8.86" height="8.86" fill="rgba(44, 181, 93, 0.5)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="507.75999999999976" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="507.75999999999976" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="519.2799999999997" y={0} className="week 5">
                          <rect x="519.2799999999997" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="519.2799999999997" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="519.2799999999997" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="519.2799999999997" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="519.2799999999997" y="46.08" width="8.86" height="8.86" fill="rgba(44, 181, 93, 0.5)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="519.2799999999997" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="519.2799999999997" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="530.7999999999997" y={0} className="week 6">
                          <rect x="530.7999999999997" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                      </g>
                      <g x="546.7499999999997" y={0} className="month 10">
                        <g x="546.7499999999997" y={0} className="week 1">
                          <rect x="546.7499999999997" y={0} width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="546.7499999999997" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="546.7499999999997" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="546.7499999999997" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="546.7499999999997" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="546.7499999999997" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="546.7499999999997" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="558.2699999999996" y={0} className="week 2">
                          <rect x="558.2699999999996" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="558.2699999999996" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="558.2699999999996" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="558.2699999999996" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="558.2699999999996" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="558.2699999999996" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="558.2699999999996" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="569.7899999999996" y={0} className="week 3">
                          <rect x="569.7899999999996" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="569.7899999999996" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="569.7899999999996" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="569.7899999999996" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="569.7899999999996" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="569.7899999999996" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="569.7899999999996" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="581.3099999999996" y={0} className="week 4">
                          <rect x="581.3099999999996" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="581.3099999999996" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="581.3099999999996" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="581.3099999999996" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="581.3099999999996" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="581.3099999999996" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="581.3099999999996" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="592.8299999999996" y={0} className="week 5">
                          <rect x="592.8299999999996" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="592.8299999999996" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="592.8299999999996" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="592.8299999999996" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                      </g>
                      <g x="608.7799999999995" y={0} className="month 11">
                        <g x="608.7799999999995" y={0} className="week 1">
                          <rect x="608.7799999999995" y={0} width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="608.7799999999995" y="11.52" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="608.7799999999995" y="23.04" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="608.7799999999995" y="34.56" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="608.7799999999995" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="608.7799999999995" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="608.7799999999995" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="620.2999999999995" y={0} className="week 2">
                          <rect x="620.2999999999995" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="620.2999999999995" y="11.52" width="8.86" height="8.86" fill="#2CBB5D" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="620.2999999999995" y="23.04" width="8.86" height="8.86" fill="rgba(44, 181, 93, 0.5)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="620.2999999999995" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="620.2999999999995" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="620.2999999999995" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(44, 181, 93, 0.5)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="620.2999999999995" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="631.8199999999995" y={0} className="week 3">
                          <rect x="631.8199999999995" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="631.8199999999995" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="631.8199999999995" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="631.8199999999995" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="631.8199999999995" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="631.8199999999995" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="631.8199999999995" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="643.3399999999995" y={0} className="week 4">
                          <rect x="643.3399999999995" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="643.3399999999995" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="643.3399999999995" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="643.3399999999995" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="643.3399999999995" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="643.3399999999995" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="643.3399999999995" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="654.8599999999994" y={0} className="week 5">
                          <rect x="654.8599999999994" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="654.8599999999994" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="654.8599999999994" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="654.8599999999994" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="654.8599999999994" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="654.8599999999994" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                      </g>
                      <g x="670.8099999999994" y={0} className="month 12">
                        <g x="670.8099999999994" y={0} className="week 1">
                          <rect x="670.8099999999994" y={0} width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="670.8099999999994" y="11.52" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="670.8099999999994" y="23.04" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="670.8099999999994" y="34.56" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="670.8099999999994" y="46.08" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="670.8099999999994" y="57.599999999999994" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="670.8099999999994" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="682.3299999999994" y={0} className="week 2">
                          <rect x="682.3299999999994" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="682.3299999999994" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="682.3299999999994" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="682.3299999999994" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="682.3299999999994" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="682.3299999999994" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="682.3299999999994" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="693.8499999999993" y={0} className="week 3">
                          <rect x="693.8499999999993" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="693.8499999999993" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="693.8499999999993" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="693.8499999999993" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="693.8499999999993" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="693.8499999999993" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="693.8499999999993" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="705.3699999999993" y={0} className="week 4">
                          <rect x="705.3699999999993" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="705.3699999999993" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="705.3699999999993" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="705.3699999999993" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="705.3699999999993" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="705.3699999999993" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="705.3699999999993" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="716.8899999999993" y={0} className="week 5">
                          <rect x="716.8899999999993" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="716.8899999999993" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="716.8899999999993" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="716.8899999999993" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="716.8899999999993" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="716.8899999999993" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="716.8899999999993" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="728.4099999999993" y={0} className="week 6">
                          <rect x="728.4099999999993" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="728.4099999999993" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                      </g>
                      <g x="744.3599999999992" y={0} className="month 13">
                        <g x="744.3599999999992" y={0} className="week 1">
                          <rect x="744.3599999999992" y={0} width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="744.3599999999992" y="11.52" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                          <rect x="744.3599999999992" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="744.3599999999992" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="744.3599999999992" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="744.3599999999992" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="744.3599999999992" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="755.8799999999992" y={0} className="week 2">
                          <rect x="755.8799999999992" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="755.8799999999992" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="755.8799999999992" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="755.8799999999992" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="755.8799999999992" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="755.8799999999992" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="755.8799999999992" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="767.3999999999992" y={0} className="week 3">
                          <rect x="767.3999999999992" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="767.3999999999992" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="767.3999999999992" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="767.3999999999992" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="767.3999999999992" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="767.3999999999992" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="767.3999999999992" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="778.9199999999992" y={0} className="week 4">
                          <rect x="778.9199999999992" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="778.9199999999992" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="778.9199999999992" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="778.9199999999992" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="778.9199999999992" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="778.9199999999992" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="778.9199999999992" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                        <g x="790.4399999999991" y={0} className="week 5">
                          <rect x="790.4399999999991" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="790.4399999999991" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          <rect x="790.4399999999991" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                        </g>
                      </g>
                      <text x="30.349999999999998" y="97.14" fill="#AFB4BD" className="font-xs">
                        Dec
                      </text>
                      <text x="98.13999999999999" y="97.14" fill="#AFB4BD" className="font-xs">
                        Jan
                      </text>
                      <text x="165.93" y="97.14" fill="#AFB4BD" className="font-xs">
                        Feb
                      </text>
                      <text x="227.96000000000006" y="97.14" fill="#AFB4BD" className="font-xs">
                        Mar
                      </text>
                      <text x="295.7500000000001" y="97.14" fill="#AFB4BD" className="font-xs">
                        Apr
                      </text>
                      <text x="363.53999999999996" y="97.14" fill="#AFB4BD" className="font-xs">
                        May
                      </text>
                      <text x="425.5699999999999" y="97.14" fill="#AFB4BD" className="font-xs">
                        Jun
                      </text>
                      <text x="493.35999999999984" y="97.14" fill="#AFB4BD" className="font-xs">
                        Jul
                      </text>
                      <text x="561.1499999999996" y="97.14" fill="#AFB4BD" className="font-xs">
                        Aug
                      </text>
                      <text x="623.1799999999995" y="97.14" fill="#AFB4BD" className="font-xs">
                        Sep
                      </text>
                      <text x="690.9699999999993" y="97.14" fill="#AFB4BD" className="font-xs">
                        Oct
                      </text>
                      <text x="758.7599999999992" y="97.14" fill="#AFB4BD" className="font-xs">
                        Nov
                      </text>
                    </svg>
                  </div>
                  <div className="flex h-auto w-full flex-1 items-center overflow-x-auto overflow-y-visible lc-md:hidden">
                    {/* TODO: This is currently static, make it dynamic */}
                    <div className="pb-4">
                      <svg viewBox="0 0 799.3 104.64" width={800}>
                        <g x={0} y={0} className="month 1">
                          <g x={0} y={0} className="week 1">
                            <rect x={0} y={0} width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x={0} y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x={0} y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                        </g>
                        <g x="15.95" y={0} className="month 2">
                          <g x="15.95" y={0} className="week 1">
                            <rect x="15.95" y={0} width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="15.95" y="11.52" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="15.95" y="23.04" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="15.95" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="15.95" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="15.95" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="15.95" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="27.47" y={0} className="week 2">
                            <rect x="27.47" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="27.47" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="27.47" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="27.47" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="27.47" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="27.47" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="27.47" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="38.989999999999995" y={0} className="week 3">
                            <rect x="38.989999999999995" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="38.989999999999995" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="38.989999999999995" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="38.989999999999995" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="38.989999999999995" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="38.989999999999995" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="38.989999999999995" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="50.50999999999999" y={0} className="week 4">
                            <rect x="50.50999999999999" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="50.50999999999999" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="50.50999999999999" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="50.50999999999999" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="50.50999999999999" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="50.50999999999999" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="50.50999999999999" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="62.02999999999999" y={0} className="week 5">
                            <rect x="62.02999999999999" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="62.02999999999999" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="62.02999999999999" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="62.02999999999999" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="62.02999999999999" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="62.02999999999999" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                        </g>
                        <g x="77.97999999999999" y={0} className="month 3">
                          <g x="77.97999999999999" y={0} className="week 1">
                            <rect x="77.97999999999999" y={0} width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="77.97999999999999" y="11.52" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="77.97999999999999" y="23.04" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="77.97999999999999" y="34.56" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="77.97999999999999" y="46.08" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="77.97999999999999" y="57.599999999999994" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="77.97999999999999" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="89.49999999999999" y={0} className="week 2">
                            <rect x="89.49999999999999" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="89.49999999999999" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="89.49999999999999" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="89.49999999999999" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="89.49999999999999" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="89.49999999999999" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="89.49999999999999" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="101.01999999999998" y={0} className="week 3">
                            <rect x="101.01999999999998" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="101.01999999999998" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="101.01999999999998" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="101.01999999999998" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="101.01999999999998" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="101.01999999999998" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="101.01999999999998" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="112.53999999999998" y={0} className="week 4">
                            <rect x="112.53999999999998" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="112.53999999999998" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="112.53999999999998" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="112.53999999999998" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="112.53999999999998" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="112.53999999999998" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="112.53999999999998" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="124.05999999999997" y={0} className="week 5">
                            <rect x="124.05999999999997" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="124.05999999999997" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="124.05999999999997" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="124.05999999999997" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="124.05999999999997" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="124.05999999999997" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="124.05999999999997" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="135.57999999999998" y={0} className="week 6">
                            <rect x="135.57999999999998" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="135.57999999999998" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                        </g>
                        <g x="151.53" y={0} className="month 4">
                          <g x="151.53" y={0} className="week 1">
                            <rect x="151.53" y={0} width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="151.53" y="11.52" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="151.53" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="151.53" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="151.53" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="151.53" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="151.53" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="163.05" y={0} className="week 2">
                            <rect x="163.05" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="163.05" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="163.05" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="163.05" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="163.05" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="163.05" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="163.05" y="69.12" width="8.86" height="8.86" fill="#4CC575" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="174.57000000000002" y={0} className="week 3">
                            <rect x="174.57000000000002" y={0} width="8.86" height="8.86" fill="rgba(44, 181, 93, 0.5)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="174.57000000000002" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="174.57000000000002" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="174.57000000000002" y="34.56" width="8.86" height="8.86" fill="rgba(44, 181, 93, 0.5)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="174.57000000000002" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="174.57000000000002" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="174.57000000000002" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="186.09000000000003" y={0} className="week 4">
                            <rect x="186.09000000000003" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="186.09000000000003" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="186.09000000000003" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="186.09000000000003" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="186.09000000000003" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="186.09000000000003" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="186.09000000000003" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="197.61000000000004" y={0} className="week 5">
                            <rect x="197.61000000000004" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="197.61000000000004" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                        </g>
                        <g x="213.56000000000006" y={0} className="month 5">
                          <g x="213.56000000000006" y={0} className="week 1">
                            <rect x="213.56000000000006" y={0} width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="213.56000000000006" y="11.52" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="213.56000000000006" y="23.04" width="8.86" height="8.86" fill="#6BCF8E" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="213.56000000000006" y="34.56" width="8.86" height="8.86" fill="#6BCF8E" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="213.56000000000006" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="213.56000000000006" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="213.56000000000006" y="69.12" width="8.86" height="8.86" fill="#2CBB5D" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="225.08000000000007" y={0} className="week 2">
                            <rect x="225.08000000000007" y={0} width="8.86" height="8.86" fill="#4CC575" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="225.08000000000007" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="225.08000000000007" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="225.08000000000007" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="225.08000000000007" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="225.08000000000007" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="225.08000000000007" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="236.60000000000008" y={0} className="week 3">
                            <rect x="236.60000000000008" y={0} width="8.86" height="8.86" fill="#4CC575" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="236.60000000000008" y="11.52" width="8.86" height="8.86" fill="rgba(44, 181, 93, 0.5)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="236.60000000000008" y="23.04" width="8.86" height="8.86" fill="#2CBB5D" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="236.60000000000008" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="236.60000000000008" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="236.60000000000008" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="236.60000000000008" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="248.1200000000001" y={0} className="week 4">
                            <rect x="248.1200000000001" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="248.1200000000001" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="248.1200000000001" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="248.1200000000001" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="248.1200000000001" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="248.1200000000001" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="248.1200000000001" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="259.6400000000001" y={0} className="week 5">
                            <rect x="259.6400000000001" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="259.6400000000001" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="259.6400000000001" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="259.6400000000001" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="259.6400000000001" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                        </g>
                        <g x="275.5900000000001" y={0} className="month 6">
                          <g x="275.5900000000001" y={0} className="week 1">
                            <rect x="275.5900000000001" y={0} width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="275.5900000000001" y="11.52" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="275.5900000000001" y="23.04" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="275.5900000000001" y="34.56" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="275.5900000000001" y="46.08" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="275.5900000000001" y="57.599999999999994" width="8.86" height="8.86" fill="#2CBB5D" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="275.5900000000001" y="69.12" width="8.86" height="8.86" fill="#4CC575" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="287.11000000000007" y={0} className="week 2">
                            <rect x="287.11000000000007" y={0} width="8.86" height="8.86" fill="#6BCF8E" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="287.11000000000007" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="287.11000000000007" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="287.11000000000007" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="287.11000000000007" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="287.11000000000007" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="287.11000000000007" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="298.63000000000005" y={0} className="week 3">
                            <rect x="298.63000000000005" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="298.63000000000005" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="298.63000000000005" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="298.63000000000005" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="298.63000000000005" y="46.08" width="8.86" height="8.86" fill="#2CBB5D" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="298.63000000000005" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="298.63000000000005" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="310.15000000000003" y={0} className="week 4">
                            <rect x="310.15000000000003" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="310.15000000000003" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="310.15000000000003" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="310.15000000000003" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="310.15000000000003" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="310.15000000000003" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="310.15000000000003" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="321.67" y={0} className="week 5">
                            <rect x="321.67" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="321.67" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="321.67" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="321.67" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="321.67" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="321.67" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="321.67" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="333.19" y={0} className="week 6" />
                        </g>
                        <g x="349.14" y={0} className="month 7">
                          <g x="349.14" y={0} className="week 1">
                            <rect x="349.14" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="349.14" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="349.14" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="349.14" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="349.14" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="349.14" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="349.14" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="360.65999999999997" y={0} className="week 2">
                            <rect x="360.65999999999997" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="360.65999999999997" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="360.65999999999997" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="360.65999999999997" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="360.65999999999997" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="360.65999999999997" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="360.65999999999997" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="372.17999999999995" y={0} className="week 3">
                            <rect x="372.17999999999995" y={0} width="8.86" height="8.86" fill="#6BCF8E" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="372.17999999999995" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="372.17999999999995" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="372.17999999999995" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="372.17999999999995" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="372.17999999999995" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="372.17999999999995" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="383.69999999999993" y={0} className="week 4">
                            <rect x="383.69999999999993" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="383.69999999999993" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="383.69999999999993" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="383.69999999999993" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="383.69999999999993" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="383.69999999999993" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="383.69999999999993" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="395.2199999999999" y={0} className="week 5">
                            <rect x="395.2199999999999" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="395.2199999999999" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="395.2199999999999" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                        </g>
                        <g x="411.1699999999999" y={0} className="month 8">
                          <g x="411.1699999999999" y={0} className="week 1">
                            <rect x="411.1699999999999" y={0} width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="411.1699999999999" y="11.52" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="411.1699999999999" y="23.04" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="411.1699999999999" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="411.1699999999999" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="411.1699999999999" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="411.1699999999999" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="422.6899999999999" y={0} className="week 2">
                            <rect x="422.6899999999999" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="422.6899999999999" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="422.6899999999999" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="422.6899999999999" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="422.6899999999999" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="422.6899999999999" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="422.6899999999999" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="434.20999999999987" y={0} className="week 3">
                            <rect x="434.20999999999987" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="434.20999999999987" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="434.20999999999987" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="434.20999999999987" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="434.20999999999987" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="434.20999999999987" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="434.20999999999987" y="69.12" width="8.86" height="8.86" fill="#6BCF8E" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="445.72999999999985" y={0} className="week 4">
                            <rect x="445.72999999999985" y={0} width="8.86" height="8.86" fill="#4CC575" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="445.72999999999985" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="445.72999999999985" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="445.72999999999985" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="445.72999999999985" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="445.72999999999985" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="445.72999999999985" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="457.24999999999983" y={0} className="week 5">
                            <rect x="457.24999999999983" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="457.24999999999983" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="457.24999999999983" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="457.24999999999983" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="457.24999999999983" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                        </g>
                        <g x="473.1999999999998" y={0} className="month 9">
                          <g x="473.1999999999998" y={0} className="week 1">
                            <rect x="473.1999999999998" y={0} width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="473.1999999999998" y="11.52" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="473.1999999999998" y="23.04" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="473.1999999999998" y="34.56" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="473.1999999999998" y="46.08" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="473.1999999999998" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="473.1999999999998" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="484.7199999999998" y={0} className="week 2">
                            <rect x="484.7199999999998" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="484.7199999999998" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="484.7199999999998" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="484.7199999999998" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="484.7199999999998" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="484.7199999999998" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="484.7199999999998" y="69.12" width="8.86" height="8.86" fill="#2CBB5D" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="496.2399999999998" y={0} className="week 3">
                            <rect x="496.2399999999998" y={0} width="8.86" height="8.86" fill="rgba(44, 181, 93, 0.5)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="496.2399999999998" y="11.52" width="8.86" height="8.86" fill="#6BCF8E" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="496.2399999999998" y="23.04" width="8.86" height="8.86" fill="#2CBB5D" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="496.2399999999998" y="34.56" width="8.86" height="8.86" fill="#6BCF8E" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="496.2399999999998" y="46.08" width="8.86" height="8.86" fill="#4CC575" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="496.2399999999998" y="57.599999999999994" width="8.86" height="8.86" fill="#6BCF8E" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="496.2399999999998" y="69.12" width="8.86" height="8.86" fill="#6BCF8E" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="507.75999999999976" y={0} className="week 4">
                            <rect x="507.75999999999976" y={0} width="8.86" height="8.86" fill="rgba(44, 181, 93, 0.5)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="507.75999999999976" y="11.52" width="8.86" height="8.86" fill="#4CC575" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="507.75999999999976" y="23.04" width="8.86" height="8.86" fill="#4CC575" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="507.75999999999976" y="34.56" width="8.86" height="8.86" fill="rgba(44, 181, 93, 0.5)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="507.75999999999976" y="46.08" width="8.86" height="8.86" fill="rgba(44, 181, 93, 0.5)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="507.75999999999976" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="507.75999999999976" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="519.2799999999997" y={0} className="week 5">
                            <rect x="519.2799999999997" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="519.2799999999997" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="519.2799999999997" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="519.2799999999997" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="519.2799999999997" y="46.08" width="8.86" height="8.86" fill="rgba(44, 181, 93, 0.5)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="519.2799999999997" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="519.2799999999997" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="530.7999999999997" y={0} className="week 6">
                            <rect x="530.7999999999997" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                        </g>
                        <g x="546.7499999999997" y={0} className="month 10">
                          <g x="546.7499999999997" y={0} className="week 1">
                            <rect x="546.7499999999997" y={0} width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="546.7499999999997" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="546.7499999999997" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="546.7499999999997" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="546.7499999999997" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="546.7499999999997" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="546.7499999999997" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="558.2699999999996" y={0} className="week 2">
                            <rect x="558.2699999999996" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="558.2699999999996" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="558.2699999999996" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="558.2699999999996" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="558.2699999999996" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="558.2699999999996" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="558.2699999999996" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="569.7899999999996" y={0} className="week 3">
                            <rect x="569.7899999999996" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="569.7899999999996" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="569.7899999999996" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="569.7899999999996" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="569.7899999999996" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="569.7899999999996" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="569.7899999999996" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="581.3099999999996" y={0} className="week 4">
                            <rect x="581.3099999999996" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="581.3099999999996" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="581.3099999999996" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="581.3099999999996" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="581.3099999999996" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="581.3099999999996" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="581.3099999999996" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="592.8299999999996" y={0} className="week 5">
                            <rect x="592.8299999999996" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="592.8299999999996" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="592.8299999999996" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="592.8299999999996" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                        </g>
                        <g x="608.7799999999995" y={0} className="month 11">
                          <g x="608.7799999999995" y={0} className="week 1">
                            <rect x="608.7799999999995" y={0} width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="608.7799999999995" y="11.52" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="608.7799999999995" y="23.04" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="608.7799999999995" y="34.56" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="608.7799999999995" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="608.7799999999995" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="608.7799999999995" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="620.2999999999995" y={0} className="week 2">
                            <rect x="620.2999999999995" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="620.2999999999995" y="11.52" width="8.86" height="8.86" fill="#2CBB5D" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="620.2999999999995" y="23.04" width="8.86" height="8.86" fill="rgba(44, 181, 93, 0.5)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="620.2999999999995" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="620.2999999999995" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="620.2999999999995" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(44, 181, 93, 0.5)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="620.2999999999995" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="631.8199999999995" y={0} className="week 3">
                            <rect x="631.8199999999995" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="631.8199999999995" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="631.8199999999995" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="631.8199999999995" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="631.8199999999995" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="631.8199999999995" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="631.8199999999995" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="643.3399999999995" y={0} className="week 4">
                            <rect x="643.3399999999995" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="643.3399999999995" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="643.3399999999995" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="643.3399999999995" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="643.3399999999995" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="643.3399999999995" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="643.3399999999995" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="654.8599999999994" y={0} className="week 5">
                            <rect x="654.8599999999994" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="654.8599999999994" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="654.8599999999994" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="654.8599999999994" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="654.8599999999994" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="654.8599999999994" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                        </g>
                        <g x="670.8099999999994" y={0} className="month 12">
                          <g x="670.8099999999994" y={0} className="week 1">
                            <rect x="670.8099999999994" y={0} width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="670.8099999999994" y="11.52" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="670.8099999999994" y="23.04" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="670.8099999999994" y="34.56" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="670.8099999999994" y="46.08" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="670.8099999999994" y="57.599999999999994" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="670.8099999999994" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="682.3299999999994" y={0} className="week 2">
                            <rect x="682.3299999999994" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="682.3299999999994" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="682.3299999999994" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="682.3299999999994" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="682.3299999999994" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="682.3299999999994" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="682.3299999999994" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="693.8499999999993" y={0} className="week 3">
                            <rect x="693.8499999999993" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="693.8499999999993" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="693.8499999999993" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="693.8499999999993" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="693.8499999999993" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="693.8499999999993" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="693.8499999999993" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="705.3699999999993" y={0} className="week 4">
                            <rect x="705.3699999999993" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="705.3699999999993" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="705.3699999999993" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="705.3699999999993" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="705.3699999999993" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="705.3699999999993" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="705.3699999999993" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="716.8899999999993" y={0} className="week 5">
                            <rect x="716.8899999999993" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="716.8899999999993" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="716.8899999999993" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="716.8899999999993" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="716.8899999999993" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="716.8899999999993" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="716.8899999999993" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="728.4099999999993" y={0} className="week 6">
                            <rect x="728.4099999999993" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="728.4099999999993" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                        </g>
                        <g x="744.3599999999992" y={0} className="month 13">
                          <g x="744.3599999999992" y={0} className="week 1">
                            <rect x="744.3599999999992" y={0} width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="744.3599999999992" y="11.52" width="8.86" height="8.86" fill="transparent" rx={2} ry={2} />
                            <rect x="744.3599999999992" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="744.3599999999992" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="744.3599999999992" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="744.3599999999992" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="744.3599999999992" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="755.8799999999992" y={0} className="week 2">
                            <rect x="755.8799999999992" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="755.8799999999992" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="755.8799999999992" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="755.8799999999992" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="755.8799999999992" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="755.8799999999992" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="755.8799999999992" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="767.3999999999992" y={0} className="week 3">
                            <rect x="767.3999999999992" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="767.3999999999992" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="767.3999999999992" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="767.3999999999992" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="767.3999999999992" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="767.3999999999992" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="767.3999999999992" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="778.9199999999992" y={0} className="week 4">
                            <rect x="778.9199999999992" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="778.9199999999992" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="778.9199999999992" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="778.9199999999992" y="34.56" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="778.9199999999992" y="46.08" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="778.9199999999992" y="57.599999999999994" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="778.9199999999992" y="69.12" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                          <g x="790.4399999999991" y={0} className="week 5">
                            <rect x="790.4399999999991" y={0} width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="790.4399999999991" y="11.52" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                            <rect x="790.4399999999991" y="23.04" width="8.86" height="8.86" fill="rgba(255, 255, 255, 0.1)" rx={2} ry={2} className="cursor-pointer" />
                          </g>
                        </g>
                        <text x="30.349999999999998" y="97.14" fill="#AFB4BD" className="font-xs">
                          Dec
                        </text>
                        <text x="98.13999999999999" y="97.14" fill="#AFB4BD" className="font-xs">
                          Jan
                        </text>
                        <text x="165.93" y="97.14" fill="#AFB4BD" className="font-xs">
                          Feb
                        </text>
                        <text x="227.96000000000006" y="97.14" fill="#AFB4BD" className="font-xs">
                          Mar
                        </text>
                        <text x="295.7500000000001" y="97.14" fill="#AFB4BD" className="font-xs">
                          Apr
                        </text>
                        <text x="363.53999999999996" y="97.14" fill="#AFB4BD" className="font-xs">
                          May
                        </text>
                        <text x="425.5699999999999" y="97.14" fill="#AFB4BD" className="font-xs">
                          Jun
                        </text>
                        <text x="493.35999999999984" y="97.14" fill="#AFB4BD" className="font-xs">
                          Jul
                        </text>
                        <text x="561.1499999999996" y="97.14" fill="#AFB4BD" className="font-xs">
                          Aug
                        </text>
                        <text x="623.1799999999995" y="97.14" fill="#AFB4BD" className="font-xs">
                          Sep
                        </text>
                        <text x="690.9699999999993" y="97.14" fill="#AFB4BD" className="font-xs">
                          Oct
                        </text>
                        <text x="758.7599999999992" y="97.14" fill="#AFB4BD" className="font-xs">
                          Nov
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-slate-100 bg-[#1a253c] drop-shadow-xl dark:shadow-dark-level3 bg-layer-1 dark:bg-dark-layer-1 rounded-lg px-4 pt-4 pb-4">
                  <div className="space-y-[18px]">
                    <div className="text-label-2 dark:text-dark-label-2 flex w-full items-center">
                      <div className="cursor-pointer">
                        <div className="bg-[#253559]   bg-fill-3 dark:bg-dark-fill-3 flex items-center rounded-[5px] px-5 py-[10px] font-medium lc-md:space-x-2 hover: dark:hover:text-dark-label-1">
                          <span className="hidden text-2xl lc-md:inline">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                              <path
                                fillRule="evenodd"
                                d="M20.995 4.824A3 3 0 0018 2H6l-.176.005A3 3 0 003 5v14l.005.176A3 3 0 006 22h12l.176-.005A3 3 0 0021 19V5l-.005-.176zM6 4h12l.117.007A1 1 0 0119 5v14l-.007.117A1 1 0 0118 20H6l-.117-.007A1 1 0 015 19V5l.007-.117A1 1 0 016 4zm5.718 9.304a1 1 0 01.063 1.321l-.085.093-2.062 2a1 1 0 01-1.3.08l-.093-.08-.937-.91A1 1 0 018.6 14.292l.095.082.241.234 1.367-1.325a1 1 0 011.414.022zM17 15a1 1 0 00-1-1h-2l-.117.007A1 1 0 0014 16h2l.117-.007A1 1 0 0017 15zm-5.282-7.696a1 1 0 01.063 1.321l-.085.093-2.062 2a1 1 0 01-1.3.08l-.093-.08-.937-.91A1 1 0 018.6 8.292l.095.082.241.234 1.367-1.325a1 1 0 011.414.022zM17 9a1 1 0 00-1-1h-2l-.117.007A1 1 0 0014 10h2l.117-.007A1 1 0 0017 9z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          <span className="whitespace-nowrap">Recent AC</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      {data.recentAC.map((item, idx) => (
                        <a key={idx} className="flex h-[56px] items-center rounded px-4 bg-fill-4 dark:bg-dark-fill-4" target="_blank" href={item.url}>
                          <div className="flex flex-1 justify-between">
                            <span className="  font-medium line-clamp-1">{item.title}</span>
                            <span className="  hidden whitespace-nowrap lc-md:inline">{item.relativeDate}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
