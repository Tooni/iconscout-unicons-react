import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCommentDots = (
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
    <path d="M12 11.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m-3 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m6 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m4.415-5.96C15.71 1.195 9.385.88 5.29 4.584S.88 14.614 4.584 18.709l-2.438 2.437A.5.5 0 0 0 2.5 22H12a10 10 0 0 0 6.709-2.585c4.096-3.705 4.412-10.03.706-14.125M12 21H3.707l1.929-1.929a.5.5 0 0 0 0-.707 8.999 8.999 0 0 1 6.362-15.362A8.999 8.999 0 0 1 12 21" />
  </svg>
)
const ForwardRef = forwardRef(SvgCommentDots)
export default ForwardRef
