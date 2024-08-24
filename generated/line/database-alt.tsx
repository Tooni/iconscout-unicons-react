import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDatabaseAlt = (
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
    <path d="M8 17a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-6a1 1 0 1 0 1 1 1 1 0 0 0-1-1m8-9H8a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4m2 16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2.56A3.9 3.9 0 0 0 8 16h8a3.9 3.9 0 0 0 2-.56Zm0-6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9.44A3.9 3.9 0 0 0 8 10h8a3.9 3.9 0 0 0 2-.56Zm-2-4H8a2 2 0 0 1 0-4h8a2 2 0 0 1 0 4" />
  </svg>
)
const ForwardRef = forwardRef(SvgDatabaseAlt)
export default ForwardRef
