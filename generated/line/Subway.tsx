import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSubway = (
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
    <path d="M16 17a1 1 0 0 0 1-1 1.4 1.4 0 0 0 0-.2.6.6 0 0 0-.06-.18.8.8 0 0 0-.09-.18l-.12-.15a1.2 1.2 0 0 0-.33-.21 1 1 0 0 0-.76 0 1.2 1.2 0 0 0-.33.21l-.12.15a.8.8 0 0 0-.09.18.6.6 0 0 0-.06.18 1.4 1.4 0 0 0 0 .2 1 1 0 0 0 1 1Zm2-15H6a3 3 0 0 0-3 3v12a3 3 0 0 0 1.2 2.39l-.91.9a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L6.41 20h11.18l1.7 1.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.91-.9A3 3 0 0 0 21 17V5a3 3 0 0 0-3-3M5 8h6v4H5Zm14 9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3h14Zm0-5h-6V8h6Zm0-6H5V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1ZM8 17a1 1 0 0 0 1-1 1.4 1.4 0 0 0 0-.2.6.6 0 0 0-.06-.18.8.8 0 0 0-.09-.18l-.12-.15a1.2 1.2 0 0 0-.33-.21 1 1 0 0 0-.76 0 1.2 1.2 0 0 0-.33.21l-.12.15a.8.8 0 0 0-.09.18.6.6 0 0 0-.1.18 1.4 1.4 0 0 0 0 .2 1 1 0 0 0 .29.7A1 1 0 0 0 8 17" />
  </svg>
)
const ForwardRef = forwardRef(SvgSubway)
export default ForwardRef
