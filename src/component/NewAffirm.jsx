import { Button, Input, Form } from 'antd'

export default function NewAffirm( {setContent}) {

    const handleSubmit = ({title, quote}) => {
        fetch('http://127.0.0.1:5002/newaff', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title, quote})
        })
        .then(res => res.json())
        .then( data => setContent(data))
        .then(console.error('Affirmation Added'))
        .catch(console.error)
    }

    return (
        <>
            <div className="add-affirm">
                <h3> Enter Affirmation </h3>
                <Form onFinish={handleSubmit} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Form.Item label="Title" name="title">
                        <Input type="text" />
                    </Form.Item>
                    <Form.Item label="Quote" name="quote">
                        <Input type="text" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType='submit'> Submit </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}