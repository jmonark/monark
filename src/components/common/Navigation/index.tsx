import {
  ArrowDownUp,
  // BarChart,
  CircleEllipsisIcon,
  Coins,
  // Rocket,
} from "lucide-react";
import {  NavLink, matchPath, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const PATHS = {
  HOME: "/",
  SWAP: "/swap",
  POOLS: "/pools",
  LAUNCHPAD: "/launchpad",
  ANALYTICS: "/analytics",
  BRIDGE: "/https://powpeg.rootstock.io/",
  DOCS: "/https://docs.monark.exchange/",
  MORE: "none",
};

interface MenuItem {
  title: string;
  link?: string;
  active: string[];
  navIcon?: ReactNode;
  icon?: ReactNode;
  subLinks?: MenuItem[];
  isActive?: boolean;
  external?: string;
}

const menuItems: MenuItem[] = [
  // {
  //     title: 'Home',
  //     link: '/',
  //     active: [PATHS.HOME]
  // },
  {
    title: "Swap",
    link: "/swap",
    active: [PATHS.SWAP],
    navIcon: <ArrowDownUp className="h-6 w-6" />,
  },
  {
    title: "Pools",
    link: "/pools",
    active: [PATHS.POOLS],
    navIcon: <Coins className="h-6 w-6" />,
  },
  // {
  //   title: "Launchpad",
  //   link: "/launchpad",
  //   active: [PATHS.LAUNCHPAD],
  //   isActive: true,
  //   navIcon: <Rocket className="h-6 w-6" />,
  // },
  // {
  //   title: "Analytics",
  //   link: "/analytics",
  //   isActive: true,
  //   active: [PATHS.ANALYTICS],
  //   navIcon: <BarChart className="h-6 w-6" />,
  // },
  {
    title: "Launch Token",
    link: "https://www.likeaser.fun/",
    isActive: false,
    active: [PATHS.ANALYTICS],
    external: "https://www.likeaser.fun/",
    // navIcon: <BarChart className="h-6 w-6" />,
    icon: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.25 19.4783H18.4167V25.9783H0V10.8117C0 9.01333 1.4625 7.56167 3.25 7.56167H7.61583C7.13917 8.19 6.78167 8.92667 6.61917 9.72833H3.25C2.65417 9.72833 2.16667 10.2158 2.16667 10.8117V23.8117H16.25V19.4783ZM25.3608 7.10667L18.265 0L16.7375 1.5275L22.7608 7.55083H11.9167C10.1292 7.55083 8.66667 9.01333 8.66667 10.8008V19.4675H10.8333V10.8117C10.8333 10.2158 11.3208 9.72833 11.9167 9.72833H22.75L16.6725 15.8058L18.2 17.3333L25.3608 10.1725C26.2058 9.3275 26.2058 7.95167 25.3608 7.10667Z"
              //   fill="#F56E0F"
              fill="#FBFBFB"
            />
          </svg>
        ),
  },
  {
    title: "Bridge",
    link: "https://powpeg.rootstock.io/",
    isActive: false,
    active: [PATHS.ANALYTICS],
    // navIcon: <BarChart className="h-6 w-6" />,
    icon: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.25 19.4783H18.4167V25.9783H0V10.8117C0 9.01333 1.4625 7.56167 3.25 7.56167H7.61583C7.13917 8.19 6.78167 8.92667 6.61917 9.72833H3.25C2.65417 9.72833 2.16667 10.2158 2.16667 10.8117V23.8117H16.25V19.4783ZM25.3608 7.10667L18.265 0L16.7375 1.5275L22.7608 7.55083H11.9167C10.1292 7.55083 8.66667 9.01333 8.66667 10.8008V19.4675H10.8333V10.8117C10.8333 10.2158 11.3208 9.72833 11.9167 9.72833H22.75L16.6725 15.8058L18.2 17.3333L25.3608 10.1725C26.2058 9.3275 26.2058 7.95167 25.3608 7.10667Z"
              //   fill="#F56E0F"
              fill="#FBFBFB"
            />
          </svg>
        ),
  },
  {
    title: "More",
    icon: <CircleEllipsisIcon className="h-6 w-6" />,
    link:"",
    active: [PATHS.MORE],
    subLinks: [
      // {
      //   title: "Bridge",
      //   link: "https://powpeg.rootstock.io/",
      //   external: "https://docs.monark.exchange/",
      //   active: [PATHS.BRIDGE],
      //   icon: (
      //     <svg
      //       width="20"
      //       height="20"
      //       viewBox="0 0 26 26"
      //       fill="none"
      //       xmlns="http://www.w3.org/2000/svg"
      //     >
      //       <path
      //         d="M16.25 19.4783H18.4167V25.9783H0V10.8117C0 9.01333 1.4625 7.56167 3.25 7.56167H7.61583C7.13917 8.19 6.78167 8.92667 6.61917 9.72833H3.25C2.65417 9.72833 2.16667 10.2158 2.16667 10.8117V23.8117H16.25V19.4783ZM25.3608 7.10667L18.265 0L16.7375 1.5275L22.7608 7.55083H11.9167C10.1292 7.55083 8.66667 9.01333 8.66667 10.8008V19.4675H10.8333V10.8117C10.8333 10.2158 11.3208 9.72833 11.9167 9.72833H22.75L16.6725 15.8058L18.2 17.3333L25.3608 10.1725C26.2058 9.3275 26.2058 7.95167 25.3608 7.10667Z"
      //         //   fill="#F56E0F"
      //         fill="#FBFBFB"
      //       />
      //     </svg>
      //   ),
      // },
      {
        title: "Docs",
        link: "https://docs.monark.exchange/",
        external: "https://docs.monark.exchange/",
        active: [PATHS.DOCS],
        icon: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.25 19.4783H18.4167V25.9783H0V10.8117C0 9.01333 1.4625 7.56167 3.25 7.56167H7.61583C7.13917 8.19 6.78167 8.92667 6.61917 9.72833H3.25C2.65417 9.72833 2.16667 10.2158 2.16667 10.8117V23.8117H16.25V19.4783ZM25.3608 7.10667L18.265 0L16.7375 1.5275L22.7608 7.55083H11.9167C10.1292 7.55083 8.66667 9.01333 8.66667 10.8008V19.4675H10.8333V10.8117C10.8333 10.2158 11.3208 9.72833 11.9167 9.72833H22.75L16.6725 15.8058L18.2 17.3333L25.3608 10.1725C26.2058 9.3275 26.2058 7.95167 25.3608 7.10667Z"
              //   fill="#F56E0F"
              fill="#FBFBFB"
            />
          </svg>
        ),
      },
    ],
  },
];

