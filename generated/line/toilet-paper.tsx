import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgToiletPaper = (
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
    <path d="M22.26 20.357a7.52 7.52 0 0 1-1.76-4.905v-7.46c0-3.308-2.243-6-5-6h-9c-2.757 0-5 2.692-5 6s2.243 6 5 6h3v1.46a9.53 9.53 0 0 0 2.24 6.206 1 1 0 0 0 .76.35h9a1 1 0 0 0 .76-1.651M6.5 11.993c-1.654 0-3-1.795-3-4s1.346-4 3-4 3 1.794 3 4-1.346 4-3 4m6.479 8.014a7.58 7.58 0 0 1-1.479-4.555v-7c0-.028-.014-.052-.016-.08.007-.126.016-.251.016-.38a6.68 6.68 0 0 0-1.284-4H15.5c1.654 0 3 1.795 3 4v7.46a9.7 9.7 0 0 0 1.118 4.555ZM6.5 6.743a1.146 1.146 0 0 0-1 1.25 1.146 1.146 0 0 0 1 1.25 1.146 1.146 0 0 0 1-1.25 1.146 1.146 0 0 0-1-1.25" />
  </svg>
)
const ForwardRef = forwardRef(SvgToiletPaper)
export default ForwardRef
