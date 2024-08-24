import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHtml3 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path d="m3.195 2 1.602 17.994L11.99 22l7.212-2.013L20.805 2Zm14.281 4.123-.534 5.994.002.033-.002.074-.38 4.19-.041.373L12 18.037l-.004.004-4.512-1.258-.306-3.465H9.39l.157 1.762 2.453.665H12l2.461-.674.26-2.869H9.577l-.044-.485-.101-1.136-.052-.61h5.538l.202-2.232H6.682l-.044-.485-.1-1.137-.053-.61h11.044Zm0 0" />
  </svg>
)
const ForwardRef = forwardRef(SvgHtml3)
export default ForwardRef
