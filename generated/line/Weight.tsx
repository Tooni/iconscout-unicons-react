import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgWeight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path d="M19 4h-1.45A3.1 3.1 0 0 0 17 3a3 3 0 0 0-2.25-1H9.27A3 3 0 0 0 7 3a3.1 3.1 0 0 0-.57 1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-10.48.34A1 1 0 0 1 9.27 4h5.46a1 1 0 0 1 .75.34 1 1 0 0 1 .25.78l-.5 4a1 1 0 0 1-1 .88h-1.64l1.14-2.4a1 1 0 0 0-1.8-.86L10.37 10h-.6a1 1 0 0 1-1-.88l-.5-4a1 1 0 0 1 .25-.78M20 19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.37l.42 3.37a3 3 0 0 0 3 2.63h4.46a3 3 0 0 0 3-2.63L17.63 6H19a1 1 0 0 1 1 1Zm-6-3h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgWeight)
export default ForwardRef
