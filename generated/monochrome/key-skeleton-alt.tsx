import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgKeySkeletonAlt = (
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
      d="M7 12a5 5 0 1 0 5 5 5 5 0 0 0-5-5m-1.415 7.412a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
      opacity={0.5}
    />
    <path
      d="M21.708 6.534 20.293 5.12l1.413-1.413a1 1 0 1 0-1.414-1.414L9.753 12.831a5 5 0 0 1 1.415 1.414l4.883-4.883 1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414 1.414-1.414 1.415 1.414a1 1 0 0 0 1.414-1.414"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgKeySkeletonAlt)
export default ForwardRef
