import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgShieldPlus = (
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
      d="M14 11h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2"
      opacity={1}
    />
    <path
      d="M19.63 3.65a1 1 0 0 0-.835-.203 7.99 7.99 0 0 1-6.223-1.267 1 1 0 0 0-1.144 0 7.98 7.98 0 0 1-6.223 1.267A1 1 0 0 0 4 4.427v7.456a9.02 9.02 0 0 0 3.769 7.324l3.65 2.607a1 1 0 0 0 1.162 0l3.65-2.607A9.02 9.02 0 0 0 20 11.883V4.426a1 1 0 0 0-.37-.776M14 13h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgShieldPlus)
export default ForwardRef
