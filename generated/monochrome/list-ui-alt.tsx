import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgListUiAlt = (
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
      d="M21.5 8h-14a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2m0 5h-10a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2m0 5h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2"
      opacity={1}
    />
    <circle cx={3.5} cy={7} r={1} opacity={1} />
    <circle cx={7.5} cy={12} r={1} opacity={1} />
    <circle cx={11.5} cy={17} r={1} opacity={1} />
  </svg>
)
const ForwardRef = forwardRef(SvgListUiAlt)
export default ForwardRef
