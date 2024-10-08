import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCloudBookmark = (
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
    <path d="M15 11h-5a1 1 0 0 0-1 1v8a1 1 0 0 0 1.56.83l1.94-1.3 1.89 1.26A1 1 0 0 0 15 21a1 1 0 0 0 .44-.1A1 1 0 0 0 16 20v-8a1 1 0 0 0-1-1m-1 7.12-.94-.63a1 1 0 0 0-1.12 0l-.94.64V13h3Zm4.42-10.9A7 7 0 0 0 5.06 9.11 4 4 0 0 0 6 17a1 1 0 0 0 0-2 2 2 0 0 1 0-4 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.67 3 3 0 0 1 1 5.53 1 1 0 1 0 1 1.74A5 5 0 0 0 22 12a5 5 0 0 0-3.58-4.78" />
  </svg>
)
const ForwardRef = forwardRef(SvgCloudBookmark)
export default ForwardRef
