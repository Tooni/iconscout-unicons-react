import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCloudShare = (
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
    <path d="M14.5 15a2 2 0 1 0-2-2l-1.9.87a2 2 0 0 0-1.1-.33 2 2 0 0 0 0 4 1.9 1.9 0 0 0 .92-.24l2.1 1a2 2 0 1 0 .8-1.84l-1.75-.8 1.91-.88a2 2 0 0 0 1.02.22m3.92-7.78A7 7 0 0 0 5.06 9.11a4 4 0 0 0-.38 7.66 1.1 1.1 0 0 0 .32.05 1 1 0 0 0 .32-2A2 2 0 0 1 4 13a2 2 0 0 1 2-2 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.67 3 3 0 0 1 1 5.53 1 1 0 1 0 1 1.74A5 5 0 0 0 22 12a5 5 0 0 0-3.58-4.78" />
  </svg>
)
const ForwardRef = forwardRef(SvgCloudShare)
export default ForwardRef
