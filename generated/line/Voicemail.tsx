import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgVoicemail = (
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
    <path d="M18 8a4 4 0 0 0-4 4 3.9 3.9 0 0 0 .56 2H9.44a3.9 3.9 0 0 0 .56-2 4 4 0 1 0-4 4h12a4 4 0 0 0 0-8M6 14a2 2 0 1 1 2-2 2 2 0 0 1-2 2m12 0a2 2 0 1 1 2-2 2 2 0 0 1-2 2" />
  </svg>
)
const ForwardRef = forwardRef(SvgVoicemail)
export default ForwardRef