import { ReactNode } from "react";

interface NavigationMenuProps {
  children: {
    icon?: ReactNode;
    isActive?: boolean;
    subLinks?: {
      title: string;
      link?: string;
      active: string[];
      icon?: ReactNode;
      isActive?: boolean;
    }[];
  };
  setNavlinkClasses: (paths: string[]) => string;
}

function NavigationMenu({ children, setNavlinkClasses }: NavigationMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDirection, setOpenDirection] = useState("down"); // Par défaut vers le bas
  const [horizontalDirection, setHorizontalDirection] = useState("right"); // Par défaut vers la droite
  const dropdownButtonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownMenuRef = useRef<HTMLDivElement | null>(null);
  let closeTimeout: NodeJS.Timeout | null = null;
  const isExternal = (url : string) => {
    return url.startsWith('http://') || url.startsWith('https://');
  };


  const handleMouseEnter = () => {
    if (closeTimeout !== null) {
      clearTimeout(closeTimeout);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  useEffect(() => {
    if (isOpen) {
      const buttonRect = dropdownButtonRef.current?.getBoundingClientRect(); // Position et taille du bouton
      const dropdownHeight = dropdownMenuRef.current?.offsetHeight || 0; // Hauteur du menu déroulant
      const dropdownWidth = dropdownMenuRef.current?.offsetWidth || 0; // Largeur du menu déroulant

      // Vérifier l'espace disponible en bas et en haut
      const spaceBelow = buttonRect ? window.innerHeight - buttonRect.bottom : 0;
      const spaceAbove = buttonRect ? buttonRect.top : 0;

      if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
        setOpenDirection("up"); // Pas assez de place en bas, ouvrir vers le haut
      } else {
        setOpenDirection("down"); // Suffisamment de place en bas, ouvrir vers le bas
      }

      // Vérifier l'espace disponible à droite et à gauche
      const spaceRight = buttonRect ? window.innerWidth - buttonRect.right : 0;
      const spaceLeft = buttonRect ? buttonRect.left : 0;

      if (spaceRight < dropdownWidth && spaceLeft > dropdownWidth) {
        setHorizontalDirection("left"); // Pas assez de place à droite, ouvrir vers la gauche
      } else {
        setHorizontalDirection("right"); // Suffisamment de place à droite, ouvrir vers la droite
      }
    }
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left">
      <button
        id="dropdownDelayButton"
        ref={dropdownButtonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="text-white font-medium inline-flex items-center"
        type="button"
      >
        {children?.icon && <div className="">{children?.icon}</div>}
      </button>

      <div
        ref={dropdownMenuRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`${
          isOpen ? "block" : "hidden"
        } absolute z-10 bg-[#151419] text-white rounded-lg shadow w-fit p-2 border border-[#FBFBFB]
      transition-transform duration-200 ease-out
      ${openDirection === "down" ? "top-[3rem]" : "bottom-[3rem]"}
      ${horizontalDirection === "right" ? "left-0" : "right-0"}
      `}
      >
        {children?.subLinks &&
          children?.subLinks?.map((subLink) => (
            <NavLink
              key={`nav-item-${subLink.link}`}
              to={subLink.isActive ? "" : subLink.link || ""}
              className={`${
                subLink.isActive
                  ? "cursor-not-allowed text-[#323236]"
                  :  setNavlinkClasses(subLink.active)
              } py-2 px-4 rounded-3xl font-semibold select-none duration-200 flex`}
              onClick={(e) => {
                if (subLink.isActive) {
                  e.preventDefault();
                } else if (subLink.link && isExternal(subLink.link)) {
                  window.open(subLink.link, '_blank', 'noopener,noreferrer');
                  e.preventDefault();
                }
              }}
            >
              {subLink.title}
              {subLink?.icon && (
                <div className="ml-2">{subLink?.icon}</div>
              )}
            </NavLink>
          ))}
      </div>
    </div>
  );
}

const Navigation = () => {
  const { pathname } = useLocation();

  // const setNavlinkClasses = (paths: string[]) => paths.some((path) => matchPath(path, pathname)) ? "text-primary-text bg-muted-primary" : "hover:bg-[#201F24]";
  const setNavlinkClasses = (paths: string[]) =>
    paths.some((path) => matchPath(path, pathname))
      ? "text-[#F56E0F] md:bg-[#F56E0F]/[0.2]"
      : "hover:bg-[#201F24]";

  return (
    <div>
      <nav className="lg:block hidden">
        <ul className="flex justify-center gap-1 rounded-full whitespace-nowrap">
          {menuItems.map((item) => (
            <NavLink
              key={`nav-item-${item.link}`}
              // target={item.external ? "_blank" : ""}
              onClick={(e) => item.isActive && e.preventDefault()}
              to={item.link}
              className={` ${
                item.isActive
                  ? "cursor-not-allowed text-[#323236]"
                  : setNavlinkClasses(item.active)
              } py-2 px-4 rounded-3xl font-semibold select-none duration-200 flex items-center`}

            >
              {!item?.subLinks && item.title}
              {!item?.subLinks && item?.icon && (
                <div className="ml-2">{item?.icon}</div>
              )}
              {item?.subLinks && (
                <div>
                  <NavigationMenu children={item} setNavlinkClasses={setNavlinkClasses}/>
                </div>
              )}
            </NavLink>
          ))}
        </ul>
      </nav>
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex h-14 w-full items-center justify-around bg-[#151419] shadow-[0_-2px_4px_rgba(0,0,0,0.1)] md:h-16 border-t border-l border-r border-[#FBFBFB] rounded-t-[24px]">
      {menuItems.map((item) => (
            <NavLink
              key={`nav-item-${item.link}`}
              onClick={(e) => item.isActive && e.preventDefault()}
              to={item.link}
              className={` ${
                item.isActive
                  ? "cursor-not-allowed text-[#323236]"
                  : setNavlinkClasses(item.active)
              } flex flex-col items-center py-2 px-2 justify-center gap-1 text-sm font-medium text-white focus:rounded-lg focus:p-2`}
            >
              {!item?.subLinks && item?.navIcon && (
                <div className="ml-2">{item?.navIcon}</div>
              )}
              {!item?.subLinks && item.title}
              {item?.subLinks && (
                <div >
                  <NavigationMenu children={item} setNavlinkClasses={setNavlinkClasses}/>
                </div>
              )}
            </NavLink>
          ))}
      </nav>
    </div>
  );
};

export default Navigation;