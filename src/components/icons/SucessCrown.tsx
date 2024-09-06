import ProfileImg from '../common/ProfileImg';

interface SuccessCrownProps {
  avatarSrc?: string;
}

export default function SuccessCrown({ avatarSrc }: SuccessCrownProps) {
  return (
    <div className="relative h-24 w-24">
      <div className="absolute inset-0 flex translate-y-2 items-center justify-center">
        <ProfileImg
          size="lg"
          src={avatarSrc}
          className="clip-path-circle mt-4 h-20 w-20 object-cover"
        />
      </div>
      <svg
        className="absolute left-0 top-0 h-full w-full"
        viewBox="0 0 78 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="avatarClipPath">
            <circle cx="39" cy="39" r="39" />
          </clipPath>
        </defs>
        <path
          d="M15.7017 49.6537C15.7299 49.4432 15.722 49.2323 15.6833 49.0261L14.1135 40.7076C14.0457 40.3468 13.885 40.0107 13.6413 39.7404C12.3062 38.2387 7.7284 33.4286 4.66969 30.22C3.52143 29.0136 1.51894 29.6281 1.20735 31.2187L14.1307 62.2866L15.7017 49.6537Z"
          fill="#8655FF"
        />
        <path
          d="M1.19749 31.2194C1.18655 31.2759 1.17053 31.3271 1.16473 31.3836C0.415925 37.8599 -0.106105 50.0575 5.75061 54.5636C6.22465 54.9291 6.53199 55.4778 6.55587 56.0798C6.63263 57.8858 7.24537 61.8116 10.8994 64.2402C12.1599 65.0777 13.8712 64.3004 14.0583 62.7958L14.1208 62.2925L1.19743 31.2246L1.19749 31.2194Z"
          fill="#6224FD"
        />
        <path
          d="M62.0798 50.1943C62.0566 49.9832 62.0693 49.7725 62.1128 49.5673L63.8751 41.2873C63.9513 40.9282 64.1197 40.5959 64.3696 40.3314C65.7392 38.861 70.4273 34.1584 73.5596 31.0217C74.7356 29.8422 76.7233 30.5029 76.9979 32.1004L63.3575 62.8602L62.0798 50.1943Z"
          fill="#8655FF"
        />
        <path
          d="M76.9967 32.0994C77.0063 32.156 77.0212 32.2076 77.0256 32.2643C77.624 38.7562 77.863 50.9626 71.9034 55.3317C71.421 55.686 71.101 56.2275 71.0632 56.8287C70.9445 58.6324 70.2409 62.543 66.5316 64.8862C65.2519 65.6942 63.5592 64.8775 63.407 63.3689L63.3562 62.8643L76.9966 32.1045L76.9967 32.0994Z"
          fill="#6224FD"
        />
        <path
          d="M50.7987 21.5044C50.8302 21.4533 50.8617 21.3971 50.8829 21.3408L54.2489 11.3567C54.4886 10.6446 53.6986 10.0235 53.0665 10.4327L51.1184 11.6804C50.6313 11.9936 49.9817 11.6929 49.9009 11.1211L49.4876 8.1747C49.402 7.57716 48.7111 7.28629 48.2235 7.64577L45.4224 9.71666C45.0282 10.0052 44.4691 9.88045 44.2427 9.44584L41.8229 4.80475C41.5312 4.24081 40.7239 4.23145 40.4192 4.78847L37.8923 9.37218C37.6559 9.80143 37.094 9.91834 36.7067 9.61557L33.9544 7.48027C33.4753 7.10958 32.7778 7.38435 32.6784 7.97975L32.1969 10.9158C32.1028 11.4907 31.4464 11.7711 30.9668 11.4467L29.0481 10.1542C28.4255 9.73552 27.6215 10.333 27.8446 11.0505L30.8492 20.697L41.1161 15.6425L50.7987 21.5044Z"
          fill="#8655FF"
        />
        <path
          d="M41.1132 15.6457L30.8463 20.7002L30.9752 21.108C31.0644 21.397 31.314 21.6108 31.6168 21.6606L40.7956 23.0733C40.8675 23.0844 40.9446 23.0853 41.0218 23.0759L50.2309 21.8765C50.4679 21.8432 50.6752 21.7068 50.8009 21.5076L41.1183 15.6458L41.1132 15.6457Z"
          fill="#F5F1FF"
        />
        <path
          d="M44.0314 3.41885C44.0128 5.01802 42.702 6.29878 41.1029 6.28023C39.9099 6.2664 38.895 5.5295 38.4648 4.49083C38.9823 5.10367 39.7594 5.49839 40.6284 5.50846C42.2276 5.52701 43.5332 4.24619 43.5517 2.65216C43.5564 2.24594 43.4786 1.85934 43.3335 1.51309C43.7802 2.02226 44.0398 2.69382 44.0314 3.41885Z"
          fill="#82829B"
        />
        <path
          d="M43.5528 2.65116C43.5344 4.24519 42.2287 5.52601 40.6295 5.50747C39.7605 5.49739 38.9834 5.10267 38.4659 4.48983C38.3208 4.14358 38.243 3.75698 38.2477 3.35076C38.2662 1.75673 39.577 0.475966 41.1711 0.494454C42.0401 0.504533 42.8172 0.89925 43.3346 1.51209C43.4798 1.85834 43.5576 2.24494 43.5528 2.65116Z"
          fill="#F5F1FF"
        />
        <path
          d="M29.9533 8.79385C29.9347 10.393 28.6239 11.6738 27.0247 11.6552C25.8318 11.6414 24.8169 10.9045 24.3867 9.86583C24.9041 10.4787 25.6812 10.8734 26.5502 10.8835C28.1494 10.902 29.4551 9.62119 29.4736 8.02716C29.4783 7.62094 29.4005 7.23434 29.2554 6.88809C29.702 7.39726 29.9617 8.06882 29.9533 8.79385Z"
          fill="#82829B"
        />
        <path
          d="M29.4708 8.03007C29.4523 9.6241 28.1466 10.9049 26.5475 10.8864C25.6785 10.8763 24.9014 10.4816 24.3839 9.86873C24.2388 9.52249 24.161 9.13588 24.1657 8.72966C24.1842 7.13563 25.495 5.85487 27.089 5.87336C27.958 5.88344 28.7352 6.27816 29.2526 6.891C29.3977 7.23724 29.4755 7.62385 29.4708 8.03007Z"
          fill="#F5F1FF"
        />
        <path
          d="M58.4493 9.62979C58.4308 11.229 57.12 12.5097 55.5208 12.4912C54.3279 12.4773 53.313 11.7404 52.8828 10.7018C53.4002 11.3146 54.1774 11.7093 55.0464 11.7194C56.6455 11.7379 57.9512 10.4571 57.9697 8.8631C57.9744 8.45688 57.8966 8.07027 57.7515 7.72403C58.1981 8.2332 58.4578 8.90476 58.4493 9.62979Z"
          fill="#82829B"
        />
        <path
          d="M57.9708 8.8582C57.9523 10.4522 56.6467 11.733 55.0475 11.7145C54.1785 11.7044 53.4014 11.3097 52.8839 10.6969C52.7388 10.3506 52.661 9.96401 52.6657 9.55779C52.6842 7.96376 53.995 6.683 55.5891 6.70149C56.4581 6.71156 57.2352 7.10628 57.7526 7.71912C57.8977 8.06537 57.9755 8.45198 57.9708 8.8582Z"
          fill="#F5F1FF"
        />
        <path
          d="M51.4176 6.64999C51.4055 7.69897 50.542 8.54264 49.493 8.53048C48.7114 8.52141 48.0434 8.03539 47.7582 7.35324C48.098 7.75832 48.6093 8.01624 49.1801 8.02286C50.2291 8.03503 51.0874 7.19129 51.0995 6.14746C51.1026 5.88008 51.0489 5.62746 50.9539 5.40008C51.2483 5.73263 51.418 6.17687 51.4125 6.64993L51.4176 6.64999Z"
          fill="#82829B"
        />
        <path
          d="M51.0938 6.14604C51.0817 7.19501 50.2234 8.0336 49.1744 8.02144C48.6037 8.01482 48.0924 7.7569 47.7525 7.35182C47.6574 7.12444 47.6038 6.87182 47.6069 6.60444C47.6191 5.55547 48.4825 4.71693 49.5263 4.72904C50.0971 4.73566 50.6084 4.99358 50.9482 5.39865C51.0433 5.62604 51.0969 5.87865 51.0938 6.14604Z"
          fill="#F5F1FF"
        />
        <path
          d="M35.6325 6.46249C35.6203 7.51147 34.7569 8.35514 33.7079 8.34298C32.9263 8.33391 32.2582 7.84789 31.973 7.16574C32.3129 7.57082 32.8242 7.82874 33.3949 7.83536C34.4439 7.84753 35.3022 7.00379 35.3143 5.95996C35.3174 5.69258 35.2638 5.43996 35.1687 5.21258C35.4631 5.54513 35.6328 5.98937 35.6274 6.46243L35.6325 6.46249Z"
          fill="#82829B"
        />
        <path
          d="M35.3165 5.96244C35.3043 7.01142 34.4461 7.85001 33.3971 7.83784C32.8263 7.83122 32.315 7.5733 31.9752 7.16823C31.8801 6.94085 31.8265 6.68823 31.8296 6.42084C31.8417 5.37187 32.7051 4.53334 33.749 4.54544C34.3197 4.55206 34.831 4.80999 35.1709 5.21506C35.266 5.44244 35.3196 5.69506 35.3165 5.96244Z"
          fill="#F5F1FF"
        />
        <path
          d="M37.6367 14.1419C37.6358 14.219 37.6606 14.2913 37.7113 14.3536L40.8949 18.3247C40.9456 18.387 41.0171 18.429 41.089 18.4401L41.1384 14.1773L37.6367 14.1367L37.6367 14.1419Z"
          fill="#82829B"
        />
        <path
          d="M41.1853 9.92857C41.1131 9.94316 41.0407 9.97832 40.9885 10.0394L37.7137 13.9356C37.6616 13.9967 37.635 14.0736 37.6342 14.1456L41.1359 14.1862L41.1853 9.92343L41.1853 9.92857Z"
          fill="#F5F1FF"
        />
        <path
          d="M41.4971 10.0423C41.416 9.94363 41.293 9.90106 41.1796 9.92546L41.1302 14.1882L44.7553 14.2302C44.7562 14.1531 44.7313 14.0808 44.6806 14.0185L41.497 10.0474L41.4971 10.0423Z"
          fill="#82829B"
        />
        <path
          d="M41.0834 18.4451C41.1963 18.467 41.3201 18.4324 41.4035 18.3357L44.6784 14.4395C44.7305 14.3784 44.7571 14.3015 44.758 14.2295L41.1328 14.1875L41.0834 18.4502L41.0834 18.4451Z"
          fill="#F5F1FF"
        />
      </svg>
    </div>
  );
}
