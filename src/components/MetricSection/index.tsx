// import { ReactNode } from "react";
// import Card from "../common/Card";

// interface IconCardProps {
//   icon: ReactNode;
//   background?: string;
//   borderColor?: string;
//   rotation?: string;
// }

// interface IconCardData {
//   icon: ReactNode;
//   background?: string;
//   borderColor?: string;
//   rotation?: string;
// }

// const IconCard: React.FC<React.PropsWithChildren<IconCardProps>> = ({
//   icon,
//   background,
//   // borderColor,
//   rotation,
//   children,
//   ...props
// }) => {
//   return (
//     <div
//       className="relative w-full border-[2px] border-[#F56E0F] bg-[#D9D9D9] rounded-3xl"
//       style={{ transform: rotation ? `rotate(${rotation})` : "none" }}
//       {...props}
//     >
//       <div className="relative p-4" style={{ background }}>
//         {/* Icon Wrapper */}
//         <div
//           className="absolute top-6 right-6"
//           style={{ transform: rotation ? `rotate(${rotation})` : "none" }}
//         >
//           {icon}
//         </div>
//         {/* Children Content */}
//         {children}
//       </div>
//     </div>
//   );
// };

// const StatCardContent: React.FC<
//   React.PropsWithChildren<{
//     headingText: string;
//     bodyText: string;
//     // highlightColor: string;
//     titleColor: string;
//     valueColor: string;
//   }>
// > = ({ headingText, bodyText, titleColor, valueColor }) => {
//   // const { isMobile, isTablet } = useMatchBreakpoints();
//   const isSmallerScreen = false;
//   const split = headingText.split(" ");
//   // const lastWord = split.pop();
//   const remainingWords = split.slice(0, split.length).join(" ");

//   return (
//     // <></>
//     // <Flex
//     //   minHeight={[null, null, null, "168px"]}
//     //   minWidth="232px"
//     //   width="fit-content"
//     //   flexDirection="column"
//     //   justifyContent="flex-end"
//     //   mt={[null, null, null, "64px"]}
//     // >
//     //   {isSmallerScreen && remainingWords.length > 13 ? (
//     //     <div
//     //       className={`text-[${valueColor}] font-mitr font-bold lg:mb-10 mb-4 text-3xl`}
//     //     >
//     //       {remainingWords}
//     //     </div>
//     //   ) : (
//     //     /* <Heading color="#C54177" mb="24px" scale="lg">{remainingWords}</Heading>*/
//     //     <div
//     //       className={`text-[${valueColor}] font-mitr font-bold lg:mb-10 mb-4 text-3xl`}
//     //     >
//     //       {remainingWords}
//     //     </div>
//     //   )}

//     //   <div className={`text-[${titleColor}] font-mitr`}>{bodyText}</div>
//     // </Flex>
//     <div className="flex flex-col justify-end min-h-[168px] min-w-[232px] mt-16">
//       {isSmallerScreen && remainingWords.length > 13 ? (
//         <div
//           className={`text-[${valueColor}] font-mitr font-bold lg:mb-10 mb-4 text-3xl`}
//         >
//           {remainingWords}
//         </div>
//       ) : (
//         <div
//           className={`text-[${valueColor}] font-mitr font-bold lg:mb-10 mb-4 text-3xl`}
//         >
//           {remainingWords}
//         </div>
//       )}

//       <div className={`text-[${titleColor}] font-mitr`}>{bodyText}</div>
//     </div>
//   );
// };

