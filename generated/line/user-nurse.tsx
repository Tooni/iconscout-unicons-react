import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgUserNurse = (
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
    <path d="M16.174 12.916q-.026-.013-.053-.024c-.138-.062-.274-.127-.415-.183a6 6 0 1 0-7.412 0c-.14.056-.277.121-.415.183l-.054.024a9.95 9.95 0 0 0-5.76 7.976 1 1 0 1 0 1.99.216A7.95 7.95 0 0 1 8.04 15.05l3.252 3.251a1 1 0 0 0 1.414 0l3.252-3.251a7.95 7.95 0 0 1 3.987 6.058 1 1 0 0 0 .992.892 1 1 0 0 0 .11-.006 1 1 0 0 0 .886-1.102 9.95 9.95 0 0 0-5.76-7.976ZM8.041 7.594a3.977 3.977 0 0 1 7.918 0ZM12 16.18l-1.937-1.937a7.83 7.83 0 0 1 3.874 0ZM12 12a4 4 0 0 1-3.664-2.406h7.328A4 4 0 0 1 12 12" />
  </svg>
)
const ForwardRef = forwardRef(SvgUserNurse)
export default ForwardRef
