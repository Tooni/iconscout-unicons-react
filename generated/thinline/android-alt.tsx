import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAndroidAlt = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M3.5 9a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5m12.344-4.602 1.073-1.622a.5.5 0 0 0-.834-.552l-1.06 1.602a5.95 5.95 0 0 0-6.046 0l-1.06-1.602a.5.5 0 0 0-.834.552l1.073 1.622A5.99 5.99 0 0 0 6 9v8.5a.5.5 0 0 0 .5.5h3v3.5a.5.5 0 0 0 1 0V18h3v3.5a.5.5 0 0 0 1 0V18h3a.5.5 0 0 0 .5-.5V9c0-1.778-.79-3.464-2.156-4.602M17 17H7v-7h10zM7 9a5 5 0 0 1 10 0zm13.5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5" />
  </svg>
)
const ForwardRef = forwardRef(SvgAndroidAlt)
export default ForwardRef
