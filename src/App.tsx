import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
} from "@headlessui/react";
import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

const experiences = [
  <a
    href="http://react.dev"
    className="flex gap-2 items-center dark:text-white"
  >
    <svg
      viewBox="-10.5 -9.45 21 18.9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-sm text-sky-500 me-0 w-8 h-8 text-brand dark:text-brand-dark flex origin-center transition-all ease-in-out"
    >
      <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
      <g stroke="currentColor" stroke-width="1" fill="none">
        <ellipse rx="10" ry="4.5"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  </a>,
  <a href="https://nextjs.org/" className="dark:text-white">
    <svg
      aria-label="Next.js logotype"
      role="img"
      viewBox="0 0 394 79"
      className="h-5"
    >
      <path
        d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z"
        fill="currentColor"
      ></path>
      <path
        d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z"
        fill="currentColor"
      ></path>
      <path
        d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z"
        fill="currentColor"
      ></path>
      <path
        d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z"
        fill="currentColor"
      ></path>
      <path
        clip-rule="evenodd"
        d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z"
        fill="currentColor"
        fill-rule="evenodd"
      ></path>
      <path
        d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z"
        fill="currentColor"
      ></path>
      <path
        d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z"
        fill="currentColor"
      ></path>
      <path
        d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z"
        fill="currentColor"
      ></path>
    </svg>
  </a>,
  <a href="https://nodejs.org/en" className="dark:text-white">
    <svg
      viewBox="0 0 267 80"
      fill="none"
      aria-label="Node.js logo"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-[#333333] dark:fill-white h-7 NodejsLogo_nodejsLogo__mBW__"
    >
      <mask
        id="mask0_1803_3458"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="267"
        height="80"
      >
        <path d="M267 0H0V79.3784H267V0Z" fill="white"></path>
      </mask>
      <g mask="url(#mask0_1803_3458)">
        <path
          d="M234.983 78.7547C234.292 78.7547 233.648 78.5695 233.05 78.2452L226.929 74.5871C226.008 74.0776 226.469 73.8924 226.745 73.7998C227.987 73.3829 228.217 73.2903 229.506 72.5495C229.644 72.4569 229.828 72.5033 229.966 72.5959L234.66 75.4206C234.844 75.5132 235.074 75.5132 235.212 75.4206L253.575 64.7235C253.758 64.6309 253.852 64.4457 253.852 64.2143V42.8665C253.852 42.6351 253.758 42.4499 253.575 42.3573L235.212 31.7067C235.028 31.614 234.798 31.614 234.66 31.7067L216.298 42.3573C216.114 42.4499 216.022 42.6813 216.022 42.8665V64.2143C216.022 64.3995 216.114 64.6309 216.298 64.7235L221.314 67.641C224.029 69.0301 225.732 67.4094 225.732 65.7886V44.7189C225.732 44.4411 225.962 44.1633 226.285 44.1633H228.632C228.908 44.1633 229.184 44.3947 229.184 44.7189V65.7886C229.184 69.447 227.205 71.577 223.753 71.577C222.695 71.577 221.867 71.577 219.519 70.4195L214.687 67.641C213.491 66.9463 212.754 65.6498 212.754 64.2604V42.913C212.754 41.5236 213.491 40.2271 214.687 39.5324L233.05 28.8356C234.2 28.1873 235.765 28.1873 236.915 28.8356L255.278 39.5324C256.474 40.2271 257.21 41.5236 257.21 42.913V64.2604C257.21 65.6498 256.474 66.9463 255.278 67.641L236.915 78.3378C236.363 78.5695 235.673 78.7547 234.983 78.7547Z"
          fill="#5FA04E"
        ></path>
        <path
          d="M240.69 64.075C232.635 64.075 230.978 60.3704 230.978 57.2215C230.978 56.9437 231.208 56.6658 231.53 56.6658H233.923C234.2 56.6658 234.43 56.8511 234.43 57.1289C234.798 59.5831 235.856 60.7873 240.735 60.7873C244.601 60.7873 246.258 59.9074 246.258 57.8236C246.258 56.6197 245.796 55.7398 239.768 55.1377C234.752 54.6282 231.622 53.5169 231.622 49.4881C231.622 45.7374 234.752 43.5145 239.998 43.5145C245.89 43.5145 248.789 45.5521 249.157 49.9976C249.157 50.1366 249.111 50.2754 249.02 50.4144C248.926 50.507 248.789 50.5997 248.649 50.5997H246.21C245.982 50.5997 245.751 50.4144 245.705 50.1828C245.152 47.6359 243.725 46.8025 239.952 46.8025C235.718 46.8025 235.212 48.2842 235.212 49.3955C235.212 50.7384 235.81 51.1553 241.517 51.8962C247.177 52.637 249.847 53.7021 249.847 57.6845C249.847 61.7595 246.487 64.075 240.69 64.075Z"
          fill="#5FA04E"
        ></path>
        <path
          d="M267.2 41.6621C267.2 43.6071 265.588 45.2279 263.654 45.2279C261.722 45.2279 260.111 43.6533 260.111 41.6621C260.111 39.6247 261.768 38.0966 263.654 38.0966C265.542 38.0966 267.2 39.6709 267.2 41.6621ZM260.664 41.6621C260.664 43.3293 261.999 44.6722 263.608 44.6722C265.266 44.6722 266.601 43.2829 266.601 41.6621C266.601 39.9951 265.266 38.6986 263.608 38.6986C262.045 38.6986 260.664 39.9951 260.664 41.6621ZM262.321 39.6709H263.702C264.162 39.6709 265.083 39.6709 265.083 40.736C265.083 41.4769 264.621 41.6159 264.344 41.7085C264.898 41.7547 264.943 42.1254 264.989 42.6346C265.035 42.9588 265.083 43.5145 265.174 43.6997H264.344C264.344 43.5145 264.207 42.4958 264.207 42.4494C264.162 42.218 264.07 42.1254 263.794 42.1254H263.103V43.7459H262.321V39.6709ZM263.057 41.4307H263.654C264.162 41.4307 264.253 41.0603 264.253 40.875C264.253 40.3194 263.885 40.3194 263.654 40.3194H263.012V41.4307H263.057Z"
          fill="#5FA04E"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M43.6737 41.9539C43.6737 41.1204 43.2136 40.3334 42.4773 39.9165L23.0104 28.5712C22.6883 28.386 22.3201 28.2934 21.9519 28.2472C21.9059 28.2472 21.7679 28.2472 21.7679 28.2472C21.3997 28.2472 21.0315 28.386 20.7094 28.5712L1.19654 39.8701C0.460209 40.287 0 41.0743 0 41.9539L0.0460209 72.3315C0.0460209 72.7484 0.276126 73.165 0.644293 73.3502C1.01246 73.5819 1.47267 73.5819 1.79482 73.3502L13.3921 66.682C14.1284 66.2653 14.5886 65.4781 14.5886 64.6446V50.4282C14.5886 49.5947 15.0488 48.8074 15.7852 48.3908L20.7094 45.5197C21.0776 45.288 21.4917 45.1954 21.9059 45.1954C22.3201 45.1954 22.7343 45.288 23.0565 45.5197L27.9806 48.3908C28.7169 48.8074 29.1773 49.5947 29.1773 50.4282V64.6446C29.1773 65.4781 29.6375 66.2653 30.3738 66.682L41.8791 73.3502C42.2471 73.5819 42.7073 73.5819 43.0755 73.3502C43.4438 73.165 43.6737 72.7484 43.6737 72.3315V41.9539Z"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M137.465 0.138922C137.096 -0.0463072 136.636 -0.0463072 136.314 0.138922C135.946 0.370456 135.716 0.740915 135.716 1.15768V31.2573C135.716 31.5351 135.578 31.8129 135.301 31.9984C135.025 32.1372 134.749 32.1372 134.473 31.9984L129.595 29.1735C128.859 28.7569 127.984 28.7569 127.248 29.1735L107.735 40.5188C106.999 40.9357 106.539 41.7227 106.539 42.5562V65.2004C106.539 66.0342 106.999 66.8212 107.735 67.2381L127.248 78.5834C127.984 79 128.859 79 129.595 78.5834L149.108 67.2381C149.844 66.8212 150.304 66.0342 150.304 65.2004V8.75207C150.304 7.87222 149.844 7.085 149.108 6.66824L137.465 0.138922ZM135.67 57.7451C135.67 57.9765 135.578 58.1617 135.394 58.2544L128.72 62.1444C128.536 62.237 128.306 62.237 128.122 62.1444L121.449 58.2544C121.265 58.1617 121.173 57.9303 121.173 57.7451V49.9656C121.173 49.7339 121.265 49.5487 121.449 49.4561L128.122 45.5663C128.306 45.4737 128.536 45.4737 128.72 45.5663L135.394 49.4561C135.578 49.5487 135.67 49.7803 135.67 49.9656V57.7451Z"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M202.398 49.7801C203.135 49.3632 203.549 48.5762 203.549 47.7425V42.2319C203.549 41.3985 203.089 40.6112 202.398 40.1946L183.023 28.8957C182.287 28.4788 181.413 28.4788 180.676 28.8957L161.164 40.2407C160.427 40.6576 159.967 41.4449 159.967 42.2784V64.9226C159.967 65.7561 160.427 66.5434 161.164 66.96L180.538 78.0737C181.275 78.4905 182.149 78.4905 182.839 78.0737L194.575 71.4983C194.943 71.3131 195.173 70.8962 195.173 70.4793C195.173 70.0627 194.943 69.6459 194.575 69.4606L174.97 58.1153C174.602 57.8839 174.372 57.5135 174.372 57.0966V50.0117C174.372 49.5949 174.602 49.178 174.97 48.9928L181.091 45.4735C181.459 45.2421 181.919 45.2421 182.287 45.4735L188.408 48.9928C188.776 49.2245 189.006 49.5949 189.006 50.0117V55.5685C189.006 55.9853 189.236 56.4019 189.605 56.5872C189.973 56.8188 190.433 56.8188 190.801 56.5872L202.398 49.7801Z"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M181.551 48.7155C181.689 48.6228 181.874 48.6228 182.012 48.7155L185.739 50.8919C185.877 50.9845 185.969 51.1235 185.969 51.3087V55.6615C185.969 55.8468 185.877 55.9858 185.739 56.0784L182.012 58.2548C181.874 58.3474 181.689 58.3474 181.551 58.2548L177.824 56.0784C177.686 55.9858 177.594 55.8468 177.594 55.6615V51.3087C177.594 51.1235 177.686 50.9845 177.824 50.8919L181.551 48.7155Z"
          fill="#5FA04E"
        ></path>
        <path
          d="M76.3012 28.9882C75.5647 28.5716 74.6903 28.5716 73.954 28.9882L54.5792 40.241C53.8429 40.6578 53.4287 41.4449 53.4287 42.2786V64.83C53.4287 65.6637 53.8889 66.4507 54.5792 66.8676L73.954 78.1203C74.6903 78.5369 75.5647 78.5369 76.3012 78.1203L95.6758 66.8676C96.4123 66.4507 96.8263 65.6637 96.8263 64.83V42.2786C96.8263 41.4449 96.3662 40.6578 95.6758 40.241L76.3012 28.9882Z"
          fill="url(#paint0_linear_1803_3458)"
        ></path>
        <path
          d="M95.7221 40.241L76.2554 28.9882C76.0714 28.8956 75.8412 28.803 75.6572 28.7568L53.8433 66.3119C54.0273 66.5433 54.2575 66.7286 54.4874 66.8676L73.9544 78.1203C74.5067 78.4443 75.1508 78.5369 75.749 78.3517L96.2284 40.6578C96.0904 40.4726 95.9063 40.3336 95.7221 40.241Z"
          fill="url(#paint1_linear_1803_3458)"
        ></path>
        <path
          d="M95.7224 66.8669C96.2747 66.5427 96.6889 65.9871 96.8729 65.385L75.5651 28.7098C75.013 28.6172 74.4146 28.6633 73.9085 28.9876L54.5796 40.1939L75.427 78.4437C75.7031 78.3973 76.0255 78.3046 76.3016 78.1659L95.7224 66.8669Z"
          fill="url(#paint2_linear_1803_3458)"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1803_3458"
          x1="83.0183"
          y1="37.3689"
          x2="65.3246"
          y2="73.2407"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3F873F"></stop>
          <stop offset="0.3296" stop-color="#3F8B3D"></stop>
          <stop offset="0.6367" stop-color="#3E9638"></stop>
          <stop offset="0.9341" stop-color="#3DA92E"></stop>
          <stop offset="1" stop-color="#3DAE2B"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_1803_3458"
          x1="72.1833"
          y1="56.1876"
          x2="121.552"
          y2="19.937"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.1376" stop-color="#3F873F"></stop>
          <stop offset="0.4016" stop-color="#52A044"></stop>
          <stop offset="0.7129" stop-color="#64B749"></stop>
          <stop offset="0.9081" stop-color="#6ABF4B"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_1803_3458"
          x1="52.7188"
          y1="53.5463"
          x2="97.551"
          y2="53.5463"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0919165" stop-color="#6ABF4B"></stop>
          <stop offset="0.2871" stop-color="#64B749"></stop>
          <stop offset="0.5984" stop-color="#52A044"></stop>
          <stop offset="0.8624" stop-color="#3F873F"></stop>
        </linearGradient>
      </defs>
    </svg>
  </a>,
  <a
    href="https://expressjs.com/"
    className="font-medium text-2xl dark:text-white"
  >
    Express.js
  </a>,
  <a href="https://typeorm.io/" className="dark:text-white">
    <img
      src="https://github.com/typeorm/typeorm/raw/master/resources/typeorm-logo-colored-dark.png"
      alt=""
      className="h-7"
    />
  </a>,
  <a
    href="https://sequelize.org/"
    className="flex items-center gap-2 dark:text-white"
  >
    <img src="https://sequelize.org/img/logo.svg" className="h-7" alt="" />
  </a>,
  <a href="https://tailwindcss.com/" className="dark:text-white">
    <svg viewBox="0 0 162 24" fill="none" className="h-7">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.668 2c-4.445 0-7.223 2.222-8.334 6.667 1.667-2.222 3.611-3.055 5.833-2.5 1.268.317 2.175 1.236 3.178 2.255C18.979 10.081 20.87 12 25 12c4.445 0 7.223-2.222 8.334-6.666-1.666 2.222-3.61 3.055-5.833 2.5-1.269-.318-2.175-1.237-3.178-2.255C22.69 3.919 20.8 2 16.668 2zM8.334 12C3.889 12 1.11 14.222 0 18.667c1.667-2.222 3.612-3.056 5.833-2.5 1.269.316 2.175 1.236 3.178 2.255C10.645 20.081 12.536 22 16.668 22c4.444 0 7.222-2.222 8.333-6.666-1.667 2.222-3.611 3.055-5.833 2.5-1.268-.317-2.175-1.238-3.177-2.255C14.356 13.92 12.463 12 8.334 12z"
        className="fill-sky-400"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M50 10.427h-2.908v5.63c0 1.501.985 1.477 2.909 1.383v2.276c-3.895.47-5.443-.61-5.443-3.66v-5.63H42.4V7.988h2.158v-3.15l2.534-.751v3.901H50v2.44zm11.088-2.44h2.533v11.729h-2.533v-1.689c-.892 1.243-2.276 1.994-4.105 1.994-3.19 0-5.841-2.698-5.841-6.17 0-3.494 2.65-6.169 5.84-6.169 1.83 0 3.215.75 4.106 1.97V7.988zm-3.706 9.618c2.111 0 3.706-1.572 3.706-3.754s-1.595-3.753-3.706-3.753c-2.111 0-3.706 1.572-3.706 3.753 0 2.182 1.595 3.754 3.706 3.754zM67.844 6.228c-.891 0-1.618-.75-1.618-1.619.002-.43.173-.842.476-1.145a1.612 1.612 0 012.283 0c.304.303.475.715.477 1.145 0 .868-.727 1.619-1.618 1.619zm-1.267 13.488V7.987h2.534v11.729h-2.534zm5.466 0V2.59h2.533v17.124h-2.533zM91.021 7.987h2.674l-3.683 11.729h-2.487l-2.44-7.905-2.463 7.905h-2.486L76.453 7.987h2.674l2.276 8.092 2.463-8.092h2.416l2.44 8.092 2.299-8.092zm5.817-1.759c-.892 0-1.619-.75-1.619-1.619.003-.43.174-.842.477-1.145a1.612 1.612 0 012.284 0c.303.303.475.715.477 1.145 0 .868-.727 1.619-1.619 1.619zm-1.266 13.488V7.987h2.533v11.729H95.57zm11.634-12.034c2.628 0 4.504 1.783 4.504 4.833v7.2h-2.533v-6.943c0-1.783-1.032-2.72-2.627-2.72-1.666 0-2.979.985-2.979 3.377v6.287h-2.534V7.987h2.534V9.49c.774-1.22 2.04-1.807 3.635-1.807zm16.515-4.386h2.533v16.42h-2.533v-1.69c-.891 1.244-2.275 1.994-4.105 1.994-3.19 0-5.841-2.697-5.841-6.17 0-3.494 2.651-6.168 5.841-6.168 1.83 0 3.214.75 4.105 1.97V3.296zm-3.707 14.309c2.112 0 3.707-1.572 3.707-3.754s-1.595-3.753-3.707-3.753c-2.111 0-3.706 1.572-3.706 3.753 0 2.182 1.595 3.754 3.706 3.754zm14.732 2.416c-3.542 0-6.193-2.698-6.193-6.17 0-3.494 2.651-6.169 6.193-6.169 2.299 0 4.293 1.196 5.231 3.026l-2.182 1.267c-.516-1.102-1.665-1.806-3.072-1.806-2.065 0-3.636 1.572-3.636 3.682 0 2.111 1.571 3.683 3.636 3.683 1.407 0 2.556-.727 3.119-1.806l2.182 1.243c-.985 1.853-2.979 3.05-5.278 3.05zm9.453-8.797c0 2.135 6.311.844 6.311 5.185 0 2.346-2.041 3.612-4.574 3.612-2.346 0-4.035-1.056-4.786-2.745l2.182-1.266c.375 1.055 1.313 1.689 2.604 1.689 1.126 0 1.993-.376 1.993-1.315 0-2.087-6.31-.914-6.31-5.113 0-2.205 1.9-3.589 4.293-3.589 1.924 0 3.519.892 4.34 2.44l-2.135 1.196c-.422-.915-1.243-1.337-2.205-1.337-.915 0-1.713.399-1.713 1.243zm10.815 0c0 2.135 6.31.844 6.31 5.185 0 2.346-2.041 3.612-4.575 3.612-2.345 0-4.034-1.056-4.785-2.745l2.182-1.266c.375 1.055 1.313 1.689 2.603 1.689 1.126 0 1.995-.376 1.995-1.315 0-2.087-6.31-.914-6.31-5.113 0-2.205 1.899-3.589 4.292-3.589 1.924 0 3.519.892 4.34 2.44l-2.135 1.196c-.422-.915-1.243-1.337-2.205-1.337-.915 0-1.712.399-1.712 1.243z"
        fill="currentColor"
      ></path>
    </svg>
  </a>,
  <a href="https://mui.com/" className="dark:text-white">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 117 36"
      fill="none"
      className="css-152smmh h-7"
    >
      <path
        d="M11.59 10.73.75 4.43a.5.5 0 0 0-.75.44V22.4c0 .18.1.34.25.43l4.05 2.38a.5.5 0 0 0 .75-.43V13.34a.2.2 0 0 1 .3-.17l6.25 3.58a2 2 0 0 0 2-.01l6.1-3.57a.2.2 0 0 1 .3.17v5.6a1 1 0 0 1-.48.85l-6.28 3.86a.5.5 0 0 0-.24.43v5.64c0 .18.09.34.23.43l8.23 5.2a2 2 0 0 0 2.1.02l10.46-6.2a2 2 0 0 0 .98-1.73V16.63a.5.5 0 0 0-.76-.43l-3.31 2a2 2 0 0 0-.97 1.7v5.43a.5.5 0 0 1-.25.43l-6.19 3.65a2 2 0 0 1-2.04-.01l-3.33-2a.5.5 0 0 1-.02-.84l6.02-3.97a2 2 0 0 0 .9-1.67V4.87a.5.5 0 0 0-.75-.43l-10.7 6.29a2 2 0 0 1-2.01 0Z"
        fill="#007FFF"
      ></path>
      <path
        d="M35 5.36v3.42a2 2 0 0 1-.94 1.7l-3.3 2.05a.5.5 0 0 1-.76-.43V8.52a2 2 0 0 1 1-1.73l3.25-1.86a.5.5 0 0 1 .75.43Z"
        fill="#007FFF"
      ></path>
      <path
        d="M50.38 26.5V8.3h4.5l7.56 10.5-3.32-.02L66.7 8.3h4.44v18.2H66.2v-5.02c0-1.49.03-2.86.1-4.1.07-1.27.21-2.55.42-3.83l.52 1.61-5.64 7.28h-1.72l-5.62-7.35.58-1.54c.2 1.25.34 2.5.41 3.75.07 1.24.1 2.64.1 4.18v5.02h-4.96Zm34.88.16c-1.77 0-3.34-.35-4.7-1.04a7.87 7.87 0 0 1-3.18-2.89 7.92 7.92 0 0 1-1.11-4.19V8.3h5.2v10.09c0 .76.16 1.43.49 2 .33.57.78 1.01 1.35 1.33a4 4 0 0 0 1.95.46c.76 0 1.44-.15 2.03-.46.6-.32 1.07-.76 1.4-1.33.35-.57.52-1.24.52-2V8.3h5.05v10.24a7.78 7.78 0 0 1-4.3 7.08c-1.33.69-2.9 1.04-4.7 1.04Zm14.41-.16v-4.32h4.19v-9.56h-4.19V8.3h13.5v4.32H109v9.56h4.16v4.32h-13.5Z"
        fill="currentColor"
      ></path>
    </svg>
  </a>,
  <a href="https://headlessui.com/" className="dark:text-white">
    <svg
      className="hidden sm:inline h-7"
      viewBox="0 0 174 32"
      aria-hidden="true"
    >
      <path
        d="M6.33447 19.8829L25.8545 13.3649C25.4645 10.9249 25.1865 9.29494 24.8645 8.05094C24.5175 6.71294 24.2425 6.35494 24.1345 6.23094C23.7581 5.80015 23.2895 5.45972 22.7635 5.23494C22.6115 5.16994 22.1855 5.01894 20.8075 5.10194C19.3495 5.18994 17.4355 5.48794 14.4045 5.96794C11.3745 6.44794 9.46147 6.75694 8.04847 7.12294C6.71147 7.46994 6.35247 7.74594 6.22847 7.85394C5.79847 8.23094 5.45847 8.69894 5.23347 9.22494C5.16847 9.37694 5.01747 9.80294 5.10047 11.1819C5.18847 12.6399 5.48647 14.5549 5.96647 17.5859C6.10047 18.4359 6.22147 19.1959 6.33447 19.8829Z"
        className="fill-sky-300 forced-colors:fill-[CanvasText]"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.952696 18.3799C0.0246956 12.5159 -0.440304 9.58392 0.565696 7.22992C1.09011 6.0022 1.88446 4.90844 2.8897 4.02992C4.8167 2.34692 7.7477 1.88292 13.6097 0.953917C19.4737 0.0239174 22.4057 -0.440083 24.7597 0.565917C25.9867 1.0905 27.0798 1.88484 27.9577 2.88992C29.6417 4.81792 30.1057 7.74992 31.0337 13.6149C31.9627 19.4789 32.4267 22.4119 31.4207 24.7649C30.8966 25.9926 30.1026 27.0863 29.0977 27.9649C27.1707 29.6489 24.2387 30.1129 18.3757 31.0419C12.5137 31.9709 9.5817 32.4349 7.2287 31.4289C6.00166 30.9043 4.9086 30.11 4.0307 29.1049C2.3467 27.1769 1.8817 24.2449 0.952696 18.3799ZM11.2937 28.7939C12.8637 28.6989 14.8857 28.3819 17.8787 27.9079C20.8727 27.4339 22.8917 27.1099 24.4157 26.7149C25.8907 26.3319 26.5707 25.9589 27.0097 25.5749C27.6556 25.0101 28.1659 24.307 28.5027 23.5179C28.7327 22.9819 28.8777 22.2199 28.7857 20.6979C28.6907 19.1279 28.3737 17.1049 27.8997 14.1109C27.4257 11.1169 27.1027 9.09592 26.7077 7.57292C26.3247 6.09692 25.9507 5.41692 25.5677 4.97792C25.0033 4.33179 24.3006 3.82114 23.5117 3.48392C22.9757 3.25392 22.2137 3.10892 20.6917 3.20092C19.1217 3.29592 17.1007 3.61292 14.1077 4.08692C11.1137 4.56192 9.0937 4.88492 7.5707 5.27992C6.0947 5.66292 5.4157 6.03692 4.9767 6.41992C4.33049 6.98465 3.81985 7.68772 3.4827 8.47692C3.2537 9.01292 3.1087 9.77492 3.2007 11.2969C3.2957 12.8679 3.6117 14.8899 4.0867 17.8839C4.5607 20.8779 4.8837 22.8989 5.2787 24.4219C5.6617 25.8979 6.0347 26.5779 6.4187 27.0169C6.98311 27.663 7.68585 28.1737 8.4747 28.5109C9.0107 28.7409 9.7707 28.8859 11.2937 28.7939Z"
        className="fill-sky-300 forced-colors:fill-[CanvasText]"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M109.707 6.02002V25H112.515V6.02002H109.707ZM153.582 18.9681C153.582 22.8941 156.468 25.338 160.472 25.338C164.45 25.338 167.362 22.8941 167.362 18.9681V6.80005H164.372V18.786C164.372 20.918 163.15 22.4261 160.472 22.4261C157.794 22.4261 156.572 20.918 156.572 18.786V6.80005H153.582V18.9681ZM173.791 6.80005H170.801V25H173.791V6.80005ZM144.119 15.5881C144.119 16.5634 145.308 16.8937 146.705 17.282C148.697 17.8355 151.113 18.5069 151.113 21.3341C151.113 23.9341 148.851 25.3381 146.043 25.3381C143.443 25.3381 141.571 24.1681 140.739 22.2961L143.157 20.8921C143.573 22.0621 144.613 22.7641 146.043 22.7641C147.291 22.7641 148.253 22.3481 148.253 21.3081C148.253 20.3512 147.057 20.0123 145.654 19.6148C143.665 19.0511 141.259 18.3695 141.259 15.6401C141.259 13.1961 143.365 11.6621 146.017 11.6621C148.149 11.6621 149.917 12.6501 150.827 14.3661L148.461 15.6921C147.993 14.6781 147.083 14.2101 146.017 14.2101C145.003 14.2101 144.119 14.6521 144.119 15.5881ZM135.508 17.282C134.111 16.8937 132.922 16.5634 132.922 15.5881C132.922 14.6521 133.806 14.2101 134.82 14.2101C135.886 14.2101 136.796 14.6781 137.264 15.6921L139.63 14.3661C138.72 12.6501 136.952 11.6621 134.82 11.6621C132.168 11.6621 130.062 13.1961 130.062 15.6401C130.062 18.3695 132.468 19.0511 134.457 19.6148C135.86 20.0123 137.056 20.3512 137.056 21.3081C137.056 22.3481 136.094 22.7641 134.846 22.7641C133.416 22.7641 132.376 22.0621 131.96 20.8921L129.542 22.2961C130.374 24.1681 132.246 25.3381 134.846 25.3381C137.654 25.3381 139.916 23.9341 139.916 21.3341C139.916 18.5069 137.5 17.8355 135.508 17.282ZM117.985 19.6961C118.427 21.7241 120.065 22.7641 122.145 22.7641C123.705 22.7641 124.875 22.0621 125.499 21.1521L127.813 22.5041C126.617 24.2721 124.667 25.3381 122.119 25.3381C117.829 25.3381 115.047 22.4001 115.047 18.5001C115.047 14.6521 117.829 11.6621 121.911 11.6621C125.785 11.6621 128.437 14.7821 128.437 18.5261C128.437 18.9161 128.385 19.3321 128.333 19.6961H117.985ZM117.959 17.4081H125.603C125.213 15.1721 123.575 14.2101 121.885 14.2101C119.779 14.2101 118.349 15.4581 117.959 17.4081ZM103.626 6.80005H106.434V25H103.626V23.128C102.638 24.5061 101.104 25.338 99.0756 25.338C95.5396 25.338 92.6016 22.348 92.6016 18.5C92.6016 14.626 95.5396 11.662 99.0756 11.662C101.104 11.662 102.638 12.494 103.626 13.846V6.80005ZM99.5176 22.66C101.858 22.66 103.626 20.918 103.626 18.5C103.626 16.082 101.858 14.34 99.5176 14.34C97.1776 14.34 95.4096 16.082 95.4096 18.5C95.4096 20.918 97.1776 22.66 99.5176 22.66ZM90.0566 12.0001H87.2486V13.8461C86.2606 12.4941 84.7266 11.6621 82.6986 11.6621C79.1626 11.6621 76.2246 14.6261 76.2246 18.5001C76.2246 22.3481 79.1626 25.3381 82.6986 25.3381C84.7266 25.3381 86.2606 24.5061 87.2486 23.1281V25.0001H90.0566V12.0001ZM87.2486 18.5001C87.2486 20.9181 85.4806 22.6601 83.1406 22.6601C80.8006 22.6601 79.0326 20.9181 79.0326 18.5001C79.0326 16.0821 80.8006 14.3401 83.1406 14.3401C85.4806 14.3401 87.2486 16.0821 87.2486 18.5001ZM64.106 19.6961C64.548 21.7241 66.186 22.7641 68.266 22.7641C69.826 22.7641 70.996 22.0621 71.62 21.1521L73.934 22.5041C72.738 24.2721 70.788 25.3381 68.24 25.3381C63.95 25.3381 61.168 22.4001 61.168 18.5001C61.168 14.6521 63.95 11.6621 68.032 11.6621C71.906 11.6621 74.558 14.7821 74.558 18.5261C74.558 18.9161 74.506 19.3321 74.454 19.6961H64.106ZM64.08 17.4081H71.724C71.334 15.1721 69.696 14.2101 68.006 14.2101C65.9 14.2101 64.47 15.4581 64.08 17.4081ZM58.4402 6.80005H55.4502V14.262H47.6502V6.80005H44.6602V25H47.6502V17.122H55.4502V25H58.4402V6.80005Z"
        className="fill-current forced-colors:fill-[CanvasText]"
      ></path>
    </svg>
  </a>,
  <a
    href="https://www.microsoft.com/en-us/sql-server"
    className="dark:text-white"
  >
    <img src="/sql-server.png" className="h-7" alt="" />
  </a>,
  <a
    href="https://www.postman.com/"
    className="flex items-center gap-2 dark:text-white"
  >
    <img
      src="https://voyager.postman.com/logo/postman-logo-icon-orange.svg"
      className="h-7"
      alt=""
    />
    <span className="font-medium text-2xl dark:text-white">Postman</span>
  </a>,
  <a href="https://www.figma.com" className="dark:text-white">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 33 49"
      aria-label="Homepage"
      className="css-7vzs6a h-7"
    >
      <path
        fill="#00B6FF"
        d="M16.5 23.612a7.28 7.28 0 0 1 7.28-7.279h1.053a8.167 8.167 0 1 1 0 16.333H23.78a7.28 7.28 0 0 1-7.279-7.279z"
      ></path>
      <path
        fill="#24CB71"
        d="M0 40.834a8.167 8.167 0 0 1 8.167-8.167H16.5v8.083c0 4.557-3.735 8.25-8.292 8.25C3.698 49 0 45.344 0 40.834"
      ></path>
      <path
        fill="#FF7237"
        d="M16.5 0v16.333h8.333a8.167 8.167 0 1 0 0-16.333z"
      ></path>
      <path
        fill="#FF3737"
        d="M0 8.166a8.167 8.167 0 0 0 8.167 8.167H16.5V0H8.167A8.167 8.167 0 0 0 0 8.166"
      ></path>
      <path
        fill="#874FFF"
        d="M0 24.5a8.167 8.167 0 0 0 8.167 8.167H16.5V16.334H8.167A8.167 8.167 0 0 0 0 24.5"
      ></path>
    </svg>
  </a>,
];

const sections = [
  <section id="work-experience">
    <h2 className="font-medium text-3xl mb-4">Development Experience</h2>
    <div>
      <b>Full-Stack Developer</b>
    </div>
    <div className="italic">TTCL Public Company Limited – [2022 - Present]</div>
    <ul className="list-disc list-inside my-2 text-sm/6 xl:text-base/10">
      <li>
        Developed and maintained web applications using{" "}
        <b>React, TypeScript, and Node.js.</b>
      </li>
      <li>
        Designed and managed relational databases with <b>SQL Server.</b>
      </li>
      <li>
        Built and integrated <b>REST APIs</b> and <b>GraphQL</b> for efficient
        data handling.
      </li>
      <li>
        Worked on various <b>data management web applications</b>, ensuring
        scalability and performance.
      </li>
      <li>
        Collaborated with teams to <b>simplify complex tasks</b> and improve
        development workflows.
      </li>
      <li>Strong problem-solving and debugging skills.</li>
    </ul>
  </section>,
  <section id="tools">
    <h2 className="font-medium text-3xl mb-4">Technologies I Use</h2>
    <p className="text-lg/6 pb-6">
      These are the tools and frameworks I currently use to deliver high-quality
      work.
    </p>
    <div className="py-4 flex gap-12 items-center flex-wrap">
      {experiences.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  </section>,
  <section id="about-me">
    <h2 className="font-medium text-3xl mb-4">About Me</h2>
    <p className="text-lg/6 pb-6 max-w-screen-md">
      A programmer and traveler with a passion for development, problem-solving,
      and discovering new things. As a full-stack developer, I understand
      business logic and implement solutions efficiently, ensuring fast delivery
      and stability.
    </p>
    <div>
      <InstagramEmbed url="https://www.instagram.com/r.phuwanat/" />
    </div>
  </section>,
  <section id="contact">
    <h2 className="font-medium text-3xl mb-4">Contact</h2>
    <div className="mt-6 border-t border-gray-100 dark:border-gray-700">
      <dl className="divide-y divide-gray-100 dark:divide-gray-700">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-900 dark:text-gray-100">
            Email
          </dt>
          <dd className="mt-1 text-sm/6 text-gray-700 dark:text-gray-300 sm:col-span-2 sm:mt-0">
            <a href="mailto:r.phuwanat.dev@gmail.com">
              r.phuwanat.dev@gmail.com
            </a>
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-900 dark:text-gray-100">
            Phone
          </dt>
          <dd className="mt-1 text-sm/6 text-gray-700 dark:text-gray-300 sm:col-span-2 sm:mt-0">
            <a href="tel:+66994936528">+66 99 493 6528</a>
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-900 dark:text-gray-100">
            Line ID
          </dt>
          <dd className="mt-1 text-sm/6 text-gray-700 dark:text-gray-300 sm:col-span-2 sm:mt-0">
            <a href="https://line.me/ti/p/~yern2026">yern2016</a>
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-900 dark:text-gray-100">
            Available Hour
          </dt>
          <dd className="mt-1 text-sm/6 text-gray-700 dark:text-gray-300 sm:col-span-2 sm:mt-0">
            08:30 - 17:30 Asia/Bangkok
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-900 dark:text-gray-100">
            Preferred Work Location
          </dt>
          <dd className="mt-1 text-sm/6 text-gray-700 dark:text-gray-300 sm:col-span-2 sm:mt-0">
            Bangkok - On site / Hybrid
          </dd>
        </div>
      </dl>
    </div>
  </section>,
];

const App: React.FC = function () {
  return (
    <main className="max-w-screen-xl mx-auto xl:px-8 px-4">
      <nav className="flex p-4 pb-12 gap-6 items-center">
        <a href="/" className="text-xl font-medium">
          R. Phuwanat
        </a>
        <div className="flex-1"></div>
        <a href="#more">Portfolio</a>
      </nav>
      <section id="landing">
        <div className="xl:flex-row flex xl:gap-12 mx-auto flex-col items-center min-h-[calc(100vh-8.5rem)]">
          <div className="flex-1 border-l-4 pl-4 border-black dark:border-white ml-3">
            <h1 className="text-3xl lg:text-6xl font-mono">
              In Code We Trust.
            </h1>
            <p className="text-base/6 py-6 max-w-xl ml-4">
              Hi, I'm Phuwanat Rareongklin a Full-Stack Developer from Bangkok,
              Thailand, specializing in web development for both websites and
              applications. I excel at simplifying complex tasks, collaborating
              effectively in teams, and continuously learning to grow as a
              developer.
            </p>
            <p className="text-base/6 pb-6 max-w-xl ml-4">
              I specialize in building web applications with React, TypeScript,
              and Node.js. With strong expertise in SQL Server, I can design and
              manage databases efficiently. I have experience working with both
              REST APIs and GraphQL, and I’ve contributed to various data
              management web applications, ensuring seamless functionality and
              performance.
            </p>
          </div>
          <div className="flex-1">
            <div className="xl:mx-auto relative flex max-w-xl flex-col gap-6 p-6 items-center border border-b-4 border-r-4 border-black dark:border-white">
              <div className="rounded-full border-2 border-black dark:border-white p-1">
                <img
                  src="/profile.jpg"
                  className="size-48 rounded-full"
                  alt=""
                />
              </div>
              <div className="text-center">
                <span className="font-medium text-2xl">
                  Phuwanat Rareongklin
                </span>
                <div>
                  <span>Full Stack Developer</span>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="mailto:r.phuwanat.dev@gmail.com">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="size-6 dark:text-white"
                  />
                </a>
                <a href="https://www.instagram.com/r.phuwanat/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="size-6 dark:text-white"
                  />
                </a>
                <a href="https://github.com/pwnrrk">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="size-6 dark:text-white"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden xl:flex flex-col items-center justify-center">
          <a className="animate-bounce" href="#more">
            <FontAwesomeIcon icon={faChevronDown} className="dark:text-white" />
          </a>
        </div>
      </section>
      <div className="flex flex-col gap-20 py-12 lg:hidden">
        {sections.map((section, index) => (
          <div key={index}>{section}</div>
        ))}
      </div>
      <TabGroup
        id="more"
        vertical
        className={
          "lg:flex hidden xl:flex-row flex-col-reverse pt-12 gap-4 min-h-[calc(100vh-5.5rem)] items-center"
        }
      >
        <TabPanels className="flex-[0.7]">
          {sections.map((section, index) => (
            <TabPanel key={index} className={"max-w-screen-md"}>
              <Transition
                appear
                show
                {...{
                  enter: "ease-out duration-500",
                  enterFrom: "opacity-0 scale-95",
                  enterTo: "opacity-100 scale-100",
                  leave: "ease-in duration-200",
                  leaveFrom: "opacity-100 scale-100",
                  leaveTo: "opacity-0 scale-95",
                }}
              >
                {section}
              </Transition>
            </TabPanel>
          ))}
        </TabPanels>
        <TabList className={"flex flex-[0.3] xl:flex-col items-start gap-2"}>
          {[
            "Development Experience",
            "Technologies I Use",
            "About Me",
            "Contact",
          ].map((item) => (
            <Tab
              key={item}
              className={
                "transition text-lg outline-none text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white data-[selected]:text-black dark:data-[selected]:text-white border-b-4 border-r-4 border p-3 border-transparent data-[selected]:border-black dark:data-[selected]:border-white"
              }
            >
              {item}
            </Tab>
          ))}
        </TabList>
      </TabGroup>
      <footer className="py-12 flex gap-4 items-center">
        <div className="text-lg">
          &copy; {new Date().getFullYear()} R.Phuwanat
        </div>
        <div className="flex-1"></div>
        <a href="mailto:r.phuwanat.dev@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="size-6 dark:text-white"
          />
        </a>
        <a href="https://www.instagram.com/r.phuwanat/">
          <FontAwesomeIcon
            icon={faInstagram}
            className="size-6 dark:text-white"
          />
        </a>
        <a href="https://github.com/pwnrrk">
          <FontAwesomeIcon icon={faGithub} className="size-6 dark:text-white" />
        </a>
      </footer>
    </main>
  );
};

export default App;
