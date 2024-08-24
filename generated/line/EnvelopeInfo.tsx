import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgEnvelopeInfo = (
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
    <path d="M21 13.5a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.91l5.88 5.88a3 3 0 0 0 4.24 0l3.59-3.58a1 1 0 0 0-1.42-1.42l-3.58 3.59a1 1 0 0 1-1.42 0L5.41 7.5H17a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1m0-9a1.05 1.05 0 0 0 .71-.29l.12-.16a.6.6 0 0 0 .09-.17.6.6 0 0 0 .08-.18 1.4 1.4 0 0 0 0-.2 1.05 1.05 0 0 0-.29-.71 1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.42 1.05 1.05 0 0 0 .71.29m0 1a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgEnvelopeInfo)
export default ForwardRef
