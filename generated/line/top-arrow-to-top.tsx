import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgTopArrowToTop = (
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
    <path d="M12.71 6.29a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-4 4a1 1 0 1 0 1.42 1.42L11 9.41V21a1 1 0 0 0 2 0V9.41l2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM19 2H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgTopArrowToTop)
export default ForwardRef
