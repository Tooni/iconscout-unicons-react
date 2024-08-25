import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgMicroscope = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path d="M20 21.005h-5.184a3 3 0 0 0 .143-.591A8.04 8.04 0 0 0 20 13.005a7.95 7.95 0 0 0-2.127-5.422l.637-.638a1 1 0 0 0 .241-.39l.708-2.122a1 1 0 0 0-.241-1.024l-2.122-2.121a1 1 0 0 0-1.024-.242l-2.12.707a1 1 0 0 0-.391.242L7.198 8.358a1 1 0 0 0 0 1.414l-1.416 1.415a1 1 0 0 0 0 1.415l2.122 2.12a1 1 0 0 0 1.414 0l1.414-1.413.002.002a1 1 0 0 0 1.414 0l4.31-4.312A5.96 5.96 0 0 1 18 13.005a6.05 6.05 0 0 1-3.455 5.431 2.976 2.976 0 0 0-5.124.063 7 7 0 0 1-1.12-.554.99.99 0 0 0 .699-.94 1 1 0 0 0-1-1H4a1 1 0 0 0 0 2h1.331a8.8 8.8 0 0 0 3.717 2.473 3 3 0 0 0 .136.527H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2M8.611 12.602l-.708-.707.708-.708.707.708Zm8.318-6.904L11.44 11.19 9.32 9.065l5.489-5.489 1.311-.437 1.247 1.247ZM12 21.005a1 1 0 1 1 1-1 1 1 0 0 1-1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgMicroscope)
export default ForwardRef
