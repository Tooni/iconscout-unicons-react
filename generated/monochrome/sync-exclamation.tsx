import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSyncExclamation = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path
      d="M12 13a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1m0 3a.99.99 0 0 1-1-1 1.05 1.05 0 0 1 .29-.71 1 1 0 0 1 .33-.21 1 1 0 0 1 1.09.21A1.05 1.05 0 0 1 13 15a.99.99 0 0 1-1 1"
      opacity={1}
    />
    <path
      d="M12 2a10.02 10.02 0 0 0-7 2.877V3a1 1 0 0 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 0-2H6.218A7.98 7.98 0 0 1 20 12a1 1 0 0 0 2 0A10.01 10.01 0 0 0 12 2m8 13.5h-4.5a1 1 0 0 0 0 2h2.282A7.98 7.98 0 0 1 4 12a1 1 0 0 0-2 0 9.987 9.987 0 0 0 17 7.123V21a1 1 0 0 0 2 0v-4.5a1 1 0 0 0-1-1"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSyncExclamation)
export default ForwardRef
