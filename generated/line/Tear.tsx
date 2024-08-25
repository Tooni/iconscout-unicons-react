import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgTear = (
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
    <path d="M12.56 2.17a1 1 0 0 0-1.12 0c-.3.2-7.19 5-7.19 12.08a7.75 7.75 0 0 0 15.5 0c0-7.2-6.9-11.89-7.19-12.08M12 20a5.76 5.76 0 0 1-5.75-5.75c0-5 4.21-8.77 5.75-10 1.55 1.21 5.75 5 5.75 10A5.76 5.76 0 0 1 12 20" />
  </svg>
)
const ForwardRef = forwardRef(SvgTear)
export default ForwardRef
