import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const Svg500Px = (
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
      d="m19.705 19.266-.067.067a8.8 8.8 0 0 1-2.89 1.953 9.1 9.1 0 0 1-3.539.714 9.04 9.04 0 0 1-6.428-2.667 8.97 8.97 0 0 1-2.556-4.99q-.045-.312.536-.401.569-.09.625.223a.07.07 0 0 1 .01.045 10 10 0 0 0 .514 1.774 7.5 7.5 0 0 0 1.697 2.523 7.92 7.92 0 0 0 8.683 1.696 8 8 0 0 0 2.51-1.696l.068-.067a.27.27 0 0 1 .279-.067 1 1 0 0 1 .368.245q.402.413.19.648m-5.268-6.864-.737.736.704.704q.234.234-.079.546a.53.53 0 0 1-.357.19.29.29 0 0 1-.212-.111l-.692-.681-.736.736a.23.23 0 0 1-.168.056.5.5 0 0 1-.346-.178l-.022-.023a.45.45 0 0 1-.201-.323.33.33 0 0 1 .09-.19l.736-.726-.737-.736q-.178-.179.157-.502a.55.55 0 0 1 .346-.201.26.26 0 0 1 .145.055l.725.737.726-.725q.2-.19.535.145.302.301.123.49Zm5.257.636a6.48 6.48 0 0 1-1.92 4.62 6.6 6.6 0 0 1-2.087 1.407 6.56 6.56 0 0 1-5.09 0 6.6 6.6 0 0 1-2.086-1.407 6.3 6.3 0 0 1-1.395-2.075 1.6 1.6 0 0 1-.168-.447h-.01q-.101-.301.479-.49.558-.18.67.133a5.9 5.9 0 0 0 1.082 1.864h.011v-3.806a3.6 3.6 0 0 1 1.139-2.59 3.89 3.89 0 0 1 2.823-1.149 3.84 3.84 0 0 1 2.802 1.15 3.77 3.77 0 0 1 1.16 2.779 3.973 3.973 0 0 1-3.962 3.962 4.4 4.4 0 0 1-1.25-.179q-.312-.123-.145-.68.179-.57.491-.48l.157.033q.156.033.362.067a2 2 0 0 0 .34.033 2.68 2.68 0 0 0 1.965-.798 2.64 2.64 0 0 0 .804-1.947 2.56 2.56 0 0 0-.804-1.909 2.65 2.65 0 0 0-1.953-.792 2.55 2.55 0 0 0-1.987.893 2.63 2.63 0 0 0-.714 1.786v4.609a5.1 5.1 0 0 0 2.7.748 5.4 5.4 0 0 0 2.066-.408 5.33 5.33 0 0 0 3.303-4.927 5.354 5.354 0 0 0-5.357-5.346 5.17 5.17 0 0 0-3.795 1.563 8 8 0 0 0-.859.97l-.022.023a1 1 0 0 1-.145.173.7.7 0 0 1-.24.106.68.68 0 0 1-.43-.034 1.1 1.1 0 0 1-.407-.184.37.37 0 0 1-.173-.296V2.424a.43.43 0 0 1 .117-.296A.4.4 0 0 1 7.473 2h9.788q.335 0 .335.614t-.335.614H8.209v5.39h.012a7 7 0 0 1 1.138-.937A7 7 0 0 1 10.564 7a6.6 6.6 0 0 1 2.578-.513A6.4 6.4 0 0 1 15.687 7a6.52 6.52 0 0 1 4.007 6.038m-.346-6.484a.26.26 0 0 1 .1.2.35.35 0 0 1-.061.201q-.062.09-.184.235-.29.29-.436.29a.25.25 0 0 1-.178-.078 8.8 8.8 0 0 0-2.31-1.485 7.6 7.6 0 0 0-3.08-.625 8.2 8.2 0 0 0-2.925.547q-.301.112-.502-.413a1.1 1.1 0 0 1-.09-.424.26.26 0 0 1 .18-.223 8.2 8.2 0 0 1 3.336-.636 9 9 0 0 1 3.527.714 8.6 8.6 0 0 1 2.623 1.697"
      opacity={1}
      data-name="Brand Logos"
    />
  </svg>
)
const ForwardRef = forwardRef(Svg500Px)
export default ForwardRef
