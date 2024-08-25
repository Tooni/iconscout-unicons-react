import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgMobileAndroid = (
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
    <path d="m12.71 16.29-.15-.12a.8.8 0 0 0-.18-.09L12.2 16a1 1 0 0 0-.91.27 1.2 1.2 0 0 0-.21.33 1 1 0 0 0 1.3 1.31 1.5 1.5 0 0 0 .33-.22 1 1 0 0 0 .21-1.09 1 1 0 0 0-.21-.31M16 2H8a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgMobileAndroid)
export default ForwardRef
