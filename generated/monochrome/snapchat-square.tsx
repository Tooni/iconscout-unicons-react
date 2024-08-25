import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSnapchatSquare = (
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
      d="M19.174 15.652a4.52 4.52 0 0 1-3.079-2.582l-.004-.009a.78.78 0 0 1-.074-.657c.14-.332.607-.48.916-.578.077-.024.15-.048.207-.07.559-.22.672-.45.67-.602a.485.485 0 0 0-.368-.398l-.004-.002a.7.7 0 0 0-.26-.05.55.55 0 0 0-.23.046 1.9 1.9 0 0 1-.7.195.6.6 0 0 1-.387-.13l.023-.389.003-.047a7.4 7.4 0 0 0-.176-2.955 3.84 3.84 0 0 0-3.568-2.298l-.295.002a3.84 3.84 0 0 0-3.562 2.298 7.4 7.4 0 0 0-.177 2.951l.027.438a.62.62 0 0 1-.428.13 1.8 1.8 0 0 1-.742-.195.4.4 0 0 0-.18-.036.61.61 0 0 0-.593.39c-.06.315.39.544.664.652.057.023.13.046.207.07.309.098.775.246.916.578.073.22.046.46-.075.658l-.004.008c-.202.44-.465.85-.782 1.217a3.82 3.82 0 0 1-2.296 1.365.176.176 0 0 0-.147.183q.003.05.023.095c.129.301.775.55 1.869.718.102.016.145.183.205.456.024.11.048.223.083.34.023.107.124.18.234.167a2 2 0 0 0 .31-.044q.406-.09.821-.093.298 0 .592.05c.413.105.797.3 1.124.574a3.25 3.25 0 0 0 1.97.776q.036 0 .072-.003c.03.002.07.003.112.003a3.26 3.26 0 0 0 1.97-.776c.327-.273.71-.47 1.123-.574q.294-.05.592-.05.414.002.82.087.154.033.311.04h.017a.204.204 0 0 0 .217-.163q.049-.17.083-.337c.06-.272.103-.438.205-.454 1.094-.169 1.74-.417 1.868-.716a.3.3 0 0 0 .023-.096.176.176 0 0 0-.146-.183"
      opacity={0.5}
    />
    <path
      d="M17.508 2h-11a4.5 4.5 0 0 0-4.5 4.5v11a4.5 4.5 0 0 0 4.5 4.5h11a4.5 4.5 0 0 0 4.5-4.5v-11a4.5 4.5 0 0 0-4.5-4.5m1.79 13.93c-.129.3-.775.548-1.869.717-.102.016-.146.182-.205.454q-.035.166-.083.337a.204.204 0 0 1-.217.162h-.017a2 2 0 0 1-.31-.04 4 4 0 0 0-.821-.086q-.298 0-.592.05c-.413.105-.796.3-1.123.574a3.26 3.26 0 0 1-1.97.776q-.065 0-.112-.003l-.073.003a3.25 3.25 0 0 1-1.97-.776 2.84 2.84 0 0 0-1.123-.574 3.6 3.6 0 0 0-.592-.05q-.414.004-.82.093a2 2 0 0 1-.311.044.214.214 0 0 1-.234-.167 5 5 0 0 1-.083-.34c-.06-.273-.103-.44-.205-.456-1.094-.168-1.74-.417-1.869-.718a.3.3 0 0 1-.023-.095.176.176 0 0 1 .147-.183 3.82 3.82 0 0 0 2.296-1.365c.317-.367.58-.776.783-1.217l.003-.008a.79.79 0 0 0 .075-.658c-.14-.332-.607-.48-.916-.578a3 3 0 0 1-.207-.07c-.274-.108-.724-.337-.664-.652a.61.61 0 0 1 .593-.39.4.4 0 0 1 .18.036c.23.118.484.185.742.196a.62.62 0 0 0 .428-.131l-.027-.438a7.4 7.4 0 0 1 .177-2.951 3.84 3.84 0 0 1 3.562-2.298l.295-.002a3.84 3.84 0 0 1 3.568 2.298 7.4 7.4 0 0 1 .176 2.955l-.003.047-.023.389c.11.087.247.133.388.13a1.9 1.9 0 0 0 .7-.195.55.55 0 0 1 .228-.046q.136 0 .261.05l.004.002a.485.485 0 0 1 .367.398c.003.153-.11.381-.669.602-.057.022-.13.046-.207.07-.31.098-.776.246-.916.578a.78.78 0 0 0 .074.657l.004.009a4.52 4.52 0 0 0 3.079 2.582.176.176 0 0 1 .146.183.3.3 0 0 1-.023.096z"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSnapchatSquare)
export default ForwardRef
