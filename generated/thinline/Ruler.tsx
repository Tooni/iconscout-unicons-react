import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgRuler = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M22.96 7.404 16.596 1.04a.5.5 0 0 0-.707 0L1.04 15.889a.5.5 0 0 0 0 .707l6.364 6.364a.5.5 0 0 0 .707 0l3.18-3.18.002-.002 2.827-2.827h.001v-.002l2.829-2.827v-.001l2.828-2.828 3.182-3.182a.5.5 0 0 0 0-.707m-3.535 2.828-1.768-1.767-.007-.007a.5.5 0 0 0-.7.714l1.768 1.767-2.122 2.122-3.182-3.182-.007-.007a.5.5 0 0 0-.7.714l3.182 3.182-2.121 2.121L12 14.121a.5.5 0 0 0-.707.707l1.767 1.768-2.12 2.122-3.183-3.183-.007-.007a.5.5 0 1 0-.7.714l3.182 3.183-2.475 2.474-5.656-5.657L16.242 2.101 21.9 7.758z" />
  </svg>
)
const ForwardRef = forwardRef(SvgRuler)
export default ForwardRef
