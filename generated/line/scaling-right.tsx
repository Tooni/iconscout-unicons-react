import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgScalingRight = (
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
    <path d="M21.92 2.62a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-4a1 1 0 0 0 0 2h1.59L12 10.59 9.88 8.46a1 1 0 0 0-1.42 1.42L10.59 12 4 18.59V17a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38 1 1 0 0 0 .54.54A1 1 0 0 0 3 22h4a1 1 0 0 0 0-2H5.41L12 13.41l2.12 2.13a1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42L13.41 12 20 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38" />
  </svg>
)
const ForwardRef = forwardRef(SvgScalingRight)
export default ForwardRef
