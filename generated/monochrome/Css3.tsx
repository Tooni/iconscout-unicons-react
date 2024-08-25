import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCss3 = (
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
    <path
      d="m9.883 21.095 9.098-3.02L22 3H4.958L4.31 6.364h13.657l-.425 2.148H3.864l-.669 3.363h13.658l-.75 3.85-5.511 1.803-4.762-1.802.325-1.682H2.79L2 18.076z"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCss3)
export default ForwardRef
