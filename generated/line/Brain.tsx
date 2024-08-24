import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBrain = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path d="M22 11a4 4 0 0 0-2-3.48A3 3 0 0 0 20 7a3 3 0 0 0-3-3h-.18A3 3 0 0 0 12 2.78 3 3 0 0 0 7.18 4H7a3 3 0 0 0-3 3 3 3 0 0 0 0 .52 4 4 0 0 0-.55 6.59A4 4 0 0 0 7 20h.18A3 3 0 0 0 12 21.22 3 3 0 0 0 16.82 20H17a4 4 0 0 0 3.5-5.89A4 4 0 0 0 22 11M11 8.55a5 5 0 0 0-.68-.32 1 1 0 0 0-.64 1.9A2 2 0 0 1 11 12v1.55a5 5 0 0 0-.68-.32 1 1 0 0 0-.64 1.9A2 2 0 0 1 11 17v2a1 1 0 0 1-1 1 1 1 0 0 1-.91-.6 4 4 0 0 0 .48-.33 1 1 0 1 0-1.28-1.54A2 2 0 0 1 7 18a2 2 0 0 1-2-2 2 2 0 0 1 .32-1.06A4 4 0 0 0 6 15a1 1 0 0 0 0-2 1.8 1.8 0 0 1-.69-.13A2 2 0 0 1 5 9.25a3 3 0 0 0 .46.35 1 1 0 1 0 1-1.74.9.9 0 0 1-.34-.33A.9.9 0 0 1 6 7a1 1 0 0 1 1-1 .8.8 0 0 1 .21 0 4 4 0 0 0 .19.47 1 1 0 0 0 1.37.37 1 1 0 0 0 .36-1.34A1.06 1.06 0 0 1 9 5a1 1 0 0 1 2 0Zm7.69 4.32A1.8 1.8 0 0 1 18 13a1 1 0 0 0 0 2 4 4 0 0 0 .68-.06A2 2 0 0 1 19 16a2 2 0 0 1-2 2 2 2 0 0 1-1.29-.47 1 1 0 0 0-1.28 1.54 4 4 0 0 0 .48.33 1 1 0 0 1-.91.6 1 1 0 0 1-1-1v-2a2 2 0 0 1 1.32-1.87 1 1 0 0 0-.64-1.9 5 5 0 0 0-.68.32V12a2 2 0 0 1 1.32-1.87 1 1 0 0 0-.64-1.9 5 5 0 0 0-.68.32V5a1 1 0 0 1 2 0 1.06 1.06 0 0 1-.13.5 1 1 0 0 0 .36 1.37 1 1 0 0 0 1.37-.37 4 4 0 0 0 .19-.5.8.8 0 0 1 .21 0 1 1 0 0 1 1 1 1 1 0 0 1-.17.55.9.9 0 0 1-.33.31 1 1 0 0 0 1 1.74 2.7 2.7 0 0 0 .5-.35 2 2 0 0 1-.27 3.62Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgBrain)
export default ForwardRef