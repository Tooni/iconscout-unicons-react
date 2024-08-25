import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgKeyholeCircle = (
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
      d="M14 10a2 2 0 1 0-3 1.723V15a1 1 0 0 0 2 0v-3.277A1.99 1.99 0 0 0 14 10"
      opacity={1}
    />
    <path
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m1 9.723V15a1 1 0 0 1-2 0v-3.277a2 2 0 1 1 2 0"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgKeyholeCircle)
export default ForwardRef