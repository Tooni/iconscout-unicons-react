import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgVectorSquareAlt = (
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
    <path d="M16.5 7h-9a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5m-.5 9H8V8h8zm5 3.092V4.908c.58-.207 1-.757 1-1.408 0-.827-.673-1.5-1.5-1.5-.651 0-1.2.42-1.408 1H4.908C4.7 2.42 4.15 2 3.5 2 2.673 2 2 2.673 2 3.5c0 .651.42 1.2 1 1.408v14.184c-.58.207-1 .757-1 1.408 0 .827.673 1.5 1.5 1.5.651 0 1.2-.42 1.408-1h14.184c.207.58.757 1 1.408 1 .827 0 1.5-.673 1.5-1.5 0-.651-.42-1.2-1-1.408M20.5 3a.501.501 0 0 1 0 1 .501.501 0 0 1 0-1m-17 0a.501.501 0 0 1 0 1 .501.501 0 0 1 0-1m0 18a.501.501 0 0 1 0-1 .501.501 0 0 1 0 1m15.59-.994L19.086 20H4.914l-.004.006a1.5 1.5 0 0 0-.916-.916L4 19.086V4.914l-.006-.004c.428-.15.765-.488.916-.916L4.914 4h14.172l.004-.006c.15.428.488.765.916.916L20 4.914v14.172l.006.004c-.428.15-.765.488-.916.916M20.5 21a.501.501 0 0 1 0-1 .501.501 0 0 1 0 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgVectorSquareAlt)
export default ForwardRef
