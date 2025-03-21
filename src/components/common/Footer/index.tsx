import React from "react";
import Monark from "@/assets/monark.png";
import MonarkLogo from "@/assets/monark-logo.png";

interface SocialLinksProps {
  order: number[];
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ ...props }) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [showSoon, setShowSoon] = React.useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <div {...props} className="flex">
      {/*twitter*/}
      <div
        className="lg:mr-4 mr-auto"
        onClick={() =>
          window.open("https://x.com/MonarkExchange", "_blank")
        }
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hover:cursor-pointer hover:opacity-20 hover:scale-125"
        >
          <path
            d="M4.42687 3.83984L13.5256 17.1048L3.98438 28.1598H6.01813L14.4269 18.4173L21.1094 28.1598H27.5181L17.9969 14.2798L27.0081 3.83984H24.9756L17.0969 12.9673L10.8356 3.83984H4.42687Z"
            fill="#F56E0F"
          />
        </svg>
      </div>

      {/*telegram*/}

      <div className="relative group lg:mr-4 mr-auto">
        <div
          className="relative inline-block"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:cursor-pointer hover:opacity-20 hover:scale-125"
          >
            <path
              d="M29.6108 3.27352C29.4559 3.13973 29.2674 3.05075 29.0656 3.01617C28.8638 2.98159 28.6565 3.00271 28.4658 3.07727L3.1333 12.991C2.77428 13.1306 2.47033 13.3831 2.26721 13.7104C2.06409 14.0377 1.97278 14.4221 2.00705 14.8058C2.04131 15.1895 2.19929 15.5516 2.4572 15.8378C2.7151 16.1239 3.05898 16.3185 3.43705 16.3923L10.0008 17.681V24.9998C9.99951 25.3984 10.118 25.7883 10.3409 26.1188C10.5637 26.4493 10.8807 26.7053 11.2508 26.8535C11.6203 27.0044 12.0266 27.0406 12.417 26.9575C12.8073 26.8743 13.1636 26.6756 13.4396 26.3873L16.6046 23.1048L21.6258 27.4998C21.9881 27.8211 22.4553 27.9989 22.9396 27.9998C23.1518 27.9996 23.3626 27.9663 23.5646 27.901C23.8945 27.7963 24.1912 27.607 24.4252 27.352C24.6593 27.0969 24.8224 26.785 24.8983 26.4473L29.9721 4.37477C30.0174 4.17571 30.0078 3.96805 29.9442 3.77405C29.8805 3.58005 29.7653 3.40702 29.6108 3.27352ZM22.9421 25.9998L12.6071 16.9373L27.4821 6.27602L22.9421 25.9998Z"
              fill="#F56E0F"
            />
          </svg>
          <div
            className={`absolute z-10 ${
              dropdownOpen ? "origin-bottom" : "hidden"
            } bg-white text-[16px] leading-[22px] font-bold text-[#F56E0F] text-center text-xs rounded-3xl whitespace-nowrap bottom-full left-1/2 transform -translate-x-1/2`}
          >
            <div className="dropdown">
              <div className="dropdown-content flex flex-col rounded-3xl">
                <a
                  href="https://t.me/MONARKannouncements"
                  target="_blank"
                  className="dropdown-item font-mitr px-4 py-2 rounded-md"
                >
                  Telegram Announcements
                </a>
                <a
                  href="https://t.me/MONARKOfficial"
                  target="_blank"
                  className="dropdown-item font-mitr  px-4 py-2 rounded-md"
                >
                  Telegram Group
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*discord*/}
      {/* <div
        className="lg:mr-4 mr-auto"
        onClick={() => window.open("https://discord.gg/h9eEzHJa", "_blank")}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hover:cursor-pointer hover:opacity-20 hover:scale-125"
        >
          <path
            d="M30.9383 21.7995L27.2496 7.25073C27.1525 6.87198 26.9471 6.52976 26.6584 6.266C26.3698 6.00224 26.0105 5.82838 25.6246 5.76573L21.1171 5.02573C20.6202 4.94581 20.1113 5.05356 19.6894 5.32803C19.2676 5.6025 18.9629 6.02406 18.8346 6.51073L18.8083 6.61698C18.7913 6.68449 18.7886 6.7548 18.8004 6.82341C18.8121 6.89202 18.838 6.95742 18.8765 7.01543C18.915 7.07344 18.9652 7.12278 19.0238 7.16028C19.0824 7.19779 19.1483 7.22264 19.2171 7.23323C20.2514 7.38503 21.2718 7.61996 22.2683 7.93573C22.5175 8.0109 22.7287 8.17802 22.8591 8.40319C22.9896 8.62835 23.0295 8.89471 22.9708 9.14823C22.9371 9.28035 22.8767 9.40417 22.7934 9.51208C22.71 9.61999 22.6055 9.70972 22.4862 9.77575C22.3669 9.84178 22.2353 9.88272 22.0996 9.89604C21.9639 9.90937 21.8269 9.8948 21.6971 9.85323C17.9994 8.71921 14.0473 8.71486 10.3471 9.84073C10.0967 9.92493 9.82344 9.90944 9.58415 9.79747C9.34486 9.68551 9.1579 9.48568 9.06208 9.23948C9.01653 9.11315 8.9969 8.97894 9.00435 8.84485C9.01181 8.71077 9.04619 8.57956 9.10545 8.45905C9.16471 8.33854 9.24764 8.23121 9.34929 8.14344C9.45093 8.05568 9.56921 7.98929 9.69708 7.94823C10.7061 7.62684 11.7395 7.38773 12.7871 7.23323C12.8559 7.22264 12.9217 7.19779 12.9803 7.16028C13.039 7.12278 13.0892 7.07344 13.1276 7.01543C13.1661 6.95742 13.192 6.89202 13.2038 6.82341C13.2155 6.7548 13.2128 6.68449 13.1958 6.61698L13.1696 6.51073C13.0413 6.02365 12.7361 5.60181 12.3137 5.3275C11.8912 5.05318 11.3817 4.94604 10.8846 5.02698L6.37457 5.76698C5.98879 5.82954 5.62961 6.00321 5.341 6.26674C5.05239 6.53026 4.84686 6.87221 4.74957 7.25073L1.06082 21.7995C0.945165 22.2568 0.995502 22.7403 1.20288 23.164C1.41026 23.5877 1.76122 23.924 2.19332 24.1132L10.5683 27.827C10.8202 27.9389 11.0922 27.9982 11.3678 28.0012C11.6434 28.0041 11.9166 27.9507 12.1708 27.8441C12.425 27.7376 12.6546 27.5802 12.8458 27.3817C13.0369 27.1831 13.1853 26.9475 13.2821 26.6895L13.7183 25.5082C13.7443 25.4375 13.754 25.3618 13.7466 25.2867C13.7392 25.2117 13.7149 25.1394 13.6756 25.075C13.6363 25.0107 13.583 24.9561 13.5196 24.9153C13.4562 24.8745 13.3844 24.8486 13.3096 24.8395C12.0953 24.6924 10.8972 24.433 9.73083 24.0645C9.48272 23.9891 9.27241 23.8224 9.14228 23.5981C9.01216 23.3738 8.97188 23.1085 9.02958 22.8557C9.06301 22.7233 9.12325 22.599 9.20656 22.4907C9.28987 22.3824 9.39449 22.2924 9.51396 22.2261C9.63344 22.1598 9.76523 22.1186 9.90121 22.1053C10.0372 22.0919 10.1745 22.1065 10.3046 22.1482C14.0162 23.2849 17.983 23.2849 21.6946 22.1482C21.8245 22.1067 21.9616 22.0922 22.0974 22.1056C22.2331 22.119 22.3647 22.16 22.484 22.2262C22.6033 22.2923 22.7079 22.3822 22.7911 22.4902C22.8744 22.5983 22.9347 22.7223 22.9683 22.8545C23.0267 23.1075 22.9867 23.3732 22.8565 23.5979C22.7263 23.8225 22.5156 23.9893 22.2671 24.0645C21.1012 24.4331 19.9035 24.6926 18.6896 24.8395C18.6148 24.8486 18.543 24.8745 18.4796 24.9153C18.4162 24.9561 18.3628 25.0107 18.3235 25.075C18.2842 25.1394 18.26 25.2117 18.2526 25.2867C18.2452 25.3618 18.2548 25.4375 18.2808 25.5082L18.7171 26.6895C18.814 26.9474 18.9625 27.1829 19.1537 27.3813C19.3448 27.5798 19.5745 27.7371 19.8286 27.8436C20.0827 27.9501 20.3559 28.0036 20.6314 28.0007C20.9069 27.9979 21.179 27.9387 21.4308 27.827L29.8058 24.1132C30.2379 23.924 30.5889 23.5877 30.7963 23.164C31.0037 22.7403 31.054 22.2568 30.9383 21.7995ZM11.4996 19.0007C11.2029 19.0007 10.9129 18.9128 10.6662 18.7479C10.4195 18.5831 10.2273 18.3488 10.1138 18.0748C10.0002 17.8007 9.97052 17.4991 10.0284 17.2081C10.0863 16.9171 10.2291 16.6499 10.4389 16.4401C10.6487 16.2303 10.916 16.0874 11.2069 16.0296C11.4979 15.9717 11.7995 16.0014 12.0736 16.1149C12.3477 16.2284 12.582 16.4207 12.7468 16.6674C12.9116 16.9141 12.9996 17.2041 12.9996 17.5007C12.9996 17.8986 12.8415 18.2801 12.5602 18.5614C12.2789 18.8427 11.8974 19.0007 11.4996 19.0007ZM20.4996 19.0007C20.2029 19.0007 19.9129 18.9128 19.6662 18.7479C19.4195 18.5831 19.2273 18.3488 19.1138 18.0748C19.0002 17.8007 18.9705 17.4991 19.0284 17.2081C19.0863 16.9171 19.2291 16.6499 19.4389 16.4401C19.6487 16.2303 19.916 16.0874 20.2069 16.0296C20.4979 15.9717 20.7995 16.0014 21.0736 16.1149C21.3477 16.2284 21.582 16.4207 21.7468 16.6674C21.9116 16.9141 21.9996 17.2041 21.9996 17.5007C21.9996 17.8986 21.8415 18.2801 21.5602 18.5614C21.2789 18.8427 20.8974 19.0007 20.4996 19.0007Z"
            fill="#F56E0F"
          />
        </svg>
      </div> */}
   <div className="relative lg:mr-4 mr-auto">
      {/* Bouton Discord */}
      <div
        // className="lg:mr-4 mr-auto"
        onMouseEnter={() => setShowSoon(true)}
        onMouseLeave={() => setShowSoon(false)}
        // onClick={() => window.open("https://discord.gg/h9eEzHJa", "_blank")}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hover:cursor-pointer hover:opacity-20 hover:scale-125"
        >
          <path
            d="M30.9383 21.7995L27.2496 7.25073C27.1525 6.87198 26.9471 6.52976 26.6584 6.266C26.3698 6.00224 26.0105 5.82838 25.6246 5.76573L21.1171 5.02573C20.6202 4.94581 20.1113 5.05356 19.6894 5.32803C19.2676 5.6025 18.9629 6.02406 18.8346 6.51073L18.8083 6.61698C18.7913 6.68449 18.7886 6.7548 18.8004 6.82341C18.8121 6.89202 18.838 6.95742 18.8765 7.01543C18.915 7.07344 18.9652 7.12278 19.0238 7.16028C19.0824 7.19779 19.1483 7.22264 19.2171 7.23323C20.2514 7.38503 21.2718 7.61996 22.2683 7.93573C22.5175 8.0109 22.7287 8.17802 22.8591 8.40319C22.9896 8.62835 23.0295 8.89471 22.9708 9.14823C22.9371 9.28035 22.8767 9.40417 22.7934 9.51208C22.71 9.61999 22.6055 9.70972 22.4862 9.77575C22.3669 9.84178 22.2353 9.88272 22.0996 9.89604C21.9639 9.90937 21.8269 9.8948 21.6971 9.85323C17.9994 8.71921 14.0473 8.71486 10.3471 9.84073C10.0967 9.92493 9.82344 9.90944 9.58415 9.79747C9.34486 9.68551 9.1579 9.48568 9.06208 9.23948C9.01653 9.11315 8.9969 8.97894 9.00435 8.84485C9.01181 8.71077 9.04619 8.57956 9.10545 8.45905C9.16471 8.33854 9.24764 8.23121 9.34929 8.14344C9.45093 8.05568 9.56921 7.98929 9.69708 7.94823C10.7061 7.62684 11.7395 7.38773 12.7871 7.23323C12.8559 7.22264 12.9217 7.19779 12.9803 7.16028C13.039 7.12278 13.0892 7.07344 13.1276 7.01543C13.1661 6.95742 13.192 6.89202 13.2038 6.82341C13.2155 6.7548 13.2128 6.68449 13.1958 6.61698L13.1696 6.51073C13.0413 6.02365 12.7361 5.60181 12.3137 5.3275C11.8912 5.05318 11.3817 4.94604 10.8846 5.02698L6.37457 5.76698C5.98879 5.82954 5.62961 6.00321 5.341 6.26674C5.05239 6.53026 4.84686 6.87221 4.74957 7.25073L1.06082 21.7995C0.945165 22.2568 0.995502 22.7403 1.20288 23.164C1.41026 23.5877 1.76122 23.924 2.19332 24.1132L10.5683 27.827C10.8202 27.9389 11.0922 27.9982 11.3678 28.0012C11.6434 28.0041 11.9166 27.9507 12.1708 27.8441C12.425 27.7376 12.6546 27.5802 12.8458 27.3817C13.0369 27.1831 13.1853 26.9475 13.2821 26.6895L13.7183 25.5082C13.7443 25.4375 13.754 25.3618 13.7466 25.2867C13.7392 25.2117 13.7149 25.1394 13.6756 25.075C13.6363 25.0107 13.583 24.9561 13.5196 24.9153C13.4562 24.8745 13.3844 24.8486 13.3096 24.8395C12.0953 24.6924 10.8972 24.433 9.73083 24.0645C9.48272 23.9891 9.27241 23.8224 9.14228 23.5981C9.01216 23.3738 8.97188 23.1085 9.02958 22.8557C9.06301 22.7233 9.12325 22.599 9.20656 22.4907C9.28987 22.3824 9.39449 22.2924 9.51396 22.2261C9.63344 22.1598 9.76523 22.1186 9.90121 22.1053C10.0372 22.0919 10.1745 22.1065 10.3046 22.1482C14.0162 23.2849 17.983 23.2849 21.6946 22.1482C21.8245 22.1067 21.9616 22.0922 22.0974 22.1056C22.2331 22.119 22.3647 22.16 22.484 22.2262C22.6033 22.2923 22.7079 22.3822 22.7911 22.4902C22.8744 22.5983 22.9347 22.7223 22.9683 22.8545C23.0267 23.1075 22.9867 23.3732 22.8565 23.5979C22.7263 23.8225 22.5156 23.9893 22.2671 24.0645C21.1012 24.4331 19.9035 24.6926 18.6896 24.8395C18.6148 24.8486 18.543 24.8745 18.4796 24.9153C18.4162 24.9561 18.3628 25.0107 18.3235 25.075C18.2842 25.1394 18.26 25.2117 18.2526 25.2867C18.2452 25.3618 18.2548 25.4375 18.2808 25.5082L18.7171 26.6895C18.814 26.9474 18.9625 27.1829 19.1537 27.3813C19.3448 27.5798 19.5745 27.7371 19.8286 27.8436C20.0827 27.9501 20.3559 28.0036 20.6314 28.0007C20.9069 27.9979 21.179 27.9387 21.4308 27.827L29.8058 24.1132C30.2379 23.924 30.5889 23.5877 30.7963 23.164C31.0037 22.7403 31.054 22.2568 30.9383 21.7995ZM11.4996 19.0007C11.2029 19.0007 10.9129 18.9128 10.6662 18.7479C10.4195 18.5831 10.2273 18.3488 10.1138 18.0748C10.0002 17.8007 9.97052 17.4991 10.0284 17.2081C10.0863 16.9171 10.2291 16.6499 10.4389 16.4401C10.6487 16.2303 10.916 16.0874 11.2069 16.0296C11.4979 15.9717 11.7995 16.0014 12.0736 16.1149C12.3477 16.2284 12.582 16.4207 12.7468 16.6674C12.9116 16.9141 12.9996 17.2041 12.9996 17.5007C12.9996 17.8986 12.8415 18.2801 12.5602 18.5614C12.2789 18.8427 11.8974 19.0007 11.4996 19.0007ZM20.4996 19.0007C20.2029 19.0007 19.9129 18.9128 19.6662 18.7479C19.4195 18.5831 19.2273 18.3488 19.1138 18.0748C19.0002 17.8007 18.9705 17.4991 19.0284 17.2081C19.0863 16.9171 19.2291 16.6499 19.4389 16.4401C19.6487 16.2303 19.916 16.0874 20.2069 16.0296C20.4979 15.9717 20.7995 16.0014 21.0736 16.1149C21.3477 16.2284 21.582 16.4207 21.7468 16.6674C21.9116 16.9141 21.9996 17.2041 21.9996 17.5007C21.9996 17.8986 21.8415 18.2801 21.5602 18.5614C21.2789 18.8427 20.8974 19.0007 20.4996 19.0007Z"
            fill="#F56E0F"
          />
        </svg>
      </div>

      {/* "Soon" Text */}
      {showSoon && (
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 bg-white text-[#F56E0F] text-sm font-bold px-3 py-1 rounded-lg">
          Soon
        </div>
      )}
    </div>

      {/*whitepaper*/}
      <div
        className="lg:mr-4 mr-auto"
        onClick={() =>
          window.open("https://docs.monark.exchange/", "_blank")
        }
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hover:cursor-pointer hover:opacity-20 hover:scale-125"
        >
          <path
            d="M27 4V24C27 24.2652 26.8946 24.5196 26.7071 24.7071C26.5196 24.8946 26.2652 25 26 25H9C8.46957 25 7.96086 25.2107 7.58579 25.5858C7.21071 25.9609 7 26.4696 7 27H24C24.2652 27 24.5196 27.1054 24.7071 27.2929C24.8946 27.4804 25 27.7348 25 28C25 28.2652 24.8946 28.5196 24.7071 28.7071C24.5196 28.8946 24.2652 29 24 29H6C5.73478 29 5.48043 28.8946 5.29289 28.7071C5.10536 28.5196 5 28.2652 5 28V7C5 5.93913 5.42143 4.92172 6.17157 4.17157C6.92172 3.42143 7.93913 3 9 3H26C26.2652 3 26.5196 3.10536 26.7071 3.29289C26.8946 3.48043 27 3.73478 27 4Z"
            fill="#F56E0F"
          />
        </svg>
      </div>

      {/*medium*/}
      <div
        className=""
        onClick={() =>
          window.open("https://medium.com/@monark.exchange", "_blank")
        }
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hover:cursor-pointer hover:opacity-20 hover:scale-125"
        >
          <path
            d="M17 16C17 17.5823 16.5308 19.129 15.6518 20.4446C14.7727 21.7602 13.5233 22.7855 12.0615 23.391C10.5997 23.9965 8.99113 24.155 7.43928 23.8463C5.88743 23.5376 4.46197 22.7757 3.34315 21.6569C2.22433 20.538 1.4624 19.1126 1.15372 17.5607C0.84504 16.0089 1.00347 14.4003 1.60897 12.9385C2.21447 11.4767 3.23985 10.2273 4.55544 9.34824C5.87104 8.46919 7.41775 8 9 8C11.121 8.00232 13.1545 8.84591 14.6543 10.3457C16.1541 11.8455 16.9977 13.879 17 16ZM23 8C22.29 8 20.95 8.345 19.96 10.6562C19.3413 12.1 19 14 19 16C19 18 19.3413 19.9 19.96 21.3438C20.95 23.655 22.29 24 23 24C23.71 24 25.05 23.655 26.04 21.3438C26.6588 19.9 27 18 27 16C27 14 26.6588 12.1 26.04 10.6562C25.05 8.345 23.71 8 23 8ZM30 8C29.7348 8 29.4804 8.10536 29.2929 8.29289C29.1054 8.48043 29 8.73478 29 9V23C29 23.2652 29.1054 23.5196 29.2929 23.7071C29.4804 23.8946 29.7348 24 30 24C30.2652 24 30.5196 23.8946 30.7071 23.7071C30.8947 23.5196 31 23.2652 31 23V9C31 8.73478 30.8947 8.48043 30.7071 8.29289C30.5196 8.10536 30.2652 8 30 8Z"
            fill="#F56E0F"
          />
        </svg>
      </div>
    </div>
  );
};

