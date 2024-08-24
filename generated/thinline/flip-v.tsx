import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFlipV = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m5.466 14.302-.009-.009a.5.5 0 1 0-.704.71l.781.794a.5.5 0 1 0 .713-.701zm.068-6.1-.781.794a.5.5 0 1 0 .713.701l.781-.794.009-.008a.5.5 0 0 0-.722-.693M3.201 12l.182-.185a.5.5 0 0 0-.713-.7l-.526.534a.5.5 0 0 0 0 .702l.526.535a.5.5 0 0 0 .707.006.5.5 0 0 0 .006-.707zm4.88 5.077a.5.5 0 0 0-.464.839l.527.534A.5.5 0 0 0 9 18.1v-.75a.5.5 0 0 0-.919-.273m13.775-5.428-6-6.1A.5.5 0 0 0 15 5.9v12.2a.5.5 0 0 0 .856.35l6-6.1a.5.5 0 0 0 0-.7M16 16.878V7.122L20.799 12zm-7.5-6.223a.5.5 0 0 0-.5.5v1.69a.5.5 0 1 0 1 0v-1.69a.5.5 0 0 0-.5-.5M12 2a.5.5 0 0 0-.5.5v19a.5.5 0 1 0 1 0v-19A.5.5 0 0 0 12 2M8.143 5.55l-.526.534a.5.5 0 0 0 .464.839A.5.5 0 0 0 9 6.65V5.9a.5.5 0 0 0-.857-.351" />
  </svg>
)
const ForwardRef = forwardRef(SvgFlipV)
export default ForwardRef
