import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMoonEclipse = (
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
    <path d="M12 2a10 10 0 0 0-2.14.24h-.12a10 10 0 0 0-.1 19.44h.14A9.6 9.6 0 0 0 12 22a10 10 0 0 0 0-20m-2 17.74a8 8 0 0 1 0-15.48 8 8 0 0 1 0 15.48m4.53-.16a10 10 0 0 0 0-15.16 8 8 0 0 1 0 15.16" />
  </svg>
)
const ForwardRef = forwardRef(SvgMoonEclipse)
export default ForwardRef
