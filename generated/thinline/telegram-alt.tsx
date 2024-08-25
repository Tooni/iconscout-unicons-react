import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgTelegramAlt = (
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
    <path d="M21.945 2.765a1.55 1.55 0 0 0-1.572-.244L2.456 9.754a1.543 1.543 0 0 0 .078 2.884L6.4 13.98l2.095 6.926c.004.014.017.023.023.036a.5.5 0 0 0 .093.15.49.49 0 0 0 .226.143c.01.004.017.013.027.015h.006l.003.001a.45.45 0 0 0 .233-.012q.012-.002.025-.005a.5.5 0 0 0 .191-.122c.006-.007.016-.008.022-.014l3.013-3.326 4.397 3.405c.267.209.596.322.935.322.734 0 1.367-.514 1.518-1.231L22.469 4.25a1.53 1.53 0 0 0-.524-1.486M9.588 15.295l-.707 3.437-1.475-4.878 7.315-3.81-4.997 4.998a.5.5 0 0 0-.136.253m8.639 4.772a.54.54 0 0 1-.347.399.53.53 0 0 1-.514-.078l-4.763-3.689a.5.5 0 0 0-.676.06L9.83 19.07l.706-3.427 7.189-7.19a.5.5 0 0 0-.584-.797L6.778 13.054l-3.917-1.362A.53.53 0 0 1 2.5 11.2a.53.53 0 0 1 .334-.518l17.914-7.233a.54.54 0 0 1 .558.086.52.52 0 0 1 .182.518z" />
  </svg>
)
const ForwardRef = forwardRef(SvgTelegramAlt)
export default ForwardRef
