import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgInbox = (
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
    <path d="M19.056 2h-14a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V5a3.003 3.003 0 0 0-3-3m-14 2h14a1 1 0 0 1 1 1v8H17.59a2 2 0 0 0-1.664.89L14.52 16H9.59l-1.406-2.11A2 2 0 0 0 6.52 13H4.056V5a1 1 0 0 1 1-1m14 16h-14a1 1 0 0 1-1-1v-4H6.52l1.406 2.11A2 2 0 0 0 9.59 18h4.93a2 2 0 0 0 1.664-.89L17.59 15h2.465v4a1 1 0 0 1-1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgInbox)
export default ForwardRef
