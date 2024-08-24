import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgClipboardBlank = (
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
    <path d="M17 4h-1a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-7 0h4v2h-4zm8 15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2h1a1 1 0 0 1 1 1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgClipboardBlank)
export default ForwardRef
