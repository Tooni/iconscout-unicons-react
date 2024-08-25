import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgHeadSide = (
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
    <path d="M13.23 2.003a7.37 7.37 0 0 0-5.453 2.114A7.44 7.44 0 0 0 5.5 9.5v.03l-1.904 4.044A1 1 0 0 0 4.5 15h1v2a2 2 0 0 0 2 2h1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0 0-2h-3v-3a1 1 0 0 0-1-1h-.424l1.34-2.844a1 1 0 0 0 .095-.465L7.5 9.5a5.46 5.46 0 0 1 1.67-3.947 5.53 5.53 0 0 1 4-1.55 5.685 5.685 0 0 1 5.33 5.77l-1.967 7.504a1 1 0 0 0 .006.534l1 3.466A1 1 0 0 0 18.5 22a1 1 0 0 0 .277-.04 1 1 0 0 0 .684-1.237l-.924-3.2 1.93-7.267A1 1 0 0 0 20.5 10v-.228a7.7 7.7 0 0 0-7.27-7.769" />
  </svg>
)
const ForwardRef = forwardRef(SvgHeadSide)
export default ForwardRef
