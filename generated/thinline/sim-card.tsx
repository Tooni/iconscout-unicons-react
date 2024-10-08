import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSimCard = (
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
    <path d="M16.98 4H7.01A3.014 3.014 0 0 0 4 7.01v9.97A3.025 3.025 0 0 0 7.02 20h9.97A3.014 3.014 0 0 0 20 16.99V7.02A3.025 3.025 0 0 0 16.98 4M10 5h4v4h-4zM9 19H7.02A2.023 2.023 0 0 1 5 16.98V15h4zm5 0h-4v-4h4zm5-2.01A2.01 2.01 0 0 1 16.99 19H15v-4h4zM19 14H5V7.01C5.001 5.9 5.9 5 7.01 5H9v4.5a.5.5 0 0 0 .5.5H19zm0-5h-4V5h1.98A2.023 2.023 0 0 1 19 7.02z" />
  </svg>
)
const ForwardRef = forwardRef(SvgSimCard)
export default ForwardRef
