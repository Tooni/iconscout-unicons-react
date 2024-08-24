import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPrint = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M7 9.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M19.5 6H18V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V6H4.5A2.5 2.5 0 0 0 2 8.5V15a3.003 3.003 0 0 0 3 3h1v3.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V18h1a3.003 3.003 0 0 0 3-3V8.5A2.5 2.5 0 0 0 19.5 6M7 3h10v3H7zm10 18H7v-6h10zm4-6a2.003 2.003 0 0 1-2 2h-1v-2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V17H5a2.003 2.003 0 0 1-2-2V8.5C3 7.672 3.672 7 4.5 7h15c.828 0 1.5.672 1.5 1.5z" />
  </svg>
)
const ForwardRef = forwardRef(SvgPrint)
export default ForwardRef
