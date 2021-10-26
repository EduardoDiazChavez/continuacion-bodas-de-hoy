import { FC } from "react";
import { PropsIcon } from ".";

export const HeartIconFill: FC<PropsIcon> = (props) => {
    return (
      <svg
        width={17}
        height={15}
        viewBox="0 0 17 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.94015 0.755208C8.13693 0.873326 8.32387 1.00306 8.50097 1.14442C8.67808 1.00306 8.86502 0.873326 9.0618 0.755208C9.88435 0.261436 10.8309 2.75763e-05 11.801 2.75763e-05C12.4925 -0.00153858 13.1774 0.132074 13.816 0.393109C14.4319 0.64385 14.9931 1.00869 15.469 1.46779C15.9446 1.92552 16.3249 2.47012 16.5887 3.0711C16.8622 3.69654 17.0019 4.36071 17 5.04425C17 5.68906 16.8662 6.36097 16.6005 7.04451C16.3801 7.61573 16.0594 8.20826 15.652 8.8066C15.0066 9.75348 14.1191 10.741 13.0171 11.7421C11.189 13.4016 9.38256 14.546 9.30581 14.5944L8.83944 14.8887C8.63282 15.0184 8.36716 15.0184 8.16054 14.8887L7.69417 14.5944C7.61742 14.5479 5.809 13.4016 3.98286 11.7421C2.88089 10.741 1.9934 9.75348 1.34796 8.8066C0.940617 8.20826 0.621831 7.61573 0.399467 7.04451C0.133812 6.36097 0 5.68906 0 5.04425C0 4.36071 0.139715 3.69654 0.413242 3.0711C0.676296 2.46973 1.05671 1.92501 1.53293 1.46779C2.01111 1.00694 2.568 0.644836 3.1859 0.393109C3.82544 0.1317 4.50237 2.75763e-05 5.20094 2.75763e-05C6.17108 2.75763e-05 7.1176 0.261436 7.94015 0.755208Z"
          fill="currentColor"
        />
      </svg>
    );
  };