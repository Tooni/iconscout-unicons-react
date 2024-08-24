import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgNavigator = (
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
    <path d="m20.17 9.23-14-5.78a3 3 0 0 0-4 3.7L3.71 12l-1.58 4.85A3 3 0 0 0 2.94 20a3 3 0 0 0 2 .8 3 3 0 0 0 1.15-.23l14.05-5.78a3 3 0 0 0 0-5.54ZM5.36 18.7a1 1 0 0 1-1.06-.19 1 1 0 0 1-.27-1L5.49 13h13.73Zm.13-7.7L4 6.53a1 1 0 0 1 .27-1A1 1 0 0 1 5 5.22a1 1 0 0 1 .39.08L19.22 11Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgNavigator)
export default ForwardRef
