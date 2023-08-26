import { message } from 'antd';
import { MessageInstance } from 'antd/es/message/interface';
import { useCallback } from 'react';
const [messageApi, contextHolder] = message.useMessage();

// interface propsMessage {
//   type: 'success' | 'error';
//   content: string;
// }
// export const messageWrapper = () => {
//   messageApi.open({
//       type: 'success',
//       content: 'This is a success message',
//   });
// };

interface ImessageWrapper {
  text: string,
  messageApi: MessageInstance
}
export const messageWrapper = ({text, messageApi}: ImessageWrapper) => {
  messageApi.open({
    type: 'error',
    content: text,
  });
};