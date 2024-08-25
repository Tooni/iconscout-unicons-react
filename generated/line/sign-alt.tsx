import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSignAlt = (
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
    <path d="m21.78 11.88-2-2.5A1 1 0 0 0 19 9h-6V3a1 1 0 0 0-2 0v1H5a1 1 0 0 0-.78.38l-2 2.5a1 1 0 0 0 0 1.24l2 2.5A1 1 0 0 0 5 11h6v9H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2v-4h6a1 1 0 0 0 .78-.38l2-2.5a1 1 0 0 0 0-1.24M11 9H5.48l-1.2-1.5L5.48 6H11Zm7.52 5H13v-3h5.52l1.2 1.5Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgSignAlt)
export default ForwardRef
