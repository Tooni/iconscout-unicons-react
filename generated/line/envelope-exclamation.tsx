import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgEnvelopeExclamation = (
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
    <path d="M21 13.5a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.91l5.88 5.88a3 3 0 0 0 4.24 0l3.59-3.58a1 1 0 0 0-1.42-1.42l-3.58 3.59a1 1 0 0 1-1.42 0L5.41 7.5H17a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1m0-11a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1m-.2 7a.6.6 0 0 0-.18.06.8.8 0 0 0-.18.09l-.15.12a1.05 1.05 0 0 0-.29.71 1 1 0 0 0 0 .19.6.6 0 0 0 .06.19.8.8 0 0 0 .09.18 2 2 0 0 0 .12.15 1 1 0 0 0 1.42 0l.12-.15a.8.8 0 0 0 .09-.18.6.6 0 0 0 .06-.19 1 1 0 0 0 0-.19 1 1 0 0 0-1.2-1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgEnvelopeExclamation)
export default ForwardRef
