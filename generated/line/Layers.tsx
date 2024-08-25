import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgLayers = (
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
    <path d="m2.5 10.56 9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 0-1.73l-9-5.2a1 1 0 0 0-1 0l-9 5.2a1 1 0 0 0 0 1.73M12 5.65l7 4-7 4.05-7-4.01Zm8.5 7.79L12 18.35l-8.5-4.91a1 1 0 0 0-1.37.36 1 1 0 0 0 .37 1.37l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 .37-1.37 1 1 0 0 0-1.37-.36" />
  </svg>
)
const ForwardRef = forwardRef(SvgLayers)
export default ForwardRef
