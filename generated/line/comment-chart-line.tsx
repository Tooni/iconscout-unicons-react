import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCommentChartLine = (
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
    <path d="M12 10a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1m-4 3a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1m4-11A10 10 0 0 0 2 12a9.9 9.9 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20m0 18H5.41l.93-.93a1 1 0 0 0 .3-.71 1 1 0 0 0-.3-.7A8 8 0 1 1 12 20m4-12a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgCommentChartLine)
export default ForwardRef
