import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCompressV = (
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
    <path d="M12.71 13.29a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-2.5 2.5a1 1 0 0 0 1.42 1.42l.79-.8V21a1 1 0 0 0 2 0v-4.59l.79.8a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Zm-1.42-2.58a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l2.5-2.5a1 1 0 1 0-1.42-1.42l-.79.8V3a1 1 0 0 0-2 0v4.59l-.79-.8a1 1 0 1 0-1.42 1.42Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgCompressV)
export default ForwardRef
