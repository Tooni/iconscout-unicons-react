import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCloudMoonShowers = (
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
    <path d="M8.5 14a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1m4-1a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1m9.2-5.93a1 1 0 0 0-.94-.26 3 3 0 0 1-.65.08 3 3 0 0 1-3-3 3 3 0 0 1 .08-.66 1 1 0 0 0-.26-.93A1 1 0 0 0 16 2a4.93 4.93 0 0 0-3.83 4.21A6.2 6.2 0 0 0 10.5 6a6 6 0 0 0-5.94 5.13 3.5 3.5 0 0 0-.46 6.58 1.1 1.1 0 0 0 .4.08 1 1 0 0 0 .4-1.92A1.48 1.48 0 0 1 4 14.5 1.5 1.5 0 0 1 5.5 13a1 1 0 0 0 1-1 4 4 0 0 1 4-4 3.9 3.9 0 0 1 2.17.66 3.94 3.94 0 0 1 1.57 2 1 1 0 0 0 .78.67 2.32 2.32 0 0 1 .98 4.28 1 1 0 0 0 1.1 1.68 4.32 4.32 0 0 0 1.9-3.62 4.2 4.2 0 0 0-.49-2A4.94 4.94 0 0 0 22 8a1 1 0 0 0-.3-.93m-4.59 2.82a3 3 0 0 1-.42 0 4.6 4.6 0 0 0-.69-.35 6.06 6.06 0 0 0-1.82-2.28v-.37a3 3 0 0 1 1.05-2.28 5 5 0 0 0 4.23 4.23 3 3 0 0 1-2.35 1.05" />
  </svg>
)
const ForwardRef = forwardRef(SvgCloudMoonShowers)
export default ForwardRef
