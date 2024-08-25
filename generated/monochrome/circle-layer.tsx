import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCircleLayer = (
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
      d="M15 2a7 7 0 0 0-6.88 5.737 6 6 0 0 1 8.143 8.143A6.997 6.997 0 0 0 15 2"
      opacity={0.25}
    />
    <circle cx={7} cy={17} r={5} opacity={1} />
    <path
      d="M11 7a6 6 0 0 0-5.97 5.406 4.997 4.997 0 0 1 6.564 6.564A6 6 0 0 0 11 7"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCircleLayer)
export default ForwardRef
