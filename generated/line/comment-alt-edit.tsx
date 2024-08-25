import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCommentAltEdit = (
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
    <path d="M18.5 5.5h-4a1 1 0 0 0 0 2h4a1 1 0 0 1 1 1v9.72l-1.57-1.45a1 1 0 0 0-.68-.27H8.5a1 1 0 0 1-1-1v-1a1 1 0 0 0-2 0v1a3 3 0 0 0 3 3h8.36l3 2.73a1 1 0 0 0 .68.27 1.1 1.1 0 0 0 .4-.08 1 1 0 0 0 .6-.92v-12a3 3 0 0 0-3.04-3m-9.42 7h2.42a1 1 0 0 0 1-1V9.08a1 1 0 0 0-.29-.71L6.63 2.79a1 1 0 0 0-1.41 0L2.79 5.22a1 1 0 0 0 0 1.41l5.58 5.58a1 1 0 0 0 .71.29M5.92 4.91l4.58 4.58v1h-1L4.91 5.92Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgCommentAltEdit)
export default ForwardRef
