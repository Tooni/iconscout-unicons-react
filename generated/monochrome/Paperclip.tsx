import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgPaperclip = (
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
      d="M8.892 21.854a6.25 6.25 0 0 1-4.42-10.67l7.955-7.955a4.5 4.5 0 0 1 6.364 6.364l-6.895 6.894a2.816 2.816 0 0 1-3.89 0 2.75 2.75 0 0 1 .002-3.888l5.126-5.127a1 1 0 1 1 1.414 1.414l-5.126 5.127a.75.75 0 0 0 0 1.06.77.77 0 0 0 1.06 0l6.895-6.894a2.503 2.503 0 0 0 0-3.535 2.56 2.56 0 0 0-3.536 0l-7.955 7.955a4.25 4.25 0 1 0 6.01 6.01l6.188-6.187a1 1 0 1 1 1.414 1.414l-6.187 6.186a6.2 6.2 0 0 1-4.42 1.832Z"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPaperclip)
export default ForwardRef
