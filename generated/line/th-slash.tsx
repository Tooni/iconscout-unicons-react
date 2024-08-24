import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgThSlash = (
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
    <path d="m22.71 21.29-1-1-6-6-6-6-6-6-1-1a1 1 0 0 0-1.42 1.42l.71.7V21a1 1 0 0 0 1 1h17.59l.7.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42M4 5.41 6.59 8H4ZM8 20H4v-4h4Zm0-6H4v-4h4Zm2-2.59L12.59 14H10ZM14 20h-4v-4h4Zm2 0v-2.59L18.59 20ZM8.67 4H14v5a1 1 0 0 0 1 1h5v5.33a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1H8.67a1 1 0 0 0 0 2M16 4h4v4h-4Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgThSlash)
export default ForwardRef
