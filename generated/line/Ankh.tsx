import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAnkh = (
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
    <path d="M18 12h-3.09A7.23 7.23 0 0 0 17 7 5 5 0 0 0 7 7a7.23 7.23 0 0 0 2.09 5H6a1 1 0 0 0 0 2h5v7a1 1 0 0 0 2 0v-7h5a1 1 0 0 0 0-2m-6-.16c-.93-.62-3-2.26-3-4.84a3 3 0 0 1 6 0c0 2.58-2.07 4.23-3 4.84" />
  </svg>
)
const ForwardRef = forwardRef(SvgAnkh)
export default ForwardRef