const items: {
  label: string;
  items: {
    label: string;
    href: string;
    isHighlighted?: boolean;
    icon?: React.ElementType;
  }[];
}[] = [
  {
    label: "About",
    items: [
      //   {
      //     label: "Launchpad Form",
      //     href: "https://forms.gle/KvKnq8TWjfoRPknb7",
      //     isHighlighted: true,
      //     // icon: LaunchpadFormIcon,
      //   },
      {
        label: "Business Contact",
        href: "mailto:monark.exchange@protonmail.com",
      },
      {
        label: "Whitepaper",
        href: "https://docs.monark.exchange/",
      },
      {
        label: "Launch token",
        href: "https://www.likeaser.fun/",
      },
      {
        label: "Collab with us",
        href: "https://docs.monark.exchange/collaborate-with-us",
      },
      /*{
            label: t("Brand"),
            href: "https://docs.pancakeswap.finance/brand",
          },
          {
            label: t("Blog"),
            href: "https://medium.com/pancakeswap",
          },
          {
            label: t("Community"),
            href: "https://docs.pancakeswap.finance/contact-us/telegram",
          },*/
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Support",
        href: "https://t.me/MONARKOfficial",
      },
      {
        label: "Guides",
        href: "https://docs.monark.exchange/connect-wallet",
      },
      {
        label: "Github",
        href: "https://github.com/jmonark/monark",
      },
    ],
  },
  /*{
        label: t("Developers"),
        items: [
    
          {
            label: t("Documentation"),
            href: "https://docs.pancakeswap.finance",
          },
          {
            label: t("Bug Bounty"),
            href: "https://docs.pancakeswap.finance/code/bug-bounty",
          },
          {
            label: t("Audits"),
            href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
          },
          {
            label: t("Careers"),
            href: "https://docs.pancakeswap.finance/hiring/become-a-chef",
          },
        ],
      },*/
];

