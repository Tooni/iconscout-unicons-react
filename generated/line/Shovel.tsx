import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgShovel = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path d="m21.71 7.38-5.09-5.09a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42L17 5.54 11.58 11l-1-1a3 3 0 0 0-4.25 0l-3.45 3.42A3 3 0 0 0 2 15.55V19a3 3 0 0 0 3 3h3.45a3 3 0 0 0 2.13-.88L14 17.69a3 3 0 0 0 0-4.25l-1-1L18.46 7l1.83 1.83a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.45m-9.11 8.89-3.44 3.44a1 1 0 0 1-.71.29H5a1 1 0 0 1-1-1v-3.45a1 1 0 0 1 .29-.71l3.44-3.44a1 1 0 0 1 1.41 0l1 1-.89.9a1 1 0 0 0 0 1.41A1 1 0 0 0 10 15a1 1 0 0 0 .7-.29l.9-.89 1 1a1 1 0 0 1 0 1.45" />
  </svg>
)
const ForwardRef = forwardRef(SvgShovel)
export default ForwardRef