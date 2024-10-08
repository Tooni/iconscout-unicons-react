import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgChatBubbleUser = (
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
    <path d="M14.58 11.3a3.24 3.24 0 0 0 .71-2 3.29 3.29 0 0 0-6.58 0 3.24 3.24 0 0 0 .71 2 5 5 0 0 0-2 2.31 1 1 0 1 0 1.84.78A3 3 0 0 1 12 12.57a3 3 0 0 1 2.75 1.82 1 1 0 0 0 .92.61 1.1 1.1 0 0 0 .39-.08 1 1 0 0 0 .53-1.31 5 5 0 0 0-2.01-2.31M12 10.57a1.29 1.29 0 1 1 1.29-1.28A1.29 1.29 0 0 1 12 10.57M18 2H6a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h2.59l2.7 2.71A1 1 0 0 0 12 22a1 1 0 0 0 .65-.24L15.87 19H18a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 14a1 1 0 0 1-1 1h-2.5a1 1 0 0 0-.65.24l-2.8 2.4-2.34-2.35A1 1 0 0 0 9 17H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgChatBubbleUser)
export default ForwardRef
