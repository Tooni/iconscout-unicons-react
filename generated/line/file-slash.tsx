import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFileSlash = (
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
    <path d="m21.71 20.29-18-18a1 1 0 0 0-1.42 1.42L4 5.41V19a3 3 0 0 0 3 3h10a3 3 0 0 0 2.39-1.2l.9.91a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42M17 20H7a1 1 0 0 1-1-1V7.41l11.93 11.93A1 1 0 0 1 17 20M8.66 4H12v3a3 3 0 0 0 3 3h3v3.34a1 1 0 1 0 2 0v-4.4a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19h-.09L13.06 2h-4.4a1 1 0 0 0 0 2M14 5.41 16.59 8H15a1 1 0 0 1-1-1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgFileSlash)
export default ForwardRef
