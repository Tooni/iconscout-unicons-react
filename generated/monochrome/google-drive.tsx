import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgGoogleDrive = (
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
      d="M15.334 14.887H22l-6.666-11.55H8.667z"
      opacity={0.25}
    />
    <path
      d="M8.667 3.338 2 14.888l3.334 5.774L12 9.112z"
      opacity={1}
    />
    <path
      d="m8.667 14.887-3.333 5.775h13.333L22 14.887z"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgGoogleDrive)
export default ForwardRef
