import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgWindows = (
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
    <path d="M22 2 11.2 3.6v8l10.8-.1zM10.2 12.5 2 12.4v6.8l8.1 1.1zM2 4.8v6.8h8.1V3.7zm9.1 7.7v7.9L22 22v-9.4z" />
  </svg>
)
const ForwardRef = forwardRef(SvgWindows)
export default ForwardRef
