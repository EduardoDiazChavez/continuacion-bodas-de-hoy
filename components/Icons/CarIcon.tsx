import { FC } from "react"
import { PropsIcon } from "."

export const CarIcon: FC<PropsIcon> = (props) => {
    return (
      <svg width={62} height={40} viewBox="0 0 62 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M33.1849 0C32.0534 0 30.9922 0.415534 30.1787 1.15698C29.3652 0.415534 28.304 0 27.1725 0C24.7238 0 22.7334 1.9636 22.7334 4.3794C22.7334 6.51411 24.0011 8.57141 26.3962 10.3272C28.147 11.6105 29.8772 12.2868 29.9516 12.3153C30.0259 12.3438 30.1002 12.356 30.1787 12.356C30.2572 12.356 30.3315 12.3438 30.4058 12.3153C30.4801 12.2868 32.2104 11.6105 33.9612 10.3272C36.3563 8.57141 37.624 6.51411 37.624 4.3794C37.624 1.9636 35.6336 0 33.1849 0Z" fill="currentColor" />
        <path d="M22.1708 24.1221H20.3107C19.8081 24.1221 19.4009 24.5293 19.4009 25.0318C19.4009 25.5344 19.8081 25.9416 20.3107 25.9416H22.1708C22.6733 25.9416 23.0805 25.5344 23.0805 25.0318C23.0805 24.5293 22.6733 24.1221 22.1708 24.1221Z" fill="currentColor" />
        <path d="M60.0529 28.3632H59.5328V25.7679C59.5328 23.8476 58.0963 22.2163 56.1914 21.9733L45.6945 20.6347L41.5763 13.5306C41.1994 12.8804 40.4984 12.4765 39.7467 12.4765C39.0658 12.4765 38.4228 12.8072 38.0266 13.3611C37.6305 13.9149 37.5255 14.6305 37.7456 15.2751L39.5552 20.5704H22.9061L21.7129 12.804C21.493 11.3725 20.2822 10.3335 18.8338 10.3335C17.2276 10.3335 15.9209 11.6402 15.9209 13.2464V17.1464L5.23438 18.3152C3.58787 18.4953 2.34606 19.8801 2.34606 21.5366V28.2018H2.0828C2.01608 28.2018 1.9496 28.2054 1.88348 28.2118C1.85224 28.2149 1.82173 28.2203 1.79085 28.2247C1.75767 28.2294 1.72461 28.2335 1.69167 28.2398C1.65171 28.2474 1.6126 28.2574 1.57349 28.2673C1.55108 28.273 1.52844 28.2782 1.50616 28.2846C1.46269 28.2972 1.4203 28.3117 1.37804 28.327C1.36654 28.3311 1.35467 28.3341 1.34329 28.3385C1.33651 28.341 1.33009 28.3444 1.32343 28.3471C1.28601 28.3619 1.24932 28.3777 1.21299 28.3946C1.20306 28.3992 1.19301 28.4025 1.18308 28.4074C1.17424 28.4116 1.16601 28.4171 1.15717 28.4214C1.11333 28.4434 1.07034 28.4666 1.02832 28.4914C1.00955 28.5024 0.991027 28.5137 0.972621 28.5253C0.933871 28.5499 0.896211 28.5757 0.859157 28.6027C0.848379 28.6106 0.836633 28.6172 0.826098 28.6252C0.811325 28.6364 0.797763 28.648 0.783595 28.6593C0.771485 28.6689 0.759134 28.6784 0.747146 28.6884C0.710939 28.7185 0.6757 28.7492 0.640705 28.7825C0.630412 28.792 0.619998 28.8019 0.61031 28.8118L0.610189 28.8117C0.515857 28.9062 0.430487 29.0096 0.356741 29.1187C0.319807 29.1732 0.28469 29.2309 0.252116 29.2909C0.187452 29.4098 0.134171 29.5359 0.0937262 29.6657C0.07532 29.725 0.0604255 29.7852 0.0473475 29.8459C0.0434725 29.8639 0.0404452 29.8821 0.0370545 29.9002C0.028578 29.9456 0.0215546 29.9913 0.0161054 30.0373C0.0138046 30.0561 0.0113828 30.0748 0.00968746 30.0939C0.00387498 30.1572 0 30.2206 0 30.2846V31.6108C0 32.803 0.969836 33.7727 2.162 33.7727H6.1358C6.40632 34.9803 7.00876 36.1281 7.94675 37.066C9.26485 38.384 10.9964 39.0433 12.7279 39.0433C14.4594 39.0433 16.1908 38.3841 17.509 37.066C18.447 36.1281 19.0494 34.9803 19.3199 33.7727H42.0469C42.3174 34.9803 42.9198 36.1281 43.8578 37.066C45.1759 38.384 46.9074 39.0431 48.6388 39.0431C50.3703 39.0431 52.1017 38.3841 53.4199 37.066H53.4201C54.358 36.1281 54.9605 34.9803 55.231 33.7727H59.9626C61.086 33.7727 62 32.8588 62 31.7353V30.3099C61.9998 29.2365 61.1264 28.3632 60.0529 28.3632ZM39.4677 14.6866C39.4249 14.5616 39.4739 14.4656 39.5069 14.4194C39.5399 14.3733 39.6148 14.296 39.7468 14.296C39.8518 14.296 39.9496 14.3525 40.0022 14.4432L43.5542 20.5704H41.4783L39.4677 14.6866ZM17.7402 13.2464H17.7404C17.7404 12.6435 18.2308 12.153 18.8338 12.153C19.3773 12.153 19.8318 12.5431 19.9144 13.0803L21.0651 20.5702H20.0084C19.552 20.5702 19.1806 20.199 19.1806 19.7426C19.1806 19.6866 19.1783 19.6308 19.1746 19.5753C19.1734 19.5554 19.1716 19.5355 19.1699 19.5155C19.167 19.4811 19.1634 19.4469 19.159 19.4126C19.156 19.388 19.153 19.3635 19.1492 19.3391C19.1451 19.3126 19.14 19.2862 19.1352 19.2598C19.1238 19.1978 19.1102 19.1364 19.0946 19.0758C19.0923 19.0671 19.0904 19.0581 19.0879 19.0494C19.0774 19.0102 19.0655 18.9716 19.0532 18.9331C19.0506 18.9252 19.0481 18.9174 19.0455 18.9097C18.9889 18.7381 18.9151 18.5741 18.826 18.4196C18.8252 18.4182 18.8243 18.4167 18.8235 18.4153C18.7348 18.2624 18.6314 18.1193 18.5146 17.9874C18.5067 17.9786 18.4991 17.9696 18.4911 17.9609C18.467 17.9345 18.4424 17.9087 18.4172 17.8832C18.4048 17.8707 18.3923 17.8585 18.3797 17.8461C18.3554 17.8226 18.3312 17.7991 18.3062 17.7766C18.3041 17.7748 18.3023 17.7729 18.3002 17.771C18.287 17.7593 18.2733 17.7483 18.2599 17.7369C18.2213 17.7036 18.1817 17.6715 18.141 17.6404C18.1179 17.6227 18.0948 17.6049 18.0712 17.5881C18.0509 17.5737 18.0302 17.5599 18.0094 17.5459C17.9836 17.5286 17.9576 17.5118 17.9314 17.4954C17.9125 17.4837 17.8935 17.4721 17.8742 17.4608C17.8381 17.4396 17.8017 17.4195 17.7647 17.4001C17.7564 17.3958 17.7485 17.3908 17.7402 17.3865V13.2464ZM5.97426 31.953H2.162C1.97321 31.953 1.81967 31.7995 1.81967 31.6108V30.2846C1.81967 30.2608 1.82391 30.2382 1.82984 30.2163C1.83214 30.2078 1.83444 30.1994 1.83759 30.1913C1.83989 30.1854 1.84219 30.1796 1.84486 30.174C1.85745 30.1469 1.87416 30.1221 1.89487 30.101C1.89584 30.1 1.89693 30.0989 1.89802 30.098C1.89862 30.0974 1.90104 30.0952 1.9031 30.0935C1.90601 30.0907 1.9094 30.0884 1.91255 30.0857C1.91642 30.0826 1.91981 30.0798 1.92587 30.0752C1.93967 30.0647 1.95493 30.0555 1.96922 30.0486C1.97552 30.0457 1.98181 30.0428 1.99041 30.0395C2.00603 30.0336 2.02117 30.0292 2.0363 30.0262C2.05059 30.0236 2.06512 30.0219 2.08014 30.0217C2.08111 30.0217 2.0822 30.0214 2.08317 30.0214L6.35643 30.021C6.13677 30.6389 6.00623 31.2889 5.97426 31.953ZM16.2223 35.7793C14.2955 37.7064 11.1602 37.7061 9.23348 35.7793C7.96951 34.5153 7.53467 32.7314 7.92907 31.1096C7.9304 31.1041 7.93197 31.0988 7.9333 31.0935C7.94953 31.0277 7.96721 30.9622 7.98622 30.8971C7.99385 30.8709 8.00233 30.8449 8.01032 30.8188C8.024 30.7744 8.03817 30.73 8.05319 30.6859C8.06372 30.655 8.07486 30.6244 8.08588 30.5936C8.10017 30.5543 8.11482 30.515 8.1302 30.476C8.14267 30.4441 8.15539 30.4123 8.16859 30.3806C8.18457 30.3423 8.20116 30.3043 8.21812 30.2664C8.23192 30.2355 8.2456 30.2045 8.26001 30.1739C8.2789 30.1337 8.29901 30.094 8.31911 30.0541C8.32613 30.0402 8.33303 30.0263 8.34018 30.0124C8.35071 29.992 8.36113 29.9716 8.37203 29.9513C8.39637 29.9058 8.42167 29.8606 8.44747 29.8158C8.46478 29.7858 8.4827 29.756 8.50063 29.7263C8.50608 29.7174 8.51165 29.7084 8.51722 29.6995C8.5372 29.6669 8.55718 29.6343 8.57788 29.6022C8.60162 29.5655 8.6262 29.5294 8.65102 29.4934C8.67452 29.4591 8.69777 29.4248 8.72223 29.3912C8.75141 29.3509 8.78181 29.3115 8.8122 29.2721C8.83472 29.2428 8.85676 29.2133 8.88001 29.1844C8.9161 29.1398 8.95388 29.0962 8.99166 29.0526C9.0114 29.0297 9.03041 29.0064 9.05063 28.9839C9.10973 28.9182 9.17052 28.8536 9.23348 28.7907C10.1669 27.8571 11.4078 27.3431 12.7279 27.3431C12.8929 27.3431 13.0566 27.3511 13.2188 27.367C14.3534 27.4781 15.4056 27.9738 16.2223 28.7905C16.2312 28.7995 16.2393 28.8088 16.2482 28.8178C16.3013 28.8718 16.3535 28.9264 16.4039 28.9825C16.4274 29.0086 16.4496 29.0357 16.4724 29.0623C16.5068 29.1021 16.5413 29.1419 16.5744 29.1827C16.5998 29.2142 16.6239 29.2464 16.6484 29.2784C16.6766 29.3151 16.7049 29.3518 16.7321 29.3892C16.7581 29.4252 16.783 29.4617 16.808 29.4982C16.831 29.5319 16.854 29.5655 16.8762 29.5997C16.9027 29.6406 16.9284 29.682 16.9535 29.7236C16.9715 29.7531 16.9893 29.7829 17.0066 29.8128C17.0337 29.8598 17.0601 29.9069 17.0855 29.9545C17.098 29.9778 17.1101 30.0013 17.1222 30.0248C17.1503 30.0797 17.1779 30.1347 17.2038 30.1902C17.2099 30.2032 17.2156 30.2163 17.2215 30.2292C18.0531 32.0525 17.7204 34.281 16.2223 35.7793ZM52.1332 35.7793C50.2062 37.706 47.071 37.7063 45.1443 35.7793C43.6467 34.2817 43.3137 32.0546 44.1441 30.2319C44.1506 30.2176 44.1568 30.2033 44.1634 30.1892C44.1889 30.1347 44.2159 30.0808 44.2435 30.0271C44.2562 30.0023 44.269 29.9776 44.2822 29.9529C44.3071 29.9065 44.3327 29.8606 44.3591 29.8149C44.3773 29.7834 44.3959 29.7523 44.4148 29.7211C44.4392 29.681 44.4639 29.6412 44.4894 29.6016C44.5128 29.5656 44.537 29.5302 44.5612 29.4947C44.5851 29.4599 44.6087 29.4252 44.6335 29.3909C44.6623 29.3511 44.6925 29.3121 44.7227 29.273C44.7454 29.2434 44.7677 29.2136 44.7912 29.1844C44.8272 29.1399 44.8648 29.0964 44.9025 29.0529C44.9223 29.0299 44.9413 29.0066 44.9617 28.9839C45.0208 28.9182 45.0816 28.8536 45.1445 28.7907C45.2042 28.731 45.2652 28.6731 45.3272 28.617C45.3356 28.6093 45.3446 28.6022 45.3531 28.5946C45.4077 28.5459 45.4627 28.4981 45.5188 28.4523C45.5203 28.4511 45.522 28.4499 45.5234 28.4487C46.4276 27.7133 47.5331 27.3455 48.6387 27.3455C49.7438 27.3455 50.8489 27.713 51.7527 28.4477C51.7547 28.4493 51.7568 28.4509 51.7588 28.4524C51.8141 28.4976 51.8684 28.5448 51.9223 28.5928C51.9316 28.6011 51.9413 28.6089 51.9506 28.6172C52.0116 28.6723 52.0714 28.7294 52.1303 28.7881C52.1313 28.7891 52.1322 28.7899 52.1332 28.7908C52.1334 28.791 52.1336 28.7913 52.1338 28.7914C52.2003 28.8577 52.2645 28.9266 52.3272 28.997C52.3421 29.0137 52.3561 29.0309 52.3708 29.0479C52.4204 29.1051 52.4692 29.1633 52.5162 29.223C52.5278 29.2377 52.5392 29.2526 52.5507 29.2675C52.6022 29.3344 52.6522 29.4023 52.7004 29.4718C52.706 29.4798 52.7117 29.4878 52.7171 29.4959C52.772 29.5763 52.8249 29.6582 52.8753 29.7418C52.8763 29.7435 52.8777 29.7451 52.8786 29.7468C52.8807 29.7503 52.883 29.7537 52.8851 29.7572C52.8977 29.7783 52.9095 29.7998 52.9218 29.8213C52.9474 29.8658 52.9725 29.9105 52.9966 29.9558C53.0092 29.9794 53.0215 30.0033 53.0336 30.0271C53.0558 30.0704 53.0774 30.114 53.0982 30.1578C53.1101 30.1829 53.1222 30.2079 53.1337 30.2332C53.1539 30.2776 53.1729 30.3222 53.1917 30.367C53.2018 30.3914 53.2126 30.4156 53.2226 30.4401C53.2485 30.5046 53.2729 30.5696 53.2961 30.635C53.3067 30.6652 53.3162 30.6957 53.3262 30.7261C53.339 30.7651 53.352 30.8041 53.364 30.8433C53.3742 30.8767 53.3834 30.9103 53.3928 30.9439C53.4035 30.9817 53.4138 31.0196 53.4234 31.0578C53.4317 31.0898 53.4396 31.1219 53.4471 31.1542C53.4574 31.1983 53.4669 31.2425 53.476 31.2869C53.4812 31.3124 53.4868 31.338 53.4916 31.3636C53.7842 32.915 53.3317 34.5808 52.1332 35.7793ZM54.1375 28.3518C54.0976 28.296 54.0562 28.2408 54.0143 28.1859C53.9909 28.1552 53.9673 28.1246 53.9433 28.0942C53.9073 28.0488 53.871 28.0037 53.8337 27.9589C53.7979 27.9156 53.7611 27.8734 53.7241 27.8311C53.6946 27.7973 53.6654 27.7634 53.6351 27.7301C53.569 27.6576 53.5016 27.5863 53.4324 27.5169C53.4282 27.5125 53.4242 27.508 53.4199 27.5037C53.4009 27.4847 53.3811 27.4672 53.3618 27.4485C53.299 27.3871 53.236 27.3259 53.1712 27.2673C53.1527 27.2506 53.1334 27.2351 53.1148 27.2185C53.0468 27.1583 52.9785 27.0987 52.9087 27.0417C52.9025 27.0366 52.8961 27.032 52.8899 27.0271C51.6901 26.0532 50.2054 25.5233 48.6388 25.5233C47.0698 25.5233 45.5829 26.0547 44.382 27.0313C44.3779 27.0347 44.3735 27.0378 44.3694 27.0412C44.2945 27.1025 44.2212 27.1661 44.1485 27.2307C44.1349 27.2428 44.1208 27.2542 44.1071 27.2664C44.0224 27.3432 43.9391 27.4222 43.8576 27.5037C43.7787 27.5825 43.7024 27.663 43.6281 27.745C43.6035 27.7721 43.5804 27.8002 43.5562 27.8276C43.5072 27.8833 43.4584 27.939 43.4116 27.996C43.3855 28.0278 43.3607 28.0602 43.3353 28.0924C43.2921 28.147 43.2489 28.2017 43.2075 28.2575C43.1838 28.2893 43.1612 28.3218 43.1381 28.354C43.0964 28.4122 43.0552 28.4707 43.0155 28.5302C42.996 28.5594 42.9771 28.5888 42.9582 28.6182C42.9161 28.6834 42.8749 28.749 42.8352 28.8154C42.821 28.8391 42.807 28.8631 42.7932 28.8869C42.7493 28.9622 42.7069 29.0383 42.6661 29.1151C42.658 29.1302 42.65 29.1455 42.6422 29.1606C42.5955 29.2498 42.5511 29.34 42.5086 29.4312C42.5073 29.4341 42.5058 29.4372 42.5045 29.4401C42.1399 30.2256 41.9272 31.077 41.8851 31.9529H19.4814C19.4392 31.0765 19.2265 30.2248 18.8615 29.439C18.8605 29.437 18.8596 29.435 18.8587 29.4331C18.8157 29.3409 18.7708 29.2496 18.7237 29.1594C18.7163 29.1451 18.7087 29.1309 18.7012 29.1166C18.6597 29.0388 18.6169 28.9616 18.5723 28.8852C18.559 28.8623 18.5457 28.8396 18.5321 28.8169C18.4917 28.7494 18.4498 28.6825 18.4069 28.6163C18.3886 28.5879 18.3705 28.5597 18.3518 28.5316C18.3112 28.471 18.2692 28.4111 18.2265 28.3517C18.2042 28.3207 18.1824 28.2894 18.1596 28.2587C18.1173 28.2018 18.0733 28.1458 18.0291 28.09C18.0045 28.059 17.9807 28.0276 17.9555 27.997C17.9076 27.9388 17.8579 27.8818 17.8079 27.8251C17.7847 27.7987 17.7624 27.7718 17.7388 27.7457C17.6644 27.6636 17.5879 27.5829 17.5091 27.504C16.2321 26.2269 14.5341 25.5236 12.728 25.5236C10.9219 25.5236 9.22392 26.2269 7.94675 27.5039C7.86791 27.5827 7.7915 27.6635 7.71703 27.7455C7.69306 27.772 7.67053 27.7993 7.64692 27.826C7.59739 27.8823 7.54799 27.9389 7.50052 27.9966C7.47485 28.0279 7.45051 28.0599 7.42544 28.0915C7.3965 28.128 7.36671 28.1641 7.33862 28.2012L4.16561 28.2015V21.5364C4.16561 20.8101 4.71004 20.203 5.43212 20.124L16.4431 18.9197C16.5149 18.9119 16.5859 18.9143 16.655 18.9245C16.6618 18.9258 16.6685 18.9277 16.6753 18.9289C16.8219 18.9544 16.9535 19.0175 17.0614 19.1067C17.0642 19.109 17.067 19.1111 17.0697 19.1134C17.1033 19.1419 17.1346 19.1733 17.1633 19.2068C17.1661 19.2101 17.1687 19.2136 17.1715 19.217C17.2292 19.2866 17.2754 19.3656 17.3076 19.4512C17.3086 19.4536 17.3096 19.4561 17.3104 19.4586C17.3258 19.5006 17.3375 19.5442 17.346 19.589C17.347 19.5943 17.3476 19.5998 17.3485 19.6051C17.3561 19.65 17.3608 19.6958 17.3608 19.7427C17.3608 21.2023 18.5483 22.39 20.0082 22.39H45.0754L55.9611 23.7784C56.96 23.9059 57.7132 24.7613 57.7132 25.768V28.3633H54.1459C54.1432 28.3593 54.1403 28.3557 54.1375 28.3518ZM59.9625 31.953H55.3905C55.3798 31.7414 55.3586 31.5306 55.3284 31.3213C55.3279 31.3177 55.3274 31.3141 55.3269 31.3106C55.3127 31.2134 55.2963 31.1164 55.2779 31.0199C55.2727 30.9924 55.2668 30.965 55.2613 30.9375C55.2481 30.8726 55.234 30.8078 55.2189 30.7433C55.2107 30.7076 55.2025 30.6718 55.1936 30.6362C55.1731 30.5549 55.1516 30.4738 55.1282 30.3932C55.1162 30.3517 55.1029 30.3105 55.0901 30.2692C55.0811 30.2404 55.0727 30.2114 55.0634 30.1827H60.0528C60.1229 30.1827 60.1801 30.2398 60.1801 30.3099V31.7353H60.1802C60.1802 31.8553 60.0825 31.953 59.9625 31.953Z" fill="currentColor" />
        <path d="M48.6392 29.0342C46.847 29.0342 45.3892 30.4921 45.3892 32.2842C45.3892 34.0763 46.8471 35.5342 48.6392 35.5342C50.4312 35.5342 51.8891 34.0763 51.8891 32.2842C51.8891 30.4923 50.4311 29.0342 48.6392 29.0342ZM48.6392 33.7148C47.8505 33.7148 47.2087 33.0731 47.2087 32.2843C47.2087 31.4955 47.8504 30.8538 48.6392 30.8538C49.428 30.8538 50.0695 31.4955 50.0695 32.2843C50.0695 33.0731 49.4279 33.7148 48.6392 33.7148Z" fill="currentColor" />
        <path d="M12.7276 29.0342C10.9354 29.0342 9.47754 30.4921 9.47754 32.2842C9.47754 34.0763 10.9355 35.5342 12.7276 35.5342C14.5196 35.5342 15.9775 34.0763 15.9775 32.2842C15.9775 30.4923 14.5196 29.0342 12.7276 29.0342ZM12.7276 33.7148C11.9389 33.7148 11.2971 33.0731 11.2971 32.2843C11.2971 31.4955 11.9388 30.8538 12.7276 30.8538C13.5164 30.8538 14.1579 31.4955 14.1579 32.2843C14.1579 33.0731 13.5164 33.7148 12.7276 33.7148Z" fill="currentColor" />
      </svg>
    )
  }