import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCommentAltSearch = (
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
    <path d="M19 6h-5a1 1 0 0 0 0 2h5a1 1 0 0 1 1 1v9.72l-1.57-1.45a1 1 0 0 0-.68-.27H9a1 1 0 0 1-1-1v-2a1 1 0 0 0-2 0v2a3 3 0 0 0 3 3h8.36l3 2.73A1 1 0 0 0 21 22a1.1 1.1 0 0 0 .4-.08A1 1 0 0 0 22 21V9a3 3 0 0 0-3-3M8.57 10l1.72 1.73a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L10 8.57a4.37 4.37 0 0 0 .65-2.26 4.32 4.32 0 1 0-8.65 0 4.32 4.32 0 0 0 4.31 4.32A4.35 4.35 0 0 0 8.57 10M4 6.31a2.3 2.3 0 0 1 .68-1.63 2.32 2.32 0 0 1 3.32 0A2.31 2.31 0 0 1 8 8a2.32 2.32 0 0 1-4-1.69" />
  </svg>
)
const ForwardRef = forwardRef(SvgCommentAltSearch)
export default ForwardRef
