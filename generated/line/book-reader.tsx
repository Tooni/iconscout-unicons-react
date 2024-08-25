import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBookReader = (
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
    <path d="M20.18 10.19A12 12 0 0 0 18 10c-.42 0-.83 0-1.24.08a5.9 5.9 0 0 0-1.91-1.65 3.8 3.8 0 0 0 1-2.57 3.86 3.86 0 0 0-7.72 0 3.8 3.8 0 0 0 1 2.57 6.1 6.1 0 0 0-1.91 1.64C6.83 10 6.42 10 6 10a12 12 0 0 0-2.18.21 1 1 0 0 0-.82 1v8.25a1 1 0 0 0 .36.77 1 1 0 0 0 .82.22A9.8 9.8 0 0 1 6 20.23a9.9 9.9 0 0 1 5.45 1.63l.13.05A1.1 1.1 0 0 0 12 22a.9.9 0 0 0 .28-.05h.07l.13-.05A9.9 9.9 0 0 1 18 20.23a9.8 9.8 0 0 1 1.82.18 1 1 0 0 0 .82-.22 1 1 0 0 0 .36-.77v-8.25a1 1 0 0 0-.82-.98M12 4a1.86 1.86 0 0 1 0 3.71A1.86 1.86 0 0 1 12 4m-1 15.33a11.9 11.9 0 0 0-5-1.1c-.33 0-.66 0-1 .05V12a9.6 9.6 0 0 1 2.52.05h.11A10 10 0 0 1 11 13.33Zm1-7.73a12 12 0 0 0-1.38-.68h-.06c-.33-.13-.66-.26-1-.36A4 4 0 0 1 12 9.69a4 4 0 0 1 2.44.85A12.4 12.4 0 0 0 12 11.6m7 6.68a11.6 11.6 0 0 0-6 1v-6a9.8 9.8 0 0 1 3.37-1.22h.2A9.4 9.4 0 0 1 19 12Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgBookReader)
export default ForwardRef