const Stats = () => {
  // const { chainId } = useActiveChainId();
  // const { t } = useTranslation();
  // const { theme } = useTheme();

  // const tvl = "tvl";
  // useSWRImmutable("tvl");
  // const totalVolume = useSWRImmutable("totalVolume");
  // const { data: txCount } = useSWRImmutable("totalTx30Days");
  // const { data: addressCount } = useSWRImmutable("addressCount30Days");
  // const trades = formatLocalisedCompactNumber(0);
  /*   const trades = formatLocalisedCompactNumber(txCount); */
  /*   const users = formatLocalisedCompactNumber(addressCount); */
  // const users = formatLocalisedCompactNumber(0);
  // const totalVolumeString = totalVolume.data
  //   ? customNumberFormat(
  //       totalVolume.data.dexAmmProtocols[0].cumulativeVolumeUSD
  //     )
  //   : "-";
  // const tvlString = tvl.data
  //   ? customNumberFormat(tvl.data.dexAmmProtocols[0].totalValueLockedUSD)
  //   : "-";
  // console.log("tvlString", tvl?.data);

  // const pineappleToken: Currency = PAPPLE[ChainId.MANTLE];
  // const totalSupplyStr: CurrencyAmount<Token> = useTotalSupply(pineappleToken);
  // const pineappleTotalSupply = totalSupplyStr
  //   ? customNumberFormat(Number(totalSupplyStr.toFixed(2)))
  //   : "-";

  // const MCBalance = useTokenBalance("0x8690Efd596D58fae7d6b1A10178ECdC3F19914E8", PAPPLE[ChainId.MANTLE]);
  // console.log("MCBalance", MCBalance? MCBalance.toFixed(2) : 0);
  // const ZeroAddress = useTokenBalance("0x0000000000000000000000000000000000000000", PAPPLE[ChainId.MANTLE]);
  // console.log("MCBalance", ZeroAddress? ZeroAddress.toFixed(2) : 0);
  // const teamVestingBalance = useTokenBalance("0x373546AC28f91d223f27318fA94a8019A9079704", PAPPLE[ChainId.MANTLE]);
  // console.log("teamVestingBalance", teamVestingBalance? teamVestingBalance.toFixed(2) : 0);
  // const treasuryVestingBalance = useTokenBalance("0x81c22d20C20fBBd226D24941e145e057Fb5a2A89", PAPPLE[ChainId.MANTLE]);
  // console.log("treasuryVestingBalance", treasuryVestingBalance? treasuryVestingBalance.toFixed(2) : 0);
  // const advisorsVestingBalance = useTokenBalance("0xEB22D751D7a461Af8C59FfA320a1088F4533D143", PAPPLE[ChainId.MANTLE]);
  // console.log("advisorsVestingBalance", advisorsVestingBalance? advisorsVestingBalance.toFixed(2) : 0);
  // const treasuryBalance = useTokenBalance("0x499C2ed0Ce7353213857118FaAD7e37C3d53077d", PAPPLE[ChainId.MANTLE]);
  // console.log("treasuryBalance", treasuryBalance? treasuryBalance.toFixed(2) : 0);

  // const circulatingSupply = (MCBalance && teamVestingBalance && treasuryVestingBalance && advisorsVestingBalance && treasuryBalance)

  // const cakePriceBusd = usePriceCakeBusd();
  // const mcap = totalSupplyStr
  //   ? customNumberFormat(Number(cakePriceBusd.times(totalSupplyStr.toFixed(2))))
  //   : "-";
  // const mcapString = mcap.toNumber().toFixed(0);

  // useEffect(() => {
  //   tvl.mutate(
  //     async () =>
  //       await infoServerClient.request(gql`
  //         query tvl {
  //           dexAmmProtocols(first: 1) {
  //             totalValueLockedUSD
  //           }
  //         }
  //       `)
  //   );
  //   totalVolume.mutate(
  //     async () =>
  //       await infoServerClient.request(gql`
  //         query totalVolume {
  //           dexAmmProtocols(first: 1) {
  //             cumulativeVolumeUSD
  //           }
  //         }
  //       `)
  //   );
  // }, []);

  // const tvlText = t(
  //   "And those users are now entrusting the platform with over $%tvl% in funds.",
  //   { tvl: tvlString }
  // );
  // const [entrusting, inFunds] = tvlText.split(tvlString);

  // const UsersCardData: IconCardData = {
  //   /*icon: <CommunityIcon color="secondary" width="36px" />,*/
  //   icon: (
  //     <svg
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <g clipPath="url(#clip0_2973_450)">
  //         <path
  //           d="M19.5 8.25H4.5C4.08579 8.25 3.75 8.58579 3.75 9V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V9C20.25 8.58579 19.9142 8.25 19.5 8.25Z"
  //           stroke="#F56E0F"
  //           strokeWidth="2"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M8.625 8.25V4.875C8.625 3.97989 8.98058 3.12145 9.61351 2.48851C10.2465 1.85558 11.1049 1.5 12 1.5C12.8951 1.5 13.7535 1.85558 14.3865 2.48851C15.0194 3.12145 15.375 3.97989 15.375 4.875V8.25"
  //           stroke="#F56E0F"
  //           strokeWidth="2"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //       </g>
  //       <defs>
  //         <clipPath id="clip0_2973_450">
  //           <rect width="24" height="24" fill="white" />
  //         </clipPath>
  //       </defs>
  //     </svg>
  //   ),
  // };

  // const TradesCardData: IconCardData = {
  //   icon: (
  //     <svg
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <g clipPath="url(#clip0_2973_16133)">
  //         <path
  //           d="M9 11.25C13.1421 11.25 16.5 9.73896 16.5 7.875C16.5 6.01104 13.1421 4.5 9 4.5C4.85786 4.5 1.5 6.01104 1.5 7.875C1.5 9.73896 4.85786 11.25 9 11.25Z"
  //           stroke="#F56E0F"
  //           strokeWidth="2"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M1.5 7.875V11.625C1.5 13.4906 4.85625 15 9 15C13.1438 15 16.5 13.4906 16.5 11.625V7.875"
  //           stroke="#F56E0F"
  //           strokeWidth="2"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M6 10.9688V14.7188"
  //           stroke="#F56E0F"
  //           strokeWidth="2"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M16.5 9.06641C19.9219 9.38516 22.5 10.7445 22.5 12.3758C22.5 14.2414 19.1438 15.7508 15 15.7508C13.1625 15.7508 11.475 15.4508 10.1719 14.9633"
  //           stroke="#F56E0F"
  //           strokeWidth="2"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M7.5 14.9344V16.125C7.5 17.9906 10.8562 19.5 15 19.5C19.1438 19.5 22.5 17.9906 22.5 16.125V12.375"
  //           stroke="#F56E0F"
  //           strokeWidth="2"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M18 15.4688V19.2188"
  //           stroke="#F56E0F"
  //           strokeWidth="2"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M12 10.9688V19.2188"
  //           stroke="#F56E0F"
  //           strokeWidth="2"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //       </g>
  //       <defs>
  //         <clipPath id="clip0_2973_16133">
  //           <rect width="24" height="24" fill="white" />
  //         </clipPath>
  //       </defs>
  //     </svg>
  //   ),
  // };

  // const StakedCardData: IconCardData = {
  //   /*    icon: <ChartIcon color="failure" width="36px" />,*/
  //   icon: (
  //     <svg
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <g clipPath="url(#clip0_2973_24245)">
  //         <path
  //           d="M12 12V3"
  //           stroke="#F56E0F"
  //           strokeWidth="2"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M19.7922 7.5L4.21094 16.5"
  //           stroke="#F56E0F"
  //           strokeWidth="2"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M3.15009 13.65C3.04777 13.106 2.99755 12.5535 3.00009 12C2.99891 10.1387 3.57545 8.32287 4.65016 6.80317C5.72487 5.28346 7.24477 4.13477 9.00009 3.51562V10.2656L3.15009 13.65Z"
  //           stroke="#F56E0F"
  //           strokeWidth="2"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M12.0008 3C13.5778 3.00018 15.1271 3.41474 16.4935 4.20215C17.8599 4.98957 18.9954 6.12219 19.7862 7.48658C20.5771 8.85096 20.9956 10.3992 20.9997 11.9762C21.0039 13.5533 20.5936 15.1037 19.81 16.4722C19.0263 17.8408 17.8968 18.9794 16.5346 19.774C15.1724 20.5686 13.6253 20.9914 12.0483 20.9999C10.4713 21.0084 8.91976 20.6024 7.54906 19.8225C6.17837 19.0426 5.03665 17.9163 4.23828 16.5563"
  //           stroke="#F56E0F"
  //           strokeWidth="2"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //       </g>
  //       <defs>
  //         <clipPath id="clip0_2973_24245">
  //           <rect width="24" height="24" fill="white" />
  //         </clipPath>
  //       </defs>
  //     </svg>
  //   ),
  // };

  // const VolumeTradeData: IconCardData = {
  //   /*    icon: <ChartIcon color="failure" width="36px" />,*/
  //   icon: (
  //     <svg
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <g clipPath="url(#clip0_2973_43889)">
  //         <path
  //           d="M12 10.125V20.25"
  //           stroke="#F56E0F"
  //           strokeWidth="2"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M12 3.75V6.375"
  //           stroke="#F56E0F"
  //           strokeWidth="2"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M12 10.125C13.0355 10.125 13.875 9.28553 13.875 8.25C13.875 7.21447 13.0355 6.375 12 6.375C10.9645 6.375 10.125 7.21447 10.125 8.25C10.125 9.28553 10.9645 10.125 12 10.125Z"
  //           stroke="#F56E0F"
  //           strokeWidth="2"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M18.75 17.625V20.25"
  //           stroke="#F56E0F"
  //           strokeWidth="2"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M18.75 3.75V13.875"
  //           stroke="#F56E0F"
  //           strokeWidth="2"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M18.75 17.625C19.7855 17.625 20.625 16.7855 20.625 15.75C20.625 14.7145 19.7855 13.875 18.75 13.875C17.7145 13.875 16.875 14.7145 16.875 15.75C16.875 16.7855 17.7145 17.625 18.75 17.625Z"
  //           stroke="#F56E0F"
  //           strokeWidth="2"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M5.25 14.625V20.25"
  //           stroke="#F56E0F"
  //           strokeWidth="2"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M5.25 3.75V10.875"
  //           stroke="#F56E0F"
  //           strokeWidth="2"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M5.25 14.625C6.28553 14.625 7.125 13.7855 7.125 12.75C7.125 11.7145 6.28553 10.875 5.25 10.875C4.21447 10.875 3.375 11.7145 3.375 12.75C3.375 13.7855 4.21447 14.625 5.25 14.625Z"
  //           stroke="#F56E0F"
  //           strokeWidth="2"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //       </g>
  //       <defs>
  //         <clipPath id="clip0_2973_43889">
  //           <rect width="24" height="24" fill="white" />
  //         </clipPath>
  //       </defs>
  //     </svg>
  //   ),
  // };

  return (
    <div className="mb-[10rem]">
              <div className="items-center mb-4">
            <span className="text-white lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold">
            DeFi on{" "}
            </span>
            <span className="text-[#F56E0F] lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold">
            Bitcoin
            </span>
          </div>
      <div className="text-white font-mitr font-bold lg:text-[65px] lg:leading-[55px] text-[25px] mb-8">

      </div>
      {/* <div className="text-[#FFBF00] font-mitr mb-8 font-bold lg:text-[65px] lg:leading-[55px] text-[25px]">
        Unmatched simplicity
      </div> */}
      <div className="lg:block hidden mb-14">
        <div className="text-white font-mitr lg:text-[16px] lg:leading-[22px] text-[20px] leading-[30px]">
        Monark is your all-in-one solution for trading, 
        </div>
        <div className="text-white font-mitr lg:text-[16px] lg:leading-[22px] text-[20px] leading-[30px]">
        earning and launching projects on Rootstock.
        </div>
      </div>
      <div className="lg:hidden block mb-14">
        <div className="text-white font-mitr mb-8  lg:text-[16px] lg:leading-[22px] text-[20px] leading-[30px]">
          Monark is your all-in-one solution for trading, earning and launching projects on Rootstock.
        </div>
      </div>
      <div className="flex flex-col lg:flex-row max-w-full gap-6">
        {/* // <Flex maxWidth="100%" flexDirection={["column", null, null, "row"]}> */}
        {/* <IconCard
          {...UsersCardData}
          // mr={[null, null, null, "16px"]}
          // mb={["16px", null, null, "0"]}
          // background="white"
        >
          <StatCardContent
            // headingText={("%users% users", { users: "N/A" })}
            headingText={`%tvl% staked - ${tvl || "SOON"}`}
            bodyText={"Total Value Locked"}
            // highlightColor="red"
            titleColor="#F56E0F"
            valueColor="#C54177"
          />
        </IconCard> */}
        {/* <IconCard
          {...StakedCardData}
          // mr={[null, null, null, "16px"]}
          // mb={["16px", null, null, "0"]}
          // background="white"
        >
          <StatCardContent
            headingText={`%tvl% staked - ${tvl || "SOON"}`}
            bodyText={"Market Cap"}
            // highlightColor="red"
            titleColor="#F56E0F"
            valueColor="#C54177"
          />
        </IconCard> */}
        {/* <IconCard
          {...StakedCardData}
          // mr={[null, null, null, "16px"]}
          // mb={["16px", null, null, "0"]}
          // background="white"
        >
          <StatCardContent
            // headingText={("%tvl% staked", { tvl: "SOON" })}
            headingText={`%tvl% staked - ${tvl || "SOON"}`}
            bodyText={"Circulating Supply"}
            //  highlightColor="ree"
            titleColor="#F56E0F"
            valueColor="#C54177"
          />
        </IconCard> */}
        {/* <IconCard {...VolumeTradeData}>
          <StatCardContent
            // headingText={("%tvl% staked", { tvl: "N/A" })}
            headingText={`%tvl% staked - ${tvl || "SOON"}`}
            bodyText={"Total Volume Traded"}
            // highlightColor="ree"
            titleColor="#F56E0F"
            valueColor="#C54177"
          />
        </IconCard> */}
      </div>
      {/* </Flex> */}

      {/* // </Flex> */}
    </div>
  );
};

export default Stats;
