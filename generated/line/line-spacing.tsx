import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgLineSpacing = (
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
    <path d="M6.29 9.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-2-2a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-2 2a1 1 0 0 0 1.42 1.42l.29-.3v5.18l-.29-.3a1 1 0 0 0-1.42 1.42l2 2a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l2-2a1 1 0 0 0-1.42-1.42l-.29.3V9.41ZM11 8h10a1 1 0 0 0 0-2H11a1 1 0 0 0 0 2m10 3H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m0 5H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgLineSpacing)
export default ForwardRef
