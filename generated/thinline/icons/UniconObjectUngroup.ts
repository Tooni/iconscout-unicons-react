import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconObjectUngroup = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M21,19.0921021v-8.1842041C21.5807495,10.7008057,22,10.151001,22,9.5C22,8.6728516,21.3271484,8,20.5,8c-0.651001,0-1.2008057,0.4192505-1.4078979,1H15V4.9078979C15.5807495,4.7008057,16,4.151001,16,3.5C16,2.6728516,15.3271484,2,14.5,2c-0.651001,0-1.2008057,0.4192505-1.4078979,1H4.9078979C4.7008057,2.4192505,4.151001,2,3.5,2C2.6728516,2,2,2.6728516,2,3.5c0,0.651001,0.4192505,1.2008057,1,1.4078979v8.1842041C2.4192505,13.2991943,2,13.848999,2,14.5C2,15.3271484,2.6728516,16,3.5,16c0.651001,0,1.2008057-0.4192505,1.4078979-1H9v4.0921021C8.4192505,19.2991943,8,19.848999,8,20.5C8,21.3271484,8.6728516,22,9.5,22c0.651001,0,1.2008057-0.4192505,1.4078979-1h8.1842041c0.2070923,0.5807495,0.756897,1,1.4078979,1c0.8271484,0,1.5-0.6728516,1.5-1.5C22,19.848999,21.5807495,19.2991943,21,19.0921021z M20.5,9C20.7753906,9,21,9.2246094,21,9.5S20.7753906,10,20.5,10S20,9.7753906,20,9.5S20.2246094,9,20.5,9z M14.5,3C14.7753906,3,15,3.2246094,15,3.5S14.7753906,4,14.5,4S14,3.7753906,14,3.5S14.2246094,3,14.5,3z M3.5,3C3.7753906,3,4,3.2246094,4,3.5S3.7753906,4,3.5,4S3,3.7753906,3,3.5S3.2246094,3,3.5,3z M3.5,15C3.2246094,15,3,14.7753906,3,14.5S3.2246094,14,3.5,14S4,14.2246094,4,14.5S3.7753906,15,3.5,15z M4.9140625,14l-0.0054932,0.0023193c-0.151001-0.4255981-0.4858398-0.760376-0.9115601-0.9111328L4,13.0859375v-8.171875L3.9971313,4.9087524C4.4226074,4.7580566,4.7573242,4.423645,4.9083862,3.998291L4.9140625,4h8.171875l0.0053101-0.0027466c0.1507568,0.425415,0.4852295,0.7601929,0.9105225,0.9111938L14,4.9140625V9h-3.0921021C10.7008057,8.4192505,10.151001,8,9.5,8C8.6728516,8,8,8.6728516,8,9.5c0,0.651001,0.4192505,1.2008057,1,1.4078979V14H4.9140625z M14.5,14c0.2753906,0,0.5,0.2246094,0.5,0.5S14.7753906,15,14.5,15S14,14.7753906,14,14.5S14.2246094,14,14.5,14z M14.0015869,13.0916138c-0.4251709,0.151062-0.7596436,0.4858398-0.9103394,0.9112549L13.0859375,14H10v-3.0859375l-0.0028076-0.0053101c0.425415-0.1507568,0.7601318-0.4851685,0.9111938-0.9104004C10.9091187,9.9971924,10.9135742,10.0014648,10.9140625,10H14v3.0859375L14.0015869,13.0916138z M9.5,10C9.2246094,10,9,9.7753906,9,9.5S9.2246094,9,9.5,9S10,9.2246094,10,9.5S9.7753906,10,9.5,10z M13.0921021,15c0.2070923,0.5807495,0.756897,1,1.4078979,1c0.8271484,0,1.5-0.6728516,1.5-1.5c0-0.651001-0.4192505-1.2008057-1-1.4078979V10h4.0859375l0.0049438-0.0039673c0.1506958,0.4265137,0.4859619,0.7619019,0.9124146,0.9128418L20,10.9140625v8.171875l0.0031738,0.005188c-0.4278564,0.1514893-0.7637329,0.4888306-0.9136963,0.9174194L19.0859375,20h-8.171875c0,0-0.0032349,0.006958-0.0037231,0.0079956c-0.1505127-0.4299927-0.4883423-0.7678223-0.918335-0.918335C9.993042,19.0891724,10,19.0859375,10,19.0859375V15H13.0921021z M9.5,21C9.2246094,21,9,20.7753906,9,20.5S9.2246094,20,9.5,20s0.5,0.2246094,0.5,0.5S9.7753906,21,9.5,21z M20.5,21c-0.2753906,0-0.5-0.2246094-0.5-0.5s0.2246094-0.5,0.5-0.5s0.5,0.2246094,0.5,0.5S20.7753906,21,20.5,21z' }));
