import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBolt = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M19.87 8.6A1 1 0 0 0 19 8h-4.58l1.27-4.74a1 1 0 0 0-.17-.87 1 1 0 0 0-.79-.39h-7a1 1 0 0 0-1 .74l-2.68 10a1 1 0 0 0 .17.87 1 1 0 0 0 .8.39h3.87l-1.81 6.74a1 1 0 0 0 1.71.93l10.9-12a1 1 0 0 0 .18-1.07m-9.79 8.68 1.07-4a1 1 0 0 0-.17-.87 1 1 0 0 0-.79-.39H6.35L8.49 4h4.93l-1.27 4.74a1 1 0 0 0 1 1.26h3.57Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgBolt)
export default ForwardRef
