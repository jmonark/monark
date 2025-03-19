// import PageContainer from "@/components/common/PageContainer";
// import PageTitle from "@/components/common/PageTitle";
import { Button } from "@/components/ui/button";
import MetricSection from "@/components/MetricSection";
// import Card from "@/components/common/Card";
// import { Skeleton } from "@/components/ui/skeleton";
import monarkToken from "@/assets/monark-token.png";
import rootstock from "@/assets/rootstock.png";
import algebra from "@/assets/algebra.png";
import skyrocket from "@/assets/skyrocket.png";
import monarkLogo from "@/assets/monark-logo.png";
import monarkMagic from "@/assets/ill-rombi-magic.png";
import magicWake from "@/assets/magic_wake.png";
import { useAccount } from "wagmi";
import { Swiper, SwiperSlide } from "swiper/react";
// import Autoplay from "swiper";

const HomePage = () => {
  const { address: account } = useAccount();
  // if (!account) return <Button onClick={() => open()}>Connect Wallet</Button>;

  // const { observerRef, isIntersecting } = useIntersectionObserver();
  // const [loadData, setLoadData] = useState(false);

  // const cakeSupply: number = 0;
  // const burnedBalance: number = 0;
  // const circulatingSupply: number = 0;
  // const observerRef = null;

  // const {
  //   data: { cakeSupply, burnedBalance, circulatingSupply } = {
  //     cakeSupply: 0,
  //     burnedBalance: 0,
  //     circulatingSupply: 0,
  //   },
  // }
  // = useSWR(
  //   loadData ? ["cakeDataRow"] : null,
  //   async () => {
  //     const totalSupplyCall = {
  //       abi: erc20,
  //       address: mantleTokens.papple.address,
  //       name: "totalSupply",
  //     };
  //     const burnedTokenCall = {
  //       abi: erc20,
  //       address: mantleTokens.papple.address,
  //       name: "balanceOf",
  //       params: ["0x0000000000000000000000000000000000000000"],
  //     };
  //     const [[totalSupply], [burned]] = await multicallv3({
  //       calls: [totalSupplyCall, burnedTokenCall],
  //       allowFailure: true,
  //     });

  //     const totalBurned = planetFinanceBurnedTokensWei.add(burned);
  //     const circulating = totalSupply.sub(burned);

  //     return {
  //       cakeSupply: totalSupply && burned ? +formatBigNumber(totalSupply) : 0,
  //       burnedBalance: burned ? +formatBigNumber(burned) : 0,
  //       circulatingSupply: circulating ? +formatBigNumber(circulating) : 0,
  //     };
  //   },
  //   {
  //     refreshInterval: SLOW_INTERVAL,
  //   }
  // );

  // const cakePriceBusd = usePriceCakeBusd();
  // const mcap = cakePriceBusd.times(circulatingSupply);
  // const mcapString = formatLocalisedCompactNumber(mcap.toNumber());

  // useEffect(() => {
  //   if (isIntersecting) {
  //     setLoadData(true);
  //   }
  // }, [isIntersecting]);

  return (
    <>
      {/* <PageContainer> */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-0 gap-y-8 w-full lg:gap-8 lg:mt-16">
        <div className="flex flex-col gap-2"></div>
      </div>
      <div className="lg:my-[6rem] my-[3rem]">
        <Swiper
          speed={500}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          loop
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="px-4 lg:pb-0 flex justify-center items-center">
              <div className="w-full max-w-[60rem] lg:h-[227px] h-auto rounded-3xl bg-[#EEEEEE] lg:px-12 lg:p-8 p-4 relative ">
                <div className="h-full justify-center flex flex-col">
                  <div className="text-black mb-2 text-[18px] leading-[25px] font-mitr font-bold lg:text-[50px] lg:leading-[55px] font-mitr">
                    The first <span className="text-[#F56E0F]">V4 AMM</span> DEX
                    on Rootstock
                  </div>
                  <div className="text-black mb-2 text-[18px] leading-[25px] font-mitr font-bold lg:text-[50px] lg:leading-[55px] font-mitr">
                    is here!
                  </div>
                  <div className="w-full lg:justify-end justify-center flex">
                    <Button
                      className="group w-fit border border-[#615F5F] flex items-center text-md text-center text-[#615F5F] bg-transparent p-[7px] px-3 rounded-full"
                      onClick={() => (window.location.href = "/pools")}
                    >
                      Explore Pools
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 fill-[#615F5F]  transition-colors duration-300"
                      >
                        <path d="M16.25 19.4783H18.4167V25.9783H0V10.8117C0 9.01333 1.4625 7.56167 3.25 7.56167H7.61583C7.13917 8.19 6.78167 8.92667 6.61917 9.72833H3.25C2.65417 9.72833 2.16667 10.2158 2.16667 10.8117V23.8117H16.25V19.4783ZM25.3608 7.10667L18.265 0L16.7375 1.5275L22.7608 7.55083H11.9167C10.1292 7.55083 8.66667 9.01333 8.66667 10.8008V19.4675H10.8333V10.8117C10.8333 10.2158 11.3208 9.72833 11.9167 9.72833H22.75L16.6725 15.8058L18.2 17.3333L25.3608 10.1725C26.2058 9.3275 26.2058 7.95167 25.3608 7.10667Z" />
                      </svg>
                    </Button>
                  </div>
                </div>
                <img
                  src={magicWake}
                  alt=""
                  className="w-[25rem]  h-[5rem]  hidden lg:flex absolute bottom-8 left-8"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className=" -ml-8 -mr-8 mb-[10rem]">
        <div className="bg-[#151419] border border-[#FBFBFB] relative w-full max-w-none lg:w-[95%] lg:rounded-tr-[60px] lg:rounded-br-[60px] justify-center xl:py-16 xl:px-56 lg:px-36  py-14 px-8 z-1">
          {/* <div className="lg:block hidden"> */}
          <div className="flex items-center gap-2">
            <div>
              <div className="items-center mb-4 text-left">
                <span className="text-white lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold">
                  Welcome to{" "}
                </span>
                <span className="text-[#F56E0F] lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold">
                  Monark
                </span>
              </div>
              <div className="items-center mb-12 text-left">
                <span className="text-white lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold">
                  The first and only{" "}
                </span>
                <span className="text-[#F56E0F] lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold">
                  V4 AMM DEX{" "}
                </span>
                <span className="text-white lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold">
                  on Rootstock.
                </span>
              </div>
              {/* <div className="text-white lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold mb-12 flex text-left">

          </div> */}
              <div className="text-white font-mitr text-[16px] leading-[22px] mb-6 lg:mr-[10rem] mr-0 flex text-left">
                Step into the future of decentralized finance with Monark, where
                cutting-edge technology meets the security of Bitcoin.
              </div>
              <div className="flex lg:block flex-col items-center mt-8">
                <div className="flex flex-col lg:flex-row items-center">
                  {" "}
                  {/* Ici, flex-col pour mobile, flex-row pour desktop */}
                  <w3m-button balance={"hide"} />
                  <Button
                    className="group w-full lg:w-fit mb-4 lg:mb-0 lg:ml-4 lg:mt-0 mt-4 border border-[#F56E0F] flex items-center text-md text-center text-[#F56E0F] bg-[#151419] py-[7px] px-3 rounded-full hover:text-white"
                    onClick={() => (window.location.href = "/swap")}
                  >
                    Swap Now
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 fill-[#F56E0F] group-hover:fill-white transition-colors duration-300"
                    >
                      <path d="M16.25 19.4783H18.4167V25.9783H0V10.8117C0 9.01333 1.4625 7.56167 3.25 7.56167H7.61583C7.13917 8.19 6.78167 8.92667 6.61917 9.72833H3.25C2.65417 9.72833 2.16667 10.2158 2.16667 10.8117V23.8117H16.25V19.4783ZM25.3608 7.10667L18.265 0L16.7375 1.5275L22.7608 7.55083H11.9167C10.1292 7.55083 8.66667 9.01333 8.66667 10.8008V19.4675H10.8333V10.8117C10.8333 10.2158 11.3208 9.72833 11.9167 9.72833H22.75L16.6725 15.8058L18.2 17.3333L25.3608 10.1725C26.2058 9.3275 26.2058 7.95167 25.3608 7.10667Z" />
                    </svg>
                  </Button>
                  <Button
                    className="group w-full lg:w-fit lg:ml-4 border border-[#F56E0F] flex items-center text-md text-center text-[#F56E0F] bg-[#151419] py-[7px] px-3 rounded-full hover:text-white"
                    // onClick={() => (window.location.href = "/swap")}
                    onClick={() =>
                      window.open("https://docs.monark.exchange/", "_blank")
                    }
                  >
                    Learn
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 fill-[#F56E0F] group-hover:fill-white transition-colors duration-300"
                    >
                      <path d="M16.25 19.4783H18.4167V25.9783H0V10.8117C0 9.01333 1.4625 7.56167 3.25 7.56167H7.61583C7.13917 8.19 6.78167 8.92667 6.61917 9.72833H3.25C2.65417 9.72833 2.16667 10.2158 2.16667 10.8117V23.8117H16.25V19.4783ZM25.3608 7.10667L18.265 0L16.7375 1.5275L22.7608 7.55083H11.9167C10.1292 7.55083 8.66667 9.01333 8.66667 10.8008V19.4675H10.8333V10.8117C10.8333 10.2158 11.3208 9.72833 11.9167 9.72833H22.75L16.6725 15.8058L18.2 17.3333L25.3608 10.1725C26.2058 9.3275 26.2058 7.95167 25.3608 7.10667Z" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
            <div className="hidden lg:block justify-center">
              <img
                src={monarkLogo}
                alt=""
                className="w-[15rem] h-auto xl:w-[35rem]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] w-full mx-auto">
        <MetricSection />
      </div>
      {/* <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 gap-4 max-w-lg">
          <Card>test</Card>
          <Card>test</Card>
          <Card>test</Card>
          <Card>test</Card>
        </div>
      </div> */}
      <div className=" -ml-8 -mr-8 flex justify-end mb-[10rem]">
        <div className="bg-[#151419] border border-[#FBFBFB] lg:w-[95%] w-full lg:rounded-tl-[60px] lg:rounded-bl-[60px]  flex justify-end pt-8 lg:pb-8 py-8 lg-px-20 px-8 relative lg:items-end items-start z-1">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="xl:flex hidden justify-start items-center">
              <img src={monarkMagic} alt="" className="w-[40rem] h-[15rem]" />
            </div>
            <div className="max-w-[700px] w-full">
              <div className="  space-x-2 text-left  mb-4">
                <div className="items-center mb-4 text-left">
                  <span className="text-white lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold">
                    A catalyst for{" "}
                  </span>
                  <span className="text-[#F56E0F] lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold">
                    innovation
                  </span>
                </div>
              </div>
              <div className="text-[#FBFBFB] font-mitr text-[16px] leading-[22px] mb-12 text-left">
                Monark leverages v4 AMM technology and a comprehensive suite of
                DeFi tools to empower users and support groundbreaking projects.
              </div>
              <div className="flex">
                <Button
                  className="group w-fit ml-4 border border-[#FBFBFB] flex items-center text-md text-center text-[#FBFBFB] bg-transparent py-[7px] px-3 rounded-full"
                  onClick={() => (window.location.href = "/pools")}
                >
                  Explore Pools
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 fill-[#FBFBFB]  transition-colors duration-300"
                  >
                    <path d="M16.25 19.4783H18.4167V25.9783H0V10.8117C0 9.01333 1.4625 7.56167 3.25 7.56167H7.61583C7.13917 8.19 6.78167 8.92667 6.61917 9.72833H3.25C2.65417 9.72833 2.16667 10.2158 2.16667 10.8117V23.8117H16.25V19.4783ZM25.3608 7.10667L18.265 0L16.7375 1.5275L22.7608 7.55083H11.9167C10.1292 7.55083 8.66667 9.01333 8.66667 10.8008V19.4675H10.8333V10.8117C10.8333 10.2158 11.3208 9.72833 11.9167 9.72833H22.75L16.6725 15.8058L18.2 17.3333L25.3608 10.1725C26.2058 9.3275 26.2058 7.95167 25.3608 7.10667Z" />
                  </svg>
                </Button>
                <Button
                  className="group w-fit ml-4 border border-[#FBFBFB] flex items-center text-md text-center text-[#FBFBFB] bg-transparent py-[7px] px-3 rounded-full"
                  // onClick={() => (window.location.href = "https://docs.monark.exchange/v4-exchange")}
                  onClick={() =>
                    window.open(
                      "https://docs.monark.exchange/v4-exchange",
                      "_blank"
                    )
                  }
                >
                  Learn
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 fill-[#FBFBFB]  transition-colors duration-300"
                  >
                    <path d="M16.25 19.4783H18.4167V25.9783H0V10.8117C0 9.01333 1.4625 7.56167 3.25 7.56167H7.61583C7.13917 8.19 6.78167 8.92667 6.61917 9.72833H3.25C2.65417 9.72833 2.16667 10.2158 2.16667 10.8117V23.8117H16.25V19.4783ZM25.3608 7.10667L18.265 0L16.7375 1.5275L22.7608 7.55083H11.9167C10.1292 7.55083 8.66667 9.01333 8.66667 10.8008V19.4675H10.8333V10.8117C10.8333 10.2158 11.3208 9.72833 11.9167 9.72833H22.75L16.6725 15.8058L18.2 17.3333L25.3608 10.1725C26.2058 9.3275 26.2058 7.95167 25.3608 7.10667Z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        // className="flex justify-start lg:pb-18  pb-28 overflow-hidden"
        className="-ml-8 -mr-8  mb-[10rem]"
      >
        <div className=" bg-[#EEEEEE] lg:w-[85%] w-full lg:rounded-tr-[60px] lg:rounded-br-[60px] flex flex-col justify-center  py-8 lg:pl-56 px-8 relative items-start">
          <div className="grid lg:grid-cols-3 grid-cols-1">
            <div className="lg:max-w-[900px] w-full col-span-2">
              <div className="w-full">
                <div className="flex items-center space-x-2">
                  <div className="text-[black] lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold">
                    Launch your token with
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-[#F56E0F] lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold mb-4">
                    likeaser.fun
                  </div>
                </div>
              </div>
              <div className="text-[#151419] font-mitr text-[16px] leading-[22px] w-full text-left mb-8">
                Powered by Monark, likeaser.fun is the ultimate do-it-yourself
                token factory, where anyone can create their own token, set up a
                launchpad, and invite the world to join the ride.
              </div>
              <div className="flex">
                {/* <button className="bg-[#151419] text-[#F56E0F] font-bold py-2 px-4 rounded-full"> */}
                <Button
                  className="group w-fit border border-[#F56E0F] flex items-center text-md text-center text-[#F56E0F] bg-transparent py-[7px] px-3 rounded-full"
                  // onClick={() => (window.location.href = "/swap")}
                  onClick={() =>
                    window.open(
                      "https://www.likeaser.fun/ ",
                      "_blank"
                    )
                  }
                >
                  Go to likeaser.fun
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 fill-[#F56E0F]  transition-colors duration-300"
                  >
                    <path d="M16.25 19.4783H18.4167V25.9783H0V10.8117C0 9.01333 1.4625 7.56167 3.25 7.56167H7.61583C7.13917 8.19 6.78167 8.92667 6.61917 9.72833H3.25C2.65417 9.72833 2.16667 10.2158 2.16667 10.8117V23.8117H16.25V19.4783ZM25.3608 7.10667L18.265 0L16.7375 1.5275L22.7608 7.55083H11.9167C10.1292 7.55083 8.66667 9.01333 8.66667 10.8008V19.4675H10.8333V10.8117C10.8333 10.2158 11.3208 9.72833 11.9167 9.72833H22.75L16.6725 15.8058L18.2 17.3333L25.3608 10.1725C26.2058 9.3275 26.2058 7.95167 25.3608 7.10667Z" />
                  </svg>
                </Button>
                {/* <Button
                  className="group w-fit ml-4 border border-[#F56E0F] flex items-center text-md text-center text-[#F56E0F] bg-transparent py-[7px] px-3 rounded-full"
                  // onClick={() => (window.location.href = "/swap")}
                  onClick={() =>
                    window.open(
                      "https://docs.monark.exchange/usdmnrk-tokenomics",
                      "_blank"
                    )
                  }
                >
                  How it works
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 fill-[#F56E0F]  transition-colors duration-300"
                  >
                    <path d="M16.25 19.4783H18.4167V25.9783H0V10.8117C0 9.01333 1.4625 7.56167 3.25 7.56167H7.61583C7.13917 8.19 6.78167 8.92667 6.61917 9.72833H3.25C2.65417 9.72833 2.16667 10.2158 2.16667 10.8117V23.8117H16.25V19.4783ZM25.3608 7.10667L18.265 0L16.7375 1.5275L22.7608 7.55083H11.9167C10.1292 7.55083 8.66667 9.01333 8.66667 10.8008V19.4675H10.8333V10.8117C10.8333 10.2158 11.3208 9.72833 11.9167 9.72833H22.75L16.6725 15.8058L18.2 17.3333L25.3608 10.1725C26.2058 9.3275 26.2058 7.95167 25.3608 7.10667Z" />
                  </svg>
                </Button> */}
              </div>
            </div>
            <div className="w-full justify-end lg:flex hidden relative ">
              <img
                src={skyrocket}
                alt=""
                className="w-auto h-auto max-w-full max-h-[18rem] object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        // className="flex justify-start lg:pb-18  pb-28 overflow-hidden"
        className="-ml-8 -mr-8 justify-end flex"
      >
        <div className=" bg-[#FFAE74] items-end border border-[#FBFBFB] lg:w-[85%] w-full lg:rounded-tl-[60px] lg:rounded-bl-[60px] flex flex-col justify-center  py-12 px-8 relative ">
          <div className="grid lg:grid-cols-2">
            <div className="w-full justify-end lg:flex hidden relative ">
              <img
                src={monarkToken}
                alt=""
                className="w-[5rem]  h-[5rem]  hidden lg:flex absolute top-0 left-[15rem] -rotate-[30deg]"
              />
              <img
                src={monarkToken}
                alt=""
                className="w-[10rem]  h-[10rem]  hidden lg:flex absolute bottom-8 left-[8rem]"
              />
              <img
                src={monarkToken}
                alt=""
                className="w-[4rem] h-[4rem]  hidden lg:flex absolute bottom-0 left-[2rem] rotate-12"
              />
              <img
                src={monarkToken}
                alt=""
                className="w-[7rem]  h-[7rem]  hidden lg:flex absolute top-10 left-[23rem]  rotate-[30deg]"
              />
              <img
                src={monarkToken}
                alt=""
                className="w-[2rem]  h-[2rem]  hidden lg:flex absolute  bottom-0 left-[23rem]  rotate-12"
              />
              <img
                src={monarkToken}
                alt=""
                className="w-[2rem]  h-[2rem]  hidden lg:flex absolute  bottom-8 left-[30rem]  -rotate-12"
              />
              <img
                src={monarkToken}
                alt=""
                className="w-[2rem]  h-[2rem]  hidden lg:flex absolute  top-10 left-[6rem]  -rotate-12"
              />
            </div>
            <div className="lg:max-w-[900px] w-full">
              <div className="w-full">
                <div className="flex items-center space-x-2">
                  <span className="text-[#323236] lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold mb-4">
                    Powered by <span className="text-black">$MNRK</span>
                  </span>
                </div>
              </div>
              <div className="text-[#151419] font-mitr text-[16px] leading-[22px] w-full text-left mb-8">
                Powered by Monark, likeaser.fun is the ultimate do-it-yourself
                token factory, where anyone can create their own token, set up a
                launchpad, and invite the world to join the ride.
              </div>
              <div className="flex lg:mb-[5rem] mb-0">
                {/* <button className="bg-[#151419] text-[#F56E0F] font-bold py-2 px-4 rounded-full"> */}
                <button
                  className="bg-[#A3A0A0] text-black font-bold py-2 px-4 rounded-full hover:cursor-not-allowed"
                  disabled
                >
                  Discover $MNRK
                </button>
                <Button
                  className="group w-fit ml-4 border border-[#151419] flex items-center text-md text-center text-[#151419] bg-transparent py-[7px] px-3 rounded-full"
                  // onClick={() => (window.location.href = "/swap")}
                  onClick={() =>
                    window.open(
                      "https://docs.monark.exchange/usdmnrk-tokenomics",
                      "_blank"
                    )
                  }
                >
                  Learn
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 fill-[#151419]  transition-colors duration-300"
                  >
                    <path d="M16.25 19.4783H18.4167V25.9783H0V10.8117C0 9.01333 1.4625 7.56167 3.25 7.56167H7.61583C7.13917 8.19 6.78167 8.92667 6.61917 9.72833H3.25C2.65417 9.72833 2.16667 10.2158 2.16667 10.8117V23.8117H16.25V19.4783ZM25.3608 7.10667L18.265 0L16.7375 1.5275L22.7608 7.55083H11.9167C10.1292 7.55083 8.66667 9.01333 8.66667 10.8008V19.4675H10.8333V10.8117C10.8333 10.2158 11.3208 9.72833 11.9167 9.72833H22.75L16.6725 15.8058L18.2 17.3333L25.3608 10.1725C26.2058 9.3275 26.2058 7.95167 25.3608 7.10667Z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-[8rem] -ml-8 -mr-8 p-8">
        <div className="bg-[#A3A0A0] rounded-2xl px-8 py-8  max-w-lg text-center border border-[#FBFBFB]">
          {/* Main heading */}
          <h2 className="text-2xl font-bold text-black mb-4">
            Transparent. Inclusive. Supportive. <br />
          </h2>

          {/* Subheading */}
          <p className="text-black mb-6">
            Trade and earn with ease on Rootstock with Monark.
          </p>

          <div className=" justify-center">
            <div className="flex justify-center mb-4">
              {!account && <w3m-button balance={"hide"} />}
            </div>
            <div className="flex justify-center">
              <button
                className="lg:mt-0 mt-4 flex items-center border border-black text-black font-semibold py-2 px-4 rounded-full"
                onClick={() =>
                  window.open(
                    "https://docs.monark.exchange/connect-wallet",
                    "_blank"
                  )
                }
              >
                Learn how to start
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2"
                >
                  <path
                    d="M16.25 19.4783H18.4167V25.9783H0V10.8117C0 9.01333 1.4625 7.56167 3.25 7.56167H7.61583C7.13917 8.19 6.78167 8.92667 6.61917 9.72833H3.25C2.65417 9.72833 2.16667 10.2158 2.16667 10.8117V23.8117H16.25V19.4783ZM25.3608 7.10667L18.265 0L16.7375 1.5275L22.7608 7.55083H11.9167C10.1292 7.55083 8.66667 9.01333 8.66667 10.8008V19.4675H10.8333V10.8117C10.8333 10.2158 11.3208 9.72833 11.9167 9.72833H22.75L16.6725 15.8058L18.2 17.3333L25.3608 10.1725C26.2058 9.3275 26.2058 7.95167 25.3608 7.10667Z"
                    fill="#151419"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="-ml-8 -mr-8 ">
        <div className=" bg-[#686767] w-full flex p-4 relative justify-center items-center">
          <span className="text-[#FBFBFB] lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold">
            Our partners
          </span>
        </div>
      </div>
      <div className="-ml-8 -mr-8 lg:mb-[10rem] mb-8">
        <div className=" bg-[#FBFBFB] w-full flex p-12 relative justify-center items-center">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[10rem] gap-4">
            <img src={rootstock} alt="" className="w-[30rem] h-auto" />
            <img src={algebra} alt="" className="w-[28rem] h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
