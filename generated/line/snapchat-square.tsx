import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSnapchatSquare = (
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
    <path d="M21.973 6.68a6 6 0 0 0-.098-1.073 4.4 4.4 0 0 0-.406-1.246 4.3 4.3 0 0 0-.832-1.11 4.1 4.1 0 0 0-1.816-1.036 7.4 7.4 0 0 0-1.92-.205L16.898 2H7.099v.01a11 11 0 0 0-1.101.05 5.2 5.2 0 0 0-1.176.264A4.26 4.26 0 0 0 2.219 5.17a7.3 7.3 0 0 0-.205 1.905l-.006 9.838a9.5 9.5 0 0 0 .09 1.333 4.6 4.6 0 0 0 .41 1.345 4.3 4.3 0 0 0 1.201 1.454 3.9 3.9 0 0 0 1.203.651 6.5 6.5 0 0 0 1.976.29c.42.003.839.014 1.258.012 3.047-.013 6.094.022 9.14-.019a7 7 0 0 0 1.2-.127 4.06 4.06 0 0 0 2.007-.977 4.16 4.16 0 0 0 1.326-2.212 8 8 0 0 0 .173-1.75v-.117c0-.046-.017-9.984-.019-10.115m-2.676 9.25c-.128.3-.774.548-1.868.717-.102.016-.146.182-.205.454q-.035.166-.083.337a.204.204 0 0 1-.216.162h-.018a2 2 0 0 1-.31-.04 4 4 0 0 0-.821-.086 3.6 3.6 0 0 0-.592.05 2.8 2.8 0 0 0-1.123.574 3.26 3.26 0 0 1-1.97.776l-.112-.003-.073.003a3.25 3.25 0 0 1-1.97-.776 2.84 2.84 0 0 0-1.123-.574 3.6 3.6 0 0 0-.592-.05 4 4 0 0 0-.82.093 2 2 0 0 1-.311.044.214.214 0 0 1-.234-.167q-.05-.175-.083-.34c-.06-.273-.103-.44-.205-.456-1.094-.168-1.74-.417-1.869-.718a.3.3 0 0 1-.023-.095.176.176 0 0 1 .147-.183 3.82 3.82 0 0 0 2.296-1.365A5.2 5.2 0 0 0 7.9 13.07l.004-.008a.79.79 0 0 0 .075-.658c-.14-.332-.607-.48-.916-.578a3 3 0 0 1-.207-.07c-.274-.108-.724-.337-.664-.652a.61.61 0 0 1 .593-.39.4.4 0 0 1 .18.036 1.8 1.8 0 0 0 .742.196.62.62 0 0 0 .428-.131q-.012-.219-.027-.438a7.4 7.4 0 0 1 .177-2.951 3.84 3.84 0 0 1 3.562-2.298l.295-.002a3.84 3.84 0 0 1 3.568 2.298 7.4 7.4 0 0 1 .176 2.955l-.003.047-.023.389a.6.6 0 0 0 .388.13 1.9 1.9 0 0 0 .7-.195.55.55 0 0 1 .228-.046.7.7 0 0 1 .261.05l.004.002a.485.485 0 0 1 .367.398c.003.153-.11.381-.669.602-.057.022-.13.046-.207.07-.31.098-.776.246-.916.578a.78.78 0 0 0 .074.657l.004.009a4.52 4.52 0 0 0 3.079 2.582.176.176 0 0 1 .146.183.3.3 0 0 1-.023.096" />
  </svg>
)
const ForwardRef = forwardRef(SvgSnapchatSquare)
export default ForwardRef
