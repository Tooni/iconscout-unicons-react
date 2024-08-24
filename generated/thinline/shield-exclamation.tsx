import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgShieldExclamation = (
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
    <path d="M12 13a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5m7.99-9.247a.5.5 0 0 0-.593-.387 9.1 9.1 0 0 1-7.11-1.454.5.5 0 0 0-.574 0 9.1 9.1 0 0 1-7.11 1.454.498.498 0 0 0-.603.49v8.018a9.13 9.13 0 0 0 3.799 7.407l3.91 2.804a.5.5 0 0 0 .582 0l3.91-2.804A9.13 9.13 0 0 0 20 11.874V3.855a.5.5 0 0 0-.01-.102M19 11.874a8.13 8.13 0 0 1-3.38 6.595L12 21.063 8.38 18.47A8.13 8.13 0 0 1 5 11.874v-7.42a10.08 10.08 0 0 0 7-1.53 10.08 10.08 0 0 0 7 1.53zm-7 2.001a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25" />
  </svg>
)
const ForwardRef = forwardRef(SvgShieldExclamation)
export default ForwardRef
