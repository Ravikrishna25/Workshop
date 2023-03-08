import React from 'react'
import { Rate } from 'antd';
import { Button, Form, Input, Card, InputNumber } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const { TextArea } = Input;

function ProForm() {

    const [form] = Form.useForm()

    const p_id = Form.useWatch("pId", form);
    const p_name = Form.useWatch("pName", form);
    const p_desc = Form.useWatch("pDesc", form);
    const price = Form.useWatch("Price", form);
    const rate = Form.useWatch("Rating", form);


    const [number, setNumber] = useState(0);
    const [value, setValue] = useState(2);




    // const [pid, setPid] = useState();
    // const [pname, setPname] = useState("");
    // const [pdesc, setPdesc] = useState("");
    // const [value, setValue] = useState(2);
    async function submit(e) {
        e.preventDefault();

        const data = {
            pId: parseInt(p_id),
            pDesc: p_desc,
            pName: p_name,
            rate: parseInt(rate),
            price: price
        };
        console.log(data);
        await axios.post("http://localhost:8080/post", data)
    }


    return (
        <div>
            <Card style={{ backgroundColor: "Lavender", marginLeft: "300px", marginTop: "150px", marginRight: "300px" }}>

                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    form={form}
                    autoComplete="off"
                    action='POST'
                >
                    <Form.Item label="Product ID" name="pId" rules={[
                        {
                            required: true,
                        },
                    ]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        label="Product Name"
                        name="pName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    {/* <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item> */}
                    <Form.Item label="Price" name="Price">
                        <Input
                            type="text"
                            // value={value.number || number}

                            style={{
                                width: 100,
                            }}
                        />
                    </Form.Item>

                    <Form.Item label="Product Description"
                        name="pDesc" rules={[
                            {
                                required: true,
                            },
                        ]}>
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item label="Rating"
                        name="Rating" rules={[
                            {
                                required: true,
                            },
                        ]}>
                        <Rate tooltips={desc} onChange={setValue} value={value} />
                    </Form.Item>



                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                        name="submit"
                    >
                        <Button type="primary" htmlType="submit" onClick={submit} style={{ backgroundColor: "white", color: "Black" }}>
                           <Link to="/view">
                            Submit
                            </Link> 
                        </Button>
                    </Form.Item>
                </Form>
            </Card>

            <br />
            <br />
            <br />
            <br />



        </div>
    )
}

export default ProForm;