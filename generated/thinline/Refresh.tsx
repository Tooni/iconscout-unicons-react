import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgRefresh = (
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
    <path d="M20.5 16h-4a.5.5 0 0 0 0 1h2.976a9 9 0 0 1-7.459 4 9.01 9.01 0 0 1-8.904-10.419.5.5 0 0 0-.986-.162A10 10 0 0 0 2 12c.006 5.52 4.48 9.994 10 10a10.01 10.01 0 0 0 8-3.999v2.5a.5.5 0 1 0 1 0v-4.002a.5.5 0 0 0-.5-.499M16.737 3.196C12.32.818 6.921 2.107 4 6.003V3.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H4.524a9 9 0 0 1 7.459-4 9.01 9.01 0 0 1 8.903 10.421.499.499 0 1 0 .987.16A10 10 0 0 0 22 12a10.01 10.01 0 0 0-5.263-8.804M15 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0m-5 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
  </svg>
)
const ForwardRef = forwardRef(SvgRefresh)
export default ForwardRef
