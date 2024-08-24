import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHtml5 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path d="m3.183 2 1.604 18 7.202 2 7.222-2.002L20.818 2Zm14.142 5.887H8.877l.202 2.261h8.045l-.606 6.778L12 18.178l-.01.004-4.522-1.256-.31-3.466h2.216l.157 1.76 2.46.664h.001l2.463-.665.256-2.863H7.06L6.464 5.68h11.059Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgHtml5)
export default ForwardRef
