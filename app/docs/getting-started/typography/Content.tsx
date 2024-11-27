import { remToPx } from '@/utils/remToPx'
import { typographyData } from './TypographyAPI'

export const HeadingContent = () => {
  return (
    <tbody className="align-baseline">
      {typographyData.heading.map((data, index) => (
        <tr key={data['font-size']}>
          <td
            translate="no"
            className="border-t border-metal-100 px-4 py-3 text-body-4 font-normal text-metal-500 dark:border-metal-800 dark:text-metal-300">
            text-h{index + 1}
          </td>
          <td
            translate="no"
            className="border-t border-metal-100 px-4 py-3 text-body-4 font-normal text-metal-500 dark:border-metal-800 dark:text-metal-300">
            font-size: {data['font-size']}; /* {remToPx(data['font-size'])} */
            <br />
            line-height: {data['line-height']}; /* {remToPx(data['line-height'])} */
            <br />
            letter-spacing: {data['letter-spacing']};
            <br />
            font-weight: {data['font-weight']};
          </td>
        </tr>
      ))}
    </tbody>
  )
}
export const BodyContent = () => {
  return (
    <tbody className="align-baseline ">
      {typographyData.body.map((data, index) => (
        <tr key={data['font-size']}>
          <td
            translate="no"
            className="border-t border-metal-100 px-4 py-3 text-body-4 font-normal text-metal-500 dark:border-metal-800 dark:text-metal-300">
            text-body{index + 1}
          </td>
          <td
            translate="no"
            className="border-t border-metal-100 px-4 py-3 text-body-4 font-normal text-metal-500 dark:border-metal-800 dark:text-metal-300">
            font-size: {data['font-size']}; /* {remToPx(data['font-size'])} */
            <br />
            line-height: {data['line-height']}; /* {remToPx(data['line-height'])} */
            <br />
            letter-spacing: {data['letter-spacing']};
            <br />
            font-weight: {data['font-weight']};
          </td>
        </tr>
      ))}
    </tbody>
  )
}
export const DisplayContent = () => {
  return (
    <tbody className="align-baseline ">
      {typographyData.display.map((data,index) => (
        <tr key={data['font-size']}>
          <td
            translate="no"
            className="border-t border-metal-100 px-4 py-3 text-body-4 font-normal text-metal-500 dark:border-metal-800 dark:text-metal-300">
            text-display{index + 1}
          </td>
          <td
            translate="no"
            className="border-t border-metal-100 px-4 py-3 text-body-4 font-normal text-metal-500 dark:border-metal-800 dark:text-metal-300">
            font-size: {data['font-size']}; /* {remToPx(data['font-size'])} */
            <br />
            line-height: {data['line-height']}; /* {remToPx(data['line-height'])} */
            <br />
            letter-spacing: {data['letter-spacing']};
            <br />
            font-weight: {data['font-weight']};
          </td>
        </tr>
      ))}
    </tbody>
  )
}
export const captionContent = () => {
  return (
    <tbody className="align-baseline ">
      {typographyData.display.map((data,index) => (
        <tr key={data['font-size']}>
          <td
            translate="no"
            className="border-t border-metal-100 px-4 py-3 text-body-4 font-normal text-metal-500 dark:border-metal-800 dark:text-metal-300">
            text-caption
          </td>
          <td
            translate="no"
            className="border-t border-metal-100 px-4 py-3 text-body-4 font-normal text-metal-500 dark:border-metal-800 dark:text-metal-300">
            font-size: {data['font-size']}; /* {remToPx(data['font-size'])} */
            <br />
            line-height: {data['line-height']}; /* {remToPx(data['line-height'])} */
            <br />
            letter-spacing: {data['letter-spacing']};
            <br />
            font-weight: {data['font-weight']};
          </td>
        </tr>
      ))}
    </tbody>
  )
}
