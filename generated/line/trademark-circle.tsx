import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTrademarkCircle = (
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
    <path d="M10 9H7a1 1 0 0 0 0 2h.5v3a1 1 0 0 0 2 0v-3h.5a1 1 0 0 0 0-2m7.38.08a1 1 0 0 0-1.09.21L15 10.59l-1.29-1.3a1 1 0 0 0-1.09-.21A1 1 0 0 0 12 10v4a1 1 0 0 0 2 0v-1.59l.29.3a1 1 0 0 0 1.42 0l.29-.3V14a1 1 0 0 0 2 0v-4a1 1 0 0 0-.62-.92M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8" />
  </svg>
)
const ForwardRef = forwardRef(SvgTrademarkCircle)
export default ForwardRef
