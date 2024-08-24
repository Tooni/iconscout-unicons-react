import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSanitizer = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M13 12a3 3 0 1 0 3 3 3.003 3.003 0 0 0-3-3m0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1m5.8-8.4L16 5.5V3h1a1 1 0 0 0 0-2H8.657a4.97 4.97 0 0 0-3.535 1.464l-.829.829a1 1 0 1 0 1.414 1.414l.829-.829A3.02 3.02 0 0 1 8.656 3H10v2.5L7.2 7.6A3.02 3.02 0 0 0 6 10v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10a3.02 3.02 0 0 0-1.2-2.4M12 3h2v2h-2Zm6 18H8V10a1 1 0 0 1 .4-.8L11.334 7h3.333L17.6 9.2a1 1 0 0 1 .4.8Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgSanitizer)
export default ForwardRef
