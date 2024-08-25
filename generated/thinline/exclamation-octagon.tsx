import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgExclamationOctagon = (
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
    <path d="M12 13a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5m9.854-5.288-5.566-5.566A.5.5 0 0 0 15.935 2h-7.87a.5.5 0 0 0-.353.146L2.146 7.712A.5.5 0 0 0 2 8.065v7.87a.5.5 0 0 0 .146.353l5.566 5.566a.5.5 0 0 0 .353.146h7.87a.5.5 0 0 0 .353-.146l5.566-5.566a.5.5 0 0 0 .146-.353v-7.87a.5.5 0 0 0-.146-.353M21 15.728 15.728 21H8.272L3 15.728V8.272L8.272 3h7.456L21 8.272zm-9-1.353a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25" />
  </svg>
)
const ForwardRef = forwardRef(SvgExclamationOctagon)
export default ForwardRef