const Footer = () => {
  return (
    // <footer className="p-4"></footer>
    <div className="bg-[#151419] p-[56px_40px_32px_40px] flex justify-center -mb-8 -ml-8 -mr-8">
      <div className="flex flex-col w-[1200px]">
        <div className="mb-12">
          <div className="flex items-center gap-2 py-1 pl-2 pr-3 bg-[#151419] rounded-3xl  duration-200">
            <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full">
              {/* <img src={AlgebraLogo} width={25} height={25} /> */}
              <img src={MonarkLogo} width={35} height={35} />
            </div>
            {/* <img className="hidden md:block" src={AlgebraIntegral} width={140} height={25} /> */}
            <img
              className="hidden md:block"
              src={Monark}
              width={120}
              height={20}
            />
          </div>
        </div>

        <div className="flex justify-between items-start ">
          {items?.map((item) => (
            <ul className="text-white list-none mb-10 md:mb-0" key={item.label}>
              <li className="flex text-[16px] mb-2 capitalize first:text-[#your_secondary_color] first:font-semibold first:uppercase">
                {item.label}
              </li>
              {item.items?.map(
                ({ label, href, isHighlighted = false, icon }) => (
                  <li key={label}>
                    {href ? (
                      <div className="flex items-center">
                        <a
                          data-theme="dark"
                          href={href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className={`text-${
                            isHighlighted ? "yellow-500" : "text"
                          } font-normal`}
                        >
                          {label}
                          {icon && (
                            <div className="ml-2">
                              {React.createElement(icon, {
                                width: "20px",
                                height: "20px",
                              })}
                            </div>
                          )}
                        </a>
                      </div>
                    ) : (
                      <span>{label}</span>
                    )}
                  </li>
                )
              )}
            </ul>
          ))}
          <div className="hidden lg:flex flex-col justify-end h-full">
            {/* <div className="mb-12">
              <div className="flex items-center gap-2 py-1 pl-2 pr-3 bg-[#151419] rounded-3xl hover:bg-[#201F24] duration-200">
                <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full">
                  <img src={MonarkLogo} width={35} height={35} />
                </div>
                <img
                  className="hidden md:block"
                  src={Monark}
                  width={120}
                  height={20}
                />
              </div>
            </div> */}
            <SocialLinks
              order={[1]}
              className="border-b-none pb-0 mb-0"
              // style={{
              //   borderBottom: "none",
              //   paddingBottom: "0px",
              //   marginBottom: "0px",
              // }}
            />
          </div>
        </div>

        {/* Desktop buttons */}
        <div className="hidden lg:block mt-8">
          <div className="flex justify-between items-center">
            {/* <SocialLinks
              order={[1]}
              style={{
                borderBottom: "none",
                paddingBottom: "0px",
                marginBottom: "0px",
              }}
            /> */}
            <div className="flex items-center">
              {/* {chainId === 5000 && (
                <button
                  data-theme={isDark ? "dark" : "light"}
                  className="bg-[#FFBF00] text-[#400C8B] rounded-[16px] h-12 shadow-none flex items-center"
                  style={{ padding: "0 16px" }}
                  onClick={() => window.open(buyCakeLink, "_blank")}
                >
                  {buyCakeLabel}
                  <PiCoinsBold className="ml-2 text-xl" />
                </button>
              )} */}
            </div>
          </div>
        </div>

        {/* Mobile buttons */}
        <div className="lg:hidden block">
          <SocialLinks order={[1]} className="border-b-none pb-0 mb-0" />
          <div className="flex justify-between items-center mt-14">
            {/* {chainId === 5000 && (
              <button
                data-theme={isDark ? "dark" : "light"}
                className="bg-[#FFBF00] text-[#400C8B] rounded-[16px] h-12 flex items-center"
                onClick={() => window.open(buyCakeLink, "_blank")}
              >
                {buyCakeLabel}
                <PiCoinsBold className="ml-2 text-xl" />
              </button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
