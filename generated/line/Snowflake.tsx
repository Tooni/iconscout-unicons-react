import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSnowflake = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path d="m21.16 16.13-2-1.15.89-.24a1 1 0 1 0-.52-1.93l-2.82.76L14 12l2.71-1.57 2.82.76h.26a1 1 0 0 0 .26-2L19.16 9l2-1.15a1 1 0 0 0-1-1.74L18 7.37l.3-1.11a1 1 0 1 0-1.93-.52l-.82 3L13 10.27V7.14l2.07-2.07a1 1 0 0 0 0-1.41 1 1 0 0 0-1.42 0l-.65.65V2a1 1 0 0 0-2 0v2.47l-.81-.81a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41L11 7.3v3L8.43 8.78l-.82-3a1 1 0 1 0-1.93.52L6 7.37 3.84 6.13a1 1 0 0 0-1 1.74l2 1.13-.84.26a1 1 0 0 0 .26 2h.26l2.82-.76L10 12l-2.71 1.57-2.82-.76A1 1 0 1 0 4 14.74l.89.24-2 1.15a1 1 0 0 0 1 1.74L6 16.63l-.3 1.11A1 1 0 0 0 6.39 19a1.2 1.2 0 0 0 .26 0 1 1 0 0 0 1-.74l.82-3L11 13.73v3.13l-2.07 2.07a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.3 1 1 0 0 0 .71-.3l.65-.65V22a1 1 0 0 0 2 0v-2.47l.81.81a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.41L13 16.7v-3l2.57 1.49.82 3a1 1 0 0 0 1 .74 1.2 1.2 0 0 0 .26 0 1 1 0 0 0 .71-1.23L18 16.63l2.14 1.24a1 1 0 1 0 1-1.74Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgSnowflake)
export default ForwardRef
