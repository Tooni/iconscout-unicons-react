import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgTelegramAlt = (
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
    <path d="M22.265 2.428a2.05 2.05 0 0 0-2.078-.324L2.266 9.339a2.043 2.043 0 0 0 .104 3.818l3.625 1.261 2.02 6.682a1 1 0 0 0 .119.252c.008.012.019.02.027.033a1 1 0 0 0 .211.215l.07.05a1 1 0 0 0 .31.136l.013.001.006.003a1 1 0 0 0 .203.02l.018-.003a1 1 0 0 0 .301-.052q.033-.014.064-.03a1 1 0 0 0 .205-.114l.152-.129 2.702-2.983 4.03 3.122a2.02 2.02 0 0 0 1.241.427 2.054 2.054 0 0 0 2.008-1.633l3.263-16.017a2.03 2.03 0 0 0-.693-1.97M9.37 14.736a1 1 0 0 0-.272.506l-.31 1.504-.784-2.593 4.065-2.117Zm8.302 5.304-4.763-3.69a1 1 0 0 0-1.353.12l-.866.955.306-1.487 7.083-7.083a1 1 0 0 0-1.169-1.593L6.745 12.554 3.02 11.191 20.999 4Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgTelegramAlt)
export default ForwardRef
