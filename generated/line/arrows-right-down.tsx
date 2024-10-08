import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgArrowsRightDown = (
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
    <path d="M20.92 6.62a1 1 0 0 0-.21-.33l-3-3a1 1 0 0 0-1.42 1.42L17.59 6H9a3 3 0 0 0-3 3v8.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l3-3a1 1 0 0 0-1.42-1.42L8 17.59V9a1 1 0 0 1 1-1h8.59l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76" />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowsRightDown)
export default ForwardRef
