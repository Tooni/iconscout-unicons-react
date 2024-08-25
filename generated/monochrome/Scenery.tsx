import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgScenery = (
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
      d="M13.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
      opacity={0.25}
    />
    <path
      d="M19 2H5a3.01 3.01 0 0 0-3 3v8.86l3.88-3.88a3.075 3.075 0 0 1 4.24 0l2.871 2.887.888-.888a3.01 3.01 0 0 1 4.242 0L22 15.86V5a3.01 3.01 0 0 0-3-3m-5.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
      opacity={0.5}
    />
    <path
      d="M10.12 9.98a3.075 3.075 0 0 0-4.24 0L2 13.86V19a3.01 3.01 0 0 0 3 3h14a3 3 0 0 0 2.16-.92z"
      opacity={1}
    />
    <path
      d="m22 15.858-3.879-3.879a3.01 3.01 0 0 0-4.242 0l-.888.888 8.165 8.209c.542-.555.845-1.3.844-2.076z"
      opacity={0.25}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgScenery)
export default ForwardRef
