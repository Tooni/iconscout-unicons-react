import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgArrowCircleUp = (
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
    <path d="M12.354 7.147a.5.5 0 0 0-.344-.145L12 7l-.007.001a.5.5 0 0 0-.347.146l-4.5 4.5a.5.5 0 0 0 .708.707L11.5 8.707v7.794a.5.5 0 1 0 1 0V8.706l3.646 3.647a.5.5 0 0 0 .707 0 .5.5 0 0 0 0-.707zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c5.52-.006 9.994-4.48 10-10 0-5.523-4.477-10-10-10m0 19a9 9 0 1 1 0-18 9.01 9.01 0 0 1 9 9 9 9 0 0 1-9 9" />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowCircleUp)
export default ForwardRef
