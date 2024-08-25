import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBluetoothB = (
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
    <path d="m13.41 12 3.8-3.79a1 1 0 0 0 0-1.42l-4.5-4.5a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.54.54A1 1 0 0 0 11 3v6.59l-2.79-2.8a1 1 0 1 0-1.42 1.42l3.8 3.79-3.8 3.79a1 1 0 1 0 1.42 1.42l2.79-2.8V21a1 1 0 0 0 .08.38 1 1 0 0 0 .54.54.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l4.5-4.5a1 1 0 0 0 0-1.42ZM13 5.41l2.09 2.09L13 9.59Zm0 13.18v-4.18l2.09 2.09Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgBluetoothB)
export default ForwardRef
