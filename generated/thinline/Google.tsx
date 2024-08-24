import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgGoogle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M22.132 10.033a.5.5 0 0 0-.492-.41h-9.418a.5.5 0 0 0-.5.498v3.869a.5.5 0 0 0 .5.5h4.735c-.296.861-.868 1.6-1.627 2.103a5.55 5.55 0 0 1-3.108.87A5.43 5.43 0 0 1 7.1 13.682v-.002a5.4 5.4 0 0 1 0-3.48v-.002a5.43 5.43 0 0 1 5.12-3.781A4.93 4.93 0 0 1 15.7 7.774a.5.5 0 0 0 .7-.007l2.868-2.869a.5.5 0 0 0-.013-.72 10.14 10.14 0 0 0-7.032-2.738 10.45 10.45 0 0 0-9.383 5.785 10.51 10.51 0 0 0 0 9.43 10.45 10.45 0 0 0 9.383 5.785 10.03 10.03 0 0 0 6.952-2.552l.005-.002a10.3 10.3 0 0 0 3.143-7.719c0-.716-.064-1.43-.19-2.134m-9.91-7.593a9.15 9.15 0 0 1 5.962 2.127l-2.16 2.16a5.94 5.94 0 0 0-3.802-1.31 6.41 6.41 0 0 0-5.817 3.818l-2.48-1.924a9.45 9.45 0 0 1 8.297-4.87m-9.5 9.5a9.4 9.4 0 0 1 .753-3.71l2.573 1.994a6.4 6.4 0 0 0 0 3.431L3.476 15.65a9.6 9.6 0 0 1-.754-3.71m9.5 9.5a9.45 9.45 0 0 1-8.298-4.871l2.481-1.924a6.41 6.41 0 0 0 5.817 3.818 6.67 6.67 0 0 0 3.355-.847l.11.085 2.363 1.836a9.2 9.2 0 0 1-5.828 1.903m6.582-2.584-2.378-1.846a5.1 5.1 0 0 0 1.669-2.929.5.5 0 0 0-.491-.59h-4.882v-2.869h8.492q.108.769.108 1.545a9.42 9.42 0 0 1-2.518 6.69" />
  </svg>
)
const ForwardRef = forwardRef(SvgGoogle)
export default ForwardRef
