import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgWindows = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path
      d="m2.03 4.832 8.147-1.11.004 7.86-8.144.046zm8.144 7.655.006 7.867-8.144-1.12-.001-6.8zm.987-8.91L21.965 2v9.482l-10.804.085zm10.807 8.984L21.965 22l-10.804-1.525-.015-7.932Z"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWindows)
export default ForwardRef
