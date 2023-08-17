import { message } from 'antd';
interface propsMessage {
  type: 'success' | 'error';
  text: string;
}
export const messageWrapper = ({ text, type }: propsMessage) => {
  message[type](text);
};
