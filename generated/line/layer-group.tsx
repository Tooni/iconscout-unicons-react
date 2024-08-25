import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgLayerGroup = (
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
    <path d="m2.5 8.86 9 5.2a1 1 0 0 0 1 0l9-5.2A1 1 0 0 0 22 8a1 1 0 0 0-.5-.87l-9-5.19a1 1 0 0 0-1 0l-9 5.19A1 1 0 0 0 2 8a1 1 0 0 0 .5.86M12 4l7 4-7 4-7-4Zm8.5 7.17L12 16l-8.5-4.87a1 1 0 0 0-1.37.37 1 1 0 0 0 .37 1.36l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 .37-1.36 1 1 0 0 0-1.37-.37Zm0 4L12 20l-8.5-4.87a1 1 0 0 0-1.37.37 1 1 0 0 0 .37 1.36l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 .37-1.36 1 1 0 0 0-1.37-.37Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgLayerGroup)
export default ForwardRef
