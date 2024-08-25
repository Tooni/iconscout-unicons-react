import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgWebSectionAlt = (
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
      d="M9.9 2H8.1A2.6 2.6 0 0 0 8 3v18c-.032.337.002.676.1 1h1.8c.098-.324.132-.663.1-1V3a2.6 2.6 0 0 0-.1-1"
      opacity={0.25}
    />
    <path
      d="M3 2h5v20H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"
      opacity={1}
    />
    <path
      d="M10 2h11a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H10z"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWebSectionAlt)
export default ForwardRef
