import { ConnectButton } from "@rainbow-me/rainbowkit";
import Router from "next/router";
import Head from "next/head";
import { useAccount } from "wagmi";
import FeedPushApi from "./../components/FeedPushApi";

export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount();
  if (!isDisconnected && !isConnecting) {
    fetch("http://localhost:3000/api/users/createUser?name=Anon&ethAdress=" + address);
  }
  return (
    <div>
      <Head>
        <title>DeCode</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <FeedPushApi />
        {/* bg-primary */}
        <div className="w-full min-h-screen bg-[#111827] font-inter text-grey-300">
          <section>
            <div className="px-6 pt-16 sm:px-14">
              <nav className="flex items-center justify-between">
                <div className="flex items-center">
                  <a href="#" className="flex items-center">
                    <img src="./logo.svg" alt="" />
                    <span className="text-2xl font-medium text-white font-rubik">DeCode</span>
                  </a>
                  <ul className="items-center hidden pl-12 space-x-6 text-gray-300 md:flex">
                    <li>
                      <a href="#">How it works</a>
                    </li>
                    <li>
                      <a href="#">Rewards</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                  </ul>
                </div>
                <ConnectButton />
              </nav>
              <FeedPushApi />
            </div>
            <div className="px-6 py-32 sm:px-14 xl:px-40">
              <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
                <div className="flex flex-col max-w-xl text-left sm:items-center sm:text-center lg:text-left lg:items-start">
                  <h1 className="text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:max-w-lg md:text-7xl leading-tighter font-rubik bg-clip-text bg-gradient-to-r from-secondary to-tertiary">
                    Decentralized Coding Contest
                  </h1>
                  <p className="pr-12 text-base leading-relaxed text-gray-300 sm:pr-0 sm:text-lg lg:max-w-lg font-inter pt-7">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed obcaecati perferendis necessitatibus sint
                  </p>
                  <div className="flex flex-col min-w-full pt-10 space-y-4 md:space-y-0 md:flex-row md:items-center md:space-x-4">
                    <button
                      className="px-6 bx-10 py-4 font-bold text-white bg-green rounded-xl whitespace-nowrap"
                      onClick={() => {
                        Router.push("/contests");
                      }}
                    >
                      Get Started
                    </button>
                  </div>
                  {/* <div className="pt-20">
                    <div className="flex flex-col items-center space-y-2 text-gray-800 md:space-x-10 md:space-y-0 md:flex-row">
                      <span className="text-sm">Support</span>

                      <div className="flex items-center justify-center space-x-6 md:space-x-10">
                        <a href="#" className="hover:text-white">
                          <svg className="w-10 h-10 fill-current" viewBox="0 0 32 32" fill="none">
                            <path d="M16 13.146C14.427 13.146 13.146 14.427 13.146 16C13.146 17.573 14.427 18.854 16 18.854C17.573 18.854 18.854 17.573 18.854 16C18.854 14.427 17.573 13.146 16 13.146ZM8.01 21.672L7.38 21.516C2.692 20.328 0 18.318 0 15.995C0 13.672 2.693 11.662 7.38 10.474L8.01 10.318L8.187 10.943C8.66257 12.58 9.27058 14.1756 10.005 15.714L10.14 15.995L10.005 16.281C9.26904 17.8187 8.66099 19.4145 8.187 21.052L8.01 21.672ZM7.089 11.932C3.526 12.932 1.339 14.468 1.339 15.995C1.339 17.522 3.527 19.052 7.089 20.058C7.52565 18.6706 8.05278 17.3134 8.667 15.995C8.05192 14.677 7.52477 13.3197 7.089 11.932V11.932ZM23.99 21.672L23.813 21.047C23.3383 19.4113 22.7302 17.8173 21.995 16.281L21.86 15.995L21.995 15.709C22.731 14.1713 23.339 12.5756 23.813 10.938L23.99 10.318L24.62 10.474C29.308 11.662 32 13.672 32 15.995C32 18.318 29.307 20.328 24.62 21.516L23.99 21.672ZM23.333 15.995C23.9493 17.3125 24.4764 18.6699 24.911 20.058C28.479 19.053 30.661 17.522 30.661 15.995C30.661 14.468 28.473 12.938 24.911 11.932C24.4733 13.319 23.9462 14.6762 23.333 15.995ZM7.078 11.927L6.901 11.302C5.583 6.656 5.984 3.323 8 2.161C9.979 1.02 13.151 2.369 16.479 5.786L16.932 6.25L16.479 6.714C15.2972 7.94363 14.2173 9.26732 13.25 10.672L13.068 10.927L12.755 10.953C11.0535 11.0873 9.36563 11.3592 7.708 11.766L7.078 11.927ZM9.609 3.089C9.25 3.089 8.932 3.162 8.666 3.318C7.343 4.084 7.109 6.74 8.02 10.323C9.44145 10.005 10.8822 9.78056 12.333 9.651C13.1683 8.46139 14.0816 7.32856 15.067 6.26C12.989 4.234 11.02 3.088 9.609 3.088V3.089ZM22.396 30.234C22.391 30.234 22.391 30.234 22.396 30.234C20.495 30.234 18.052 28.807 15.521 26.203L15.068 25.739L15.521 25.275C16.7028 24.0454 17.7827 22.7217 18.75 21.317L18.927 21.062L19.24 21.031C20.9437 20.9012 22.6336 20.6293 24.292 20.218L24.922 20.062L25.099 20.687C26.417 25.333 26.016 28.661 24 29.822C23.5126 30.1021 22.9581 30.2442 22.396 30.233V30.234ZM16.932 25.729C19.01 27.755 20.979 28.901 22.39 28.901H22.395C22.749 28.901 23.067 28.823 23.333 28.672C24.656 27.906 24.896 25.25 23.979 21.667C22.5578 21.9853 21.1169 22.2081 19.666 22.334C18.8308 23.5252 17.9174 24.6597 16.932 25.73V25.729ZM24.922 11.927L24.292 11.766C22.6324 11.3606 20.943 11.0887 19.24 10.953L18.927 10.927L18.75 10.672C17.7827 9.26732 16.7028 7.94363 15.521 6.714L15.068 6.25L15.521 5.786C18.849 2.369 22.021 1.02 24 2.161C26.016 3.322 26.417 6.656 25.099 11.302L24.922 11.927ZM19.667 9.651C21.1178 9.78021 22.5586 10.0047 23.98 10.323C24.897 6.74 24.657 4.083 23.334 3.318C22.016 2.558 19.537 3.724 16.933 6.261C17.9157 7.33186 18.8289 8.46451 19.667 9.652V9.651ZM9.609 30.234C9.046 30.244 8.489 30.104 8 29.823C5.984 28.662 5.583 25.333 6.901 20.688L7.078 20.063L7.708 20.219C9.25 20.61 10.948 20.88 12.755 21.032L13.068 21.063L13.245 21.318C14.2123 22.7227 15.2922 24.0464 16.474 25.276L16.927 25.74L16.474 26.204C13.948 28.808 11.505 30.235 9.609 30.235V30.234ZM8.021 21.667C7.104 25.25 7.344 27.907 8.667 28.672C9.985 29.422 12.459 28.266 15.068 25.729C14.0826 24.6587 13.1692 23.5242 12.334 22.333C10.883 22.2075 9.44211 21.9847 8.021 21.666V21.667ZM16 22.505C14.901 22.505 13.776 22.458 12.646 22.364L12.333 22.338L12.151 22.078C11.5127 21.1609 10.9132 20.2174 10.354 19.25C9.79365 18.2826 9.27419 17.292 8.797 16.281L8.662 15.995L8.797 15.709C9.75303 13.6874 10.8749 11.7484 12.151 9.912L12.333 9.652L12.646 9.626C14.878 9.43801 17.122 9.43801 19.354 9.626L19.667 9.652L19.849 9.912C21.1268 11.7474 22.2487 13.6865 23.203 15.709L23.338 15.995L23.203 16.281C22.2506 18.3045 21.1286 20.2438 19.849 22.078L19.667 22.338L19.354 22.364C18.2384 22.4574 17.1195 22.5044 16 22.505V22.505ZM13.073 21.057C15.042 21.208 16.958 21.208 18.932 21.057C20.0329 19.4449 21.0113 17.7525 21.859 15.994C21.0149 14.2326 20.0346 12.5398 18.927 10.931C16.9786 10.78 15.0214 10.78 13.073 10.931C11.9646 12.5393 10.9843 14.2322 10.141 15.994C10.9889 17.7534 11.9691 19.4459 13.073 21.057V21.057Z" />
                          </svg>
                        </a>
                        <a href="#" className="hover:text-white">
                          <svg className="w-10 h-10 fill-current" viewBox="0 0 32 32" fill="none">
                            <g clipPath="url(#clip0)">
                              <path d="M18.7339 3.667L25.3119 7.469C25.618 7.14731 25.9948 6.90124 26.4124 6.75024C26.83 6.59923 27.277 6.54744 27.718 6.59895C28.1591 6.65045 28.5821 6.80385 28.9537 7.04701C29.3253 7.29017 29.6352 7.61643 29.8589 8C30.0801 8.385 30.2085 8.81621 30.234 9.25946C30.2595 9.70271 30.1815 10.1458 30.0061 10.5537C29.8306 10.9615 29.5626 11.3229 29.2232 11.6092C28.8839 11.8955 28.4825 12.0988 28.0509 12.203V19.802C28.4833 19.904 28.8856 20.106 29.2258 20.3917C29.566 20.6774 29.8344 21.0388 30.0096 21.447C30.1849 21.8552 30.262 22.2987 30.2347 22.7421C30.2075 23.1855 30.0768 23.6163 29.8529 24C29.6266 24.3907 29.311 24.7223 28.9319 24.9675C28.5528 25.2127 28.1209 25.3647 27.6718 25.411C27.2227 25.4572 26.7689 25.3964 26.3478 25.2335C25.9267 25.0707 25.5501 24.8104 25.2489 24.474L18.7069 28.25C18.8487 28.6787 18.8867 29.135 18.8178 29.5813C18.749 30.0276 18.5752 30.4512 18.3107 30.8173C18.0463 31.1833 17.6987 31.4814 17.2967 31.687C16.8946 31.8926 16.4495 31.9999 15.9979 32C15.5541 32.0003 15.1163 31.897 14.7194 31.6982C14.3226 31.4994 13.9776 31.2107 13.7121 30.855C13.4465 30.4993 13.2677 30.0866 13.1899 29.6496C13.1121 29.2126 13.1375 28.7635 13.2639 28.338L6.68094 24.541C6.42242 24.8127 6.11282 25.0308 5.76988 25.1826C5.42694 25.3344 5.0574 25.4171 4.68245 25.4258C4.3075 25.4345 3.93451 25.3692 3.58487 25.2335C3.23523 25.0978 2.91582 24.8944 2.64494 24.635C2.27592 24.2802 2.00893 23.8328 1.87186 23.3396C1.73479 22.8464 1.73266 22.3254 1.86569 21.8311C1.99872 21.3368 2.26204 20.8872 2.62814 20.5294C2.99424 20.1716 3.44969 19.9187 3.94694 19.797V12.198C3.54836 12.1031 3.1749 11.9235 2.85198 11.6713C2.52907 11.4191 2.26428 11.1003 2.07564 10.7366C1.887 10.3729 1.77894 9.97284 1.75881 9.56362C1.73869 9.1544 1.80697 8.74565 1.95901 8.36519C2.11105 7.98472 2.34328 7.64149 2.63989 7.35884C2.93649 7.07619 3.29052 6.86077 3.67787 6.72724C4.06521 6.59371 4.47678 6.5452 4.88456 6.58502C5.29233 6.62484 5.68674 6.75205 6.04094 6.958C6.27494 7.093 6.49394 7.26 6.68194 7.458L13.2649 3.661C13.0502 2.93643 13.1321 2.15625 13.4925 1.49203C13.853 0.827807 14.4624 0.333928 15.1869 0.118998C15.6796 -0.0282994 16.2029 -0.0395825 16.7014 0.0863446C17.1999 0.212272 17.6551 0.470718 18.0186 0.834296C18.3822 1.19787 18.6407 1.65304 18.7666 2.15156C18.8925 2.65007 18.8812 3.17337 18.7339 3.666V3.667ZM18.0469 4.839C18.0209 4.865 17.9999 4.891 17.9689 4.917L26.5839 19.834C26.6199 19.824 26.6619 19.813 26.6929 19.803V12.194C26.3301 12.1043 25.9885 11.9438 25.6878 11.7218C25.3871 11.4999 25.1332 11.2207 24.9406 10.9004C24.748 10.58 24.6206 10.2248 24.5655 9.85514C24.5105 9.48545 24.529 9.10853 24.6199 8.746C24.6249 8.715 24.6359 8.678 24.6409 8.647L18.0469 4.839ZM14.0259 4.917L13.9479 4.839L7.35394 8.641C7.56276 9.36689 7.47489 10.146 7.10963 10.8071C6.74437 11.4683 6.1316 11.9574 5.40594 12.167L5.30194 12.193V19.802L5.41693 19.833L14.0319 4.916L14.0259 4.917ZM16.7969 5.594C16.2773 5.74 15.7275 5.74 15.2079 5.594L6.59294 20.511C6.98394 20.886 7.25994 21.37 7.39494 21.902H24.6089C24.7389 21.371 25.0149 20.886 25.4109 20.506L16.7969 5.594ZM18.1089 27.229L24.6609 23.443C24.6399 23.38 24.6249 23.318 24.6089 23.255H7.38994L7.35894 23.364L13.9479 27.166C14.2136 26.8901 14.5324 26.6708 14.885 26.5213C15.2377 26.3718 15.6169 26.2951 15.9999 26.296C16.8389 26.296 17.5889 26.655 18.1089 27.228V27.229Z" />
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect width={32} height={32} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                        <a href="#" className="hover:text-white">
                          <svg className="w-10 h-10 fill-current" viewBox="0 0 32 32" fill="none">
                            <path d="M24.306 4.019H19.5L16 9.556L13 4.019H2L16 28L30 4.019H24.306ZM5.481 6.019H8.844L16 18.406L23.15 6.019H26.513L16.001 24.031L5.481 6.019Z" />
                          </svg>
                        </a>
                        <a href="#" className="hover:text-white">
                          <svg className="w-16 h-16 fill-current" viewBox="0 0 32 32" fill="none">
                            <g clipPath="url(#clip0)">
                              <path d="M8.24988 10.435L6.08488 10.895L6.07488 18.015C6.07488 19.33 7.06488 20.18 8.37988 20.18C9.10988 20.18 9.64488 20.045 9.93988 19.885V18.195C9.65488 18.31 8.25488 18.72 8.25488 17.41V14.25H9.93988V12.36H8.25488L8.24988 10.435ZM12.7049 13.015L12.5699 12.36H10.6499V20.02H12.8649V14.865C13.3899 14.175 14.2749 14.31 14.5599 14.4V12.36C14.2599 12.255 13.2249 12.06 12.7049 13.015V13.015ZM17.3199 9.4L15.0899 9.875V11.685L17.3199 11.21V9.4ZM2.24488 14.615C2.24488 14.27 2.53488 14.135 2.99988 14.13C3.67488 14.13 4.53488 14.335 5.20988 14.7V12.61C4.50735 12.3359 3.75896 12.1984 3.00488 12.205C1.20488 12.205 0.00488281 13.145 0.00488281 14.715C0.00488281 17.175 3.37988 16.775 3.37988 17.835C3.37988 18.245 3.02488 18.38 2.52988 18.38C1.79488 18.38 0.844883 18.075 0.0998828 17.67V19.67C0.924883 20.025 1.75988 20.175 2.52488 20.175C4.36988 20.175 5.63988 19.385 5.63988 17.785C5.63988 15.14 2.24488 15.615 2.24488 14.615V14.615ZM31.9999 16.28C31.9999 14.005 30.8999 12.21 28.7899 12.21C26.6799 12.21 25.3949 14.005 25.3949 16.265C25.3949 18.94 26.9099 20.175 29.0699 20.175C30.1299 20.175 30.9249 19.935 31.5299 19.6V17.93C30.9249 18.235 30.2299 18.42 29.3499 18.42C28.4849 18.42 27.7249 18.115 27.6249 17.075H31.9699C31.9799 16.96 31.9999 16.495 31.9999 16.28V16.28ZM27.6049 15.44C27.6049 14.44 28.2199 14.02 28.7749 14.02C29.3199 14.02 29.8999 14.44 29.8999 15.44H27.6049ZM21.9599 12.21C21.0899 12.21 20.5299 12.62 20.2199 12.905L20.1049 12.355H18.1499V22.595L20.3699 22.125L20.3749 19.615C20.6949 19.85 21.1699 20.175 21.9449 20.175C23.5349 20.175 24.9849 19.015 24.9849 16.195C24.9899 13.615 23.5199 12.21 21.9599 12.21V12.21ZM21.4299 18.335C20.9099 18.335 20.5999 18.145 20.3849 17.915L20.3699 14.615C20.5999 14.36 20.9199 14.175 21.4299 14.175C22.2399 14.175 22.7999 15.085 22.7999 16.245C22.8049 17.44 22.2549 18.335 21.4299 18.335V18.335ZM15.0949 20.02H17.3249V12.36H15.0949V20.02Z" />
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect width={32} height={32} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="hidden w-full pt-10 md:justify-center md:flex lg:block lg:pl-20 lg:pt-0">
                  <img src="./blockchain.svg" alt="blockchain" />
                </div>
              </div>
            </div>

            <section className="px-6 py-32 sm:px-14 lg:px-24 xl:px-54">
              <div className="flex items-center justify-center">
                <h2 className="text-4xl font-bold tracking-tight text-center text-white sm:text-5xl md:text-6xl leading-tighter font-rubik">Features</h2>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-full pt-24 pr-12 space-y-4 md:pr-16 md:w-1/3">
                  <div className="relative pt-4 border-b border-gray-900 pb-7 before:absolute before:border-b before:border-gray-100 before:bottom-0 before:w-3/4 before:-mb-px">
                    <h3 className="text-xl font-bold text-white font-rubik">Live Contest</h3>
                    <p className="pt-4 text-sm leading-relaxed text-gray-700">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ducimus minima animi laudantium, cumque vitae reprehenderit voluptas
                    </p>
                  </div>
                  <div className="pt-4 border-b border-gray-900 pb-7">
                    <h3 className="text-xl font-bold text-white font-rubik">Practice Session</h3>
                    <p className="pt-4 text-sm leading-relaxed text-gray-700">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ducimus minima animi laudantium, cumque vitae reprehenderit voluptas
                    </p>
                  </div>
                  <div className="pt-4 border-b border-gray-900 pb-7">
                    <h3 className="text-xl font-bold text-white font-rubik">Sync data across devices and between users</h3>
                    <p className="pt-4 text-sm leading-relaxed text-gray-700">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ducimus minima animi laudantium, cumque vitae reprehenderit voluptas
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-full pt-12 md:pt-24 md:w-2/3">
                  <div className="flex items-center w-full pt-4 space-x-6 border-b border-gray-900 md:px-12">
                    <div className="pb-4 border-b border-gray-100">
                      <button className="text-yellow">
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                          <path d="M4 2C2.89543 2 2 2.89543 2 4V28C2 29.1046 2.89543 30 4 30H28C29.1046 30 30 29.1046 30 28V4C30 2.89543 29.1046 2 28 2H4ZM17.238 23.837C17.238 26.562 15.638 27.806 13.307 27.806C11.201 27.806 9.982 26.719 9.357 25.4L11.501 24.106C11.914 24.837 12.289 25.456 13.195 25.456C14.057 25.456 14.607 25.118 14.607 23.8V14.856H17.238V23.837ZM23.462 27.806C21.018 27.806 19.437 26.644 18.668 25.118L20.812 23.881C21.375 24.8 22.112 25.481 23.406 25.481C24.493 25.481 25.194 24.937 25.194 24.181C25.194 23.281 24.481 22.962 23.275 22.431L22.619 22.15C20.719 21.344 19.463 20.325 19.463 18.181C19.463 16.206 20.969 14.706 23.313 14.706C24.988 14.706 26.188 15.287 27.051 16.812L25.001 18.125C24.551 17.319 24.063 17 23.307 17C22.539 17 22.051 17.488 22.051 18.125C22.051 18.913 22.539 19.231 23.67 19.725L24.326 20.006C26.564 20.962 27.82 21.944 27.82 24.143C27.82 26.506 25.957 27.805 23.463 27.805L23.462 27.806Z" />
                        </svg>
                      </button>
                    </div>
                    <div className="pb-4 hover:border-b hover:border-gray-100">
                      <button className="text-gray-800 hover:text-white">
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                          <g clipPath="url(#clip0)">
                            <path d="M19.079 0.239953L20.282 0.504953L21.255 0.853953L22.042 1.25395L22.641 1.68195L23.094 2.13495L23.427 2.58695L23.64 3.02595L23.771 3.42595L23.828 3.76995L23.855 4.04095L23.839 4.21295V11.333L23.771 12.172L23.599 12.907L23.318 13.522L22.974 14.027L22.574 14.438L22.137 14.771L21.668 15.027L21.199 15.214L20.762 15.35L20.362 15.438L20.018 15.495L19.737 15.522H11.773L10.857 15.589L10.07 15.772L9.40301 16.069L8.85601 16.428L8.41301 16.856L8.05301 17.319L7.78801 17.804L7.58901 18.293L7.45401 18.761L7.36101 19.189L7.30801 19.548L7.28301 19.829V23.908H4.30801L4.02801 23.865L3.65201 23.772L3.23101 23.616L2.76201 23.376L2.28301 23.028L1.80401 22.548L1.33501 21.933L0.908007 21.146L0.532007 20.173L0.256007 19.001L0.0690071 17.6L0.00100708 15.96L0.0800071 14.335L0.293007 12.95L0.616007 11.789L1.04301 10.841L1.52301 10.081L2.05401 9.49695L2.61701 9.05395L3.17401 8.73695L3.71001 8.52395L4.19001 8.38795L4.61701 8.31995L4.93401 8.30895H5.14701L5.23101 8.31995H16.106V7.21595H8.31901L8.30801 3.54895L8.28301 3.05395L8.35101 2.60095L8.49601 2.18995L8.72001 1.81395L9.05301 1.47095L9.47001 1.16295L9.97401 0.897953L10.563 0.652953L11.24 0.455953L12.016 0.294953L12.864 0.163953L13.812 0.0809531L14.839 0.0289531L15.959 0.00195312L17.651 0.0699531L19.079 0.239953ZM10.683 2.87995L10.375 3.31695L10.266 3.86395L10.375 4.41195L10.683 4.86395L11.12 5.16095L11.667 5.28095L12.214 5.16095L12.651 4.86395L12.959 4.41195L13.068 3.86395L12.959 3.31695L12.651 2.87995L12.214 2.58795L11.667 2.46895L11.12 2.58795L10.683 2.87995ZM28.136 8.14495L28.505 8.22895L28.932 8.38495L29.401 8.62495L29.88 8.98395L30.36 9.45295L30.828 10.078L31.255 10.863L31.626 11.838L31.907 13.015L32.094 14.4L32.162 16.04L32.079 17.681L31.864 19.066L31.547 20.211L31.12 21.159L30.64 21.919L30.104 22.519L29.547 22.956L28.984 23.279L28.453 23.492L27.973 23.612L27.546 23.68L27.229 23.705L27.016 23.69H16.052V24.783H23.839L23.855 28.466L23.88 28.945L23.812 29.398L23.667 29.809L23.438 30.194L23.105 30.527L22.694 30.851L22.189 31.116L21.6 31.345L20.923 31.542L20.147 31.714L19.294 31.834L18.351 31.927L17.319 31.979L16.199 31.995L14.507 31.943L13.08 31.755L11.881 31.49L10.908 31.157L10.121 30.756L9.52201 30.313L9.06901 29.86L8.73601 29.408L8.52301 28.969L8.38701 28.569L8.33501 28.236L8.30801 27.969L8.31901 27.798V20.678L8.38701 19.823L8.56401 19.099L8.84001 18.49L9.18901 17.979L9.58901 17.558L10.028 17.235L10.496 16.968L10.96 16.781L11.403 16.645L11.804 16.568L12.147 16.516L12.6 16.473H20.387L21.308 16.406L22.095 16.223L22.762 15.942L23.309 15.567L23.748 15.139L24.107 14.676L24.378 14.191L24.577 13.712L24.712 13.248L24.807 12.821L24.859 12.446L24.884 12.165V8.08595H27.671L27.859 8.09695L28.136 8.14495ZM19.505 27.145L19.197 27.588L19.093 28.136L19.197 28.683L19.505 29.12L19.948 29.427L20.495 29.531L21.042 29.427L21.479 29.12L21.787 28.683L21.896 28.136L21.787 27.588L21.479 27.145L21.042 26.838L20.495 26.734L19.948 26.838L19.505 27.145Z" />
                          </g>
                          <defs>
                            <clipPath id="clip0">
                              <rect width="32" height="32" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                    <div className="pb-4 hover:border-b hover:border-gray-100">
                      <button className="text-gray-800 hover:text-white">
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                          <path d="M9.349 13.609H8.088L7.401 17.14H8.521C9.26 17.14 9.812 17 10.177 16.719C10.536 16.443 10.781 15.974 10.906 15.323C11.03 14.698 10.973 14.255 10.745 13.995C10.51 13.74 10.046 13.61 9.349 13.61V13.609ZM16 7.58398C7.161 7.58398 0 11.355 0 16C0 20.645 7.161 24.416 16 24.416C24.839 24.416 32 20.645 32 16C32 11.355 24.839 7.58398 16 7.58398ZM11.651 17.521C11.3048 17.8537 10.8882 18.1042 10.432 18.254C9.984 18.395 9.412 18.473 8.719 18.473H7.14L6.708 20.713H4.869L6.51 12.281H10.041C11.104 12.281 11.88 12.557 12.369 13.114C12.854 13.671 13.005 14.453 12.806 15.453C12.7315 15.849 12.5948 16.2307 12.401 16.584C12.2015 16.9339 11.9481 17.2501 11.65 17.521H11.651ZM17.021 18.473L17.745 14.74C17.828 14.317 17.797 14.027 17.65 13.869C17.51 13.718 17.202 13.64 16.734 13.64H15.281L14.344 18.473H12.516L14.156 10.036H15.979L15.542 12.281H17.167C18.194 12.281 18.896 12.458 19.282 12.812C19.673 13.172 19.787 13.749 19.637 14.547L18.87 18.474L17.021 18.473ZM27.145 15.453C27.0728 15.8496 26.936 16.2317 26.74 16.584C26.5424 16.9335 26.291 17.2497 25.995 17.521C25.6457 17.8521 25.2278 18.1024 24.771 18.254C24.323 18.395 23.75 18.473 23.058 18.473H21.485L21.048 20.713H19.209L20.85 12.281H24.381C25.444 12.281 26.22 12.557 26.709 13.12C27.194 13.672 27.345 14.453 27.146 15.453H27.145ZM23.688 13.609H22.432L21.745 17.14H22.86C23.604 17.14 24.156 17 24.516 16.719C24.88 16.443 25.125 15.974 25.251 15.323C25.375 14.698 25.318 14.255 25.083 13.995C24.855 13.74 24.386 13.61 23.688 13.61V13.609Z" />
                        </svg>
                      </button>
                    </div>
                    <div className="pb-4 hover:border-b hover:border-gray-100">
                      <button className="text-gray-800 hover:text-white">
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                          <path d="M10.8688 10.3974L16.8928 4.375L19.568 10.3974H10.8688Z" />
                          <path d="M26.8687 4L21.0575 9.8112L18.4751 4H26.8687V4Z" />
                          <path d="M4.37766 16.8912L10.4001 19.5664V10.8672L4.37766 16.8912Z" />
                          <path d="M9.8112 21.0551L4 18.4727V26.8663L9.8112 21.0551V21.0551Z" />
                          <path d="M12 18.8668L18.8688 11.998H12V18.8668Z" />
                          <path d="M28 25.9693L21.7488 11.3821L28 5.13086V25.9693Z" />
                          <path d="M26.4769 26.4768L20.5297 12.6016L12.6017 20.5296L26.4769 26.4768Z" />
                          <path d="M11.3824 21.748L25.9696 27.9993H5.13123L11.3824 21.748Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col w-full pt-10">
                    <div className="flex items-end w-full h-10 bg-editor-700 rounded-t-md">
                      <div className="flex items-center space-x-1.5 h-full pl-4">
                        <button className="w-2 h-2 bg-red-500 rounded-full"></button>
                        <button className="w-2 h-2 bg-yellow-400 rounded-full"></button>
                        <button className="w-2 h-2 rounded-full bg-green"></button>
                      </div>
                      <div className="pl-6">
                        <div className="h-8 px-4 py-2 text-xs text-white bg-editor-800 w-28 rounded-t-md">Solution.java</div>
                      </div>
                    </div>
                    <div className="relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md">
                      <code className="sticky top-0 bottom-0 left-0 flex flex-col w-10 px-3 py-2 text-xs leading-loose text-right text-gray-600 select-none bg-editor-900">
                        1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}
