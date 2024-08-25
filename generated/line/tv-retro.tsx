import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgTvRetro = (
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
    <path d="M18 6h-3.59l2.3-2.29a1 1 0 1 0-1.42-1.42L12 5.54l-1.17-2a1 1 0 1 0-1.74 1L10 6H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3v1a1 1 0 0 0 2 0v-1h8v1a1 1 0 0 0 2 0v-1a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3m1 11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgTvRetro)
export default ForwardRef
