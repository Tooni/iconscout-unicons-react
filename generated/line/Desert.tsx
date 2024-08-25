import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgDesert = (
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
    <path d="M18 2a4 4 0 1 0 4 4 4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2m-3 12h-2v-2a1 1 0 0 0-2 0v2H9v-3.38l3.45-1.73A1 1 0 0 0 13 14v-4a1 1 0 0 0-2 0v3.38l-2 1V8a1 1 0 0 0-2 0v8.38l-2-1V13a1 1 0 0 0-2 0v3a1 1 0 0 0 .55.89L7 18.62V20H3a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgDesert)
export default ForwardRef
