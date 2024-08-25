import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAnkh = (
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
    <path d="M18.5 13h-4.807A7.78 7.78 0 0 0 17 6.9a5.001 5.001 0 0 0-10 0 7.78 7.78 0 0 0 3.307 6.1H5.5a.5.5 0 0 0 0 1h6v7.5a.5.5 0 0 0 1 0V14h6a.5.5 0 0 0 0-1m-6.501-.07C11.132 12.436 8 10.399 8 6.9a4.001 4.001 0 0 1 8 0c0 3.488-3.134 5.533-4.001 6.03" />
  </svg>
)
const ForwardRef = forwardRef(SvgAnkh)
export default ForwardRef
