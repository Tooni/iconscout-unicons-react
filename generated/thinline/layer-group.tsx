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
    <path d="m2.25 8.452 9.5 5.48a.5.5 0 0 0 .5 0l9.5-5.48a.5.5 0 0 0 0-.866l-9.5-5.476a.51.51 0 0 0-.5 0l-9.5 5.476a.5.5 0 0 0 0 .866M12 3.122l8.499 4.898L12 12.923 3.501 8.02zm9.248 12.404L12 20.921l-9.248-5.395a.5.5 0 1 0-.504.864l9.5 5.542a.5.5 0 0 0 .504 0l9.5-5.542a.5.5 0 1 0-.504-.864m0-4L12 16.921l-9.248-5.395a.5.5 0 1 0-.504.864l9.5 5.542a.5.5 0 0 0 .504 0l9.5-5.542a.5.5 0 1 0-.504-.864" />
  </svg>
)
const ForwardRef = forwardRef(SvgLayerGroup)
export default ForwardRef
