import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBing = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m10.1 8.6 1.7 4.3 2.8 1.3L9 17.5V3.4L5 2v17.8L9 22l10-5.8v-4.5z" />
  </svg>
)
const ForwardRef = forwardRef(SvgBing)
export default ForwardRef
