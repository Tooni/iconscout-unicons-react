import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCarSlash = (
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
    <path d="M7 13a1 1 0 1 0 1 1 1 1 0 0 0-1-1m12.76-3.89-1.35-4.06a3 3 0 0 0-2.85-2h-5.9a1 1 0 0 0 0 2h5.9a1 1 0 0 1 1 .69L17.61 9h-1.95a1 1 0 0 0 0 2H19a1 1 0 0 1 1 1v3.34a1 1 0 1 0 2 0V12a3 3 0 0 0-2.24-2.89m-16-6.82a1 1 0 0 0-1.47 1.42l2.82 2.81-.87 2.59A3 3 0 0 0 2 12v4a3 3 0 0 0 2 2.82V20a1 1 0 0 0 2 0v-1h11.59l.41.41V20a1 1 0 0 0 1 1 .9.9 0 0 0 .46-.13l.83.84a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Zm3 5.81.9.9H6.39ZM5 17a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4.59l2 2H11a1 1 0 0 0 0 2h2a.9.9 0 0 0 .46-.13L15.59 17Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgCarSlash)
export default ForwardRef
