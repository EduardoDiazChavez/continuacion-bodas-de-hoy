import { FC } from "react";
import { PropsIcon } from ".";

export const CrossIcon: FC<PropsIcon> = (props) => {
    return (
      <svg
        width={11}
        height={11}
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M9.39903 4.59519H6.93192V2.12808C6.93192 1.44963 6.37682 0.894531 5.69837 0.894531C5.01992 0.894531 4.46482 1.44963 4.46482 2.12808V4.59519H1.99771C1.31926 4.59519 0.76416 5.15029 0.76416 5.82874C0.76416 6.5072 1.31926 7.06229 1.99771 7.06229H4.46482V9.5294C4.46482 10.2079 5.01992 10.763 5.69837 10.763C6.37682 10.763 6.93192 10.2079 6.93192 9.5294V7.06229H9.39903C10.0775 7.06229 10.6326 6.5072 10.6326 5.82874C10.6326 5.15029 10.0775 4.59519 9.39903 4.59519Z"
          fill="currentColor"
        />
      </svg>
    );
  };