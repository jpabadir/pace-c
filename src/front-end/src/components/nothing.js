// import { Form, Input, Button, Select } from 'antd';
// const { Option } = Select;

// class Demo extends React.Component {
//   onGenderChange = (value) => {
//     switch (value) {
//       case 'male':
//         this.formRef.current.setFieldsValue({
//           note: 'Hi, man!',
//         });
//         return;

//       case 'female':
//         this.formRef.current.setFieldsValue({
//           note: 'Hi, lady!',
//         });
//         return;

//       case 'other':
//         this.formRef.current.setFieldsValue({
//           note: 'Hi there!',
//         });
//         return;
//     }
//   };
//   onFinish = (values) => {
//     console.log(values);
//   };
//   onReset = () => {
//     this.formRef.current.resetFields();
//   };
//   onFill = () => {
//     this.formRef.current.setFieldsValue({
//       note: 'Hello world!',
//       gender: 'male',
//     });
//   };

//   render() {
//     return (
//       <Form onFinish={this.onFinish}>
//         <Form.Item
//           name="gender"
//           label="Gender"
//           rules={[
//             {
//               required: true,
//             },
//           ]}
//         >
//           <Select>
//             <Option value="male">male</Option>
//             <Option value="female">female</Option>
//             <Option value="other">other</Option>
//           </Select>
//         </Form.Item>
//         <Form.Item {...tailLayout}>
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     );
//   }
// }
