import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgVkAlt = (
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
    <path
      d="M15.063 23H8.927C2.777 23 1 21.22 1 15.062V8.928C1 2.778 2.78 1 8.938 1h6.135C21.223 1 23 2.78 23 8.938v6.135C23 21.222 21.22 23 15.062 23z"
      opacity={0.5}
    />
    <path
      d="M11.654 17.002a1 1 0 0 1-.586-.19 13.33 13.33 0 0 1-5.4-8.643 1 1 0 0 1 1.972-.334 11.3 11.3 0 0 0 3.014 5.99V8.001a1 1 0 1 1 2 0v8a1 1 0 0 1-.999 1z"
      opacity={1}
    />
    <path
      d="M16.655 17.002a1 1 0 0 1-.738-.324L14.27 14.88a3.55 3.55 0 0 0-1.615-1.005v2.126a1 1 0 1 1-2 0v-3.27a1 1 0 0 1 .999-1 5.56 5.56 0 0 1 4.09 1.797l1.647 1.797a1 1 0 0 1-.736 1.676z"
      opacity={1}
    />
    <path
      d="M11.65 14.96a1 1 0 0 1-1-1V8.04a1 1 0 1 1 2 0v5.92a1 1 0 0 1-1 1"
      opacity={1}
    />
    <path
      d="M12.57 13.83a1 1 0 0 1-.38-1.926 5.86 5.86 0 0 0 3.485-4.126 1 1 0 1 1 1.95.444 7.87 7.87 0 0 1-4.676 5.534 1 1 0 0 1-.379.074m-.916-4.828h-.003L10.997 9A1 1 0 0 1 10 7.997 1.03 1.03 0 0 1 11.003 7l.654.002a1 1 0 0 1-.003 2"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgVkAlt)
export default ForwardRef
