import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCornerRightDown = (
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
    <path d="M21.71 13.35a1 1 0 0 0-1.42 0l-2.92 2.92v-8a4 4 0 0 0-4-4H3a1 1 0 1 0 0 2h10.37a2 2 0 0 1 2 2v8l-2.92-2.92A1 1 0 0 0 11 14.76l4.62 4.63a1.2 1.2 0 0 0 .33.22.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.22l4.63-4.63a1 1 0 0 0 .04-1.41" />
  </svg>
)
const ForwardRef = forwardRef(SvgCornerRightDown)
export default ForwardRef
