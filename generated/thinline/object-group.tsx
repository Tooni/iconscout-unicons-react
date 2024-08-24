import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgObjectGroup = (
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
    <path d="M21 19.092V4.908A1.497 1.497 0 0 0 20.5 2c-.652 0-1.202.419-1.408 1H4.908A1.496 1.496 0 0 0 2 3.5c0 .652.419 1.202 1 1.408v14.184A1.496 1.496 0 1 0 4.908 21h14.184A1.496 1.496 0 0 0 22 20.5c0-.652-.419-1.202-1-1.408M20.5 3a.501.501 0 1 1-.002 1.002A.501.501 0 0 1 20.5 3m-17 0a.501.501 0 1 1-.002 1.002A.501.501 0 0 1 3.5 3m0 18a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m15.59-.994L19.086 20H4.914l-.004.006a1.5 1.5 0 0 0-.916-.916L4 19.086V4.914l-.006-.004c.428-.15.765-.488.916-.916L4.914 4h14.172l.004-.006c.15.429.487.766.916.916L20 4.914v14.172l.006.004c-.429.15-.766.487-.916.916M20.5 21a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-4-11H14V7.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5H10v2.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5m-6 0a.5.5 0 0 0-.5.5V13H8V8h5v2zm5.5 6h-5v-5h5z" />
  </svg>
)
const ForwardRef = forwardRef(SvgObjectGroup)
export default ForwardRef
