import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCoronavirus = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <circle cx={9.5} cy={10.5} r={1.5} opacity={0.7} />
    <circle cx={9} cy={15} r={1} opacity={1} />
    <circle cx={14.5} cy={13.5} r={1.5} opacity={0.7} />
    <circle cx={15} cy={9} r={1} opacity={1} />
    <path
      d="M12 8a1 1 0 0 1-1-1V2a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1m0 15a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1m10-10h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2M6 13H2a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2"
      opacity={0.25}
    />
    <path
      d="M18 13a1 1 0 0 1 0-2h2.941A9.01 9.01 0 0 0 13 3.059V7a1 1 0 0 1-2 0V3.059A9.01 9.01 0 0 0 3.059 11H6a1 1 0 0 1 0 2H3.059A9.01 9.01 0 0 0 11 20.941V17a1 1 0 0 1 2 0v3.941A9.01 9.01 0 0 0 20.941 13Zm-9 3a1 1 0 1 1 1-1 1 1 0 0 1-1 1m.5-4a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 9.5 12m5 3a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5m.5-5a1 1 0 1 1 1-1 1 1 0 0 1-1 1"
      opacity={0.5}
    />
    <path
      d="M4.979 6.393a9 9 0 0 1 1.414-1.414l-.757-.757a1 1 0 0 0-1.414 1.414zm0 11.214-.757.757a1 1 0 1 0 1.414 1.414l.757-.757a9 9 0 0 1-1.414-1.414m14.042 0a9 9 0 0 1-1.414 1.414l.757.757a1 1 0 0 0 1.414-1.414zm0-11.214.757-.757a1 1 0 0 0-1.414-1.414l-.757.757a9 9 0 0 1 1.414 1.414"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCoronavirus)
export default ForwardRef
