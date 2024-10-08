import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgLayersSlash = (
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
    <path d="m20.49 13.94-.34.2a1 1 0 0 0-.35 1.37 1 1 0 0 0 .86.49 1 1 0 0 0 .51-.14l.34-.2a1 1 0 0 0-1-1.72Zm-8.84-7.58.35-.21 7 4-1.76 1a1 1 0 0 0 .5 1.87 1 1 0 0 0 .5-.13L21.5 11a1 1 0 0 0 0-1.74l-9-5.19a1 1 0 0 0-1 0l-.85.49a1 1 0 0 0 1 1.74ZM3.71 2.29a1 1 0 0 0-1.42 1.42l3.64 3.63-3.43 2a1 1 0 0 0 0 1.74l9 5.2a1.1 1.1 0 0 0 .5.13 1.1 1.1 0 0 0 .5-.13l1.5-.88 1.45 1.46-3.44 2-8.51-4.93a1 1 0 0 0-1 1.74l9 5.2a1 1 0 0 0 1 0l4.41-2.55 3.38 3.39a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Zm8.29 12-7-4.1 2.4-1.38 5.12 5.13Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgLayersSlash)
export default ForwardRef
