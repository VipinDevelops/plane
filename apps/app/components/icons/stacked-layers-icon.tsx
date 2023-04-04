import React from "react";

import type { Props } from "./types";

export const StackedLayersIcon: React.FC<Props> = ({
  width = "24",
  height = "24",
  className,
  color = "#858e96",
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.0398 13.4374C18.1224 13.5807 18.1448 13.7508 18.1022 13.9106C18.0596 14.0703 17.9554 14.2067 17.8125 14.2898L10.3125 18.6648C10.2169 18.7205 10.1083 18.7499 9.99766 18.7499C9.88703 18.7499 9.77838 18.7205 9.68281 18.6648L2.18281 14.2898C2.04195 14.2051 1.94009 14.0684 1.8993 13.9092C1.8585 13.75 1.88205 13.5812 1.96484 13.4392C2.04764 13.2972 2.18301 13.1936 2.34166 13.1507C2.50031 13.1078 2.66946 13.1292 2.8125 13.2101L10 17.4015L17.1875 13.2101C17.3308 13.1275 17.5009 13.1051 17.6606 13.1477C17.8204 13.1903 17.9567 13.2945 18.0398 13.4374ZM17.1875 9.46009L10 13.6515L2.8125 9.46009C2.67019 9.38924 2.50623 9.37528 2.35399 9.42105C2.20175 9.46682 2.07267 9.56888 1.99303 9.70646C1.91338 9.84405 1.88916 10.0068 1.92529 10.1616C1.96142 10.3164 2.05518 10.4517 2.1875 10.5398L9.6875 14.9148C9.78307 14.9705 9.89171 14.9999 10.0023 14.9999C10.113 14.9999 10.2216 14.9705 10.3172 14.9148L17.8172 10.5398C17.8892 10.499 17.9524 10.4444 18.0032 10.379C18.0539 10.3136 18.0912 10.2388 18.1128 10.1589C18.1344 10.079 18.1399 9.99559 18.129 9.91354C18.1181 9.8315 18.091 9.75243 18.0493 9.68094C18.0076 9.60944 17.9521 9.54694 17.8861 9.49706C17.82 9.44718 17.7447 9.41092 17.6646 9.39037C17.5844 9.36983 17.5009 9.36541 17.419 9.37738C17.3371 9.38935 17.2584 9.41746 17.1875 9.46009ZM1.875 6.24994C1.87525 6.14047 1.90425 6.03299 1.95909 5.93824C2.01393 5.8435 2.0927 5.76483 2.1875 5.71009L9.6875 1.33509C9.78307 1.27936 9.89171 1.25 10.0023 1.25C10.113 1.25 10.2216 1.27936 10.3172 1.33509L17.8172 5.71009C17.9115 5.76514 17.9898 5.84395 18.0442 5.93867C18.0986 6.03339 18.1272 6.14071 18.1272 6.24994C18.1272 6.35917 18.0986 6.46649 18.0442 6.56121C17.9898 6.65593 17.9115 6.73474 17.8172 6.78978L10.3172 11.1648C10.2216 11.2205 10.113 11.2499 10.0023 11.2499C9.89171 11.2499 9.78307 11.2205 9.6875 11.1648L2.1875 6.78978C2.0927 6.73505 2.01393 6.65637 1.95909 6.56163C1.90425 6.46689 1.87525 6.35941 1.875 6.24994ZM3.74063 6.24994L10 9.9015L16.2594 6.24994L10 2.59838L3.74063 6.24994Z"
      fill={color}
    />
  </svg>
);