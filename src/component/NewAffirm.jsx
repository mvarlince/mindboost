import { Button, Input, Form } from 'antd'

export default function NewAffirm({ setContent }) {

    const handleSubmit = ({ title, quote }) => {
        fetch('https://mindboost-api.web.app/newaff', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, quote })
        })
            .then(res => res.json())
            .then(data => setContent(data))
            .then(console.error('Affirmation Added'))
            .catch(console.error)
    }

    return (
        <>
            <div className="add-affirm-container" >
                <div className='add-affirm' >
                    <h3 className='h3-title'> Add Affirmation </h3>
                    <div className='form-items' >
                        <Form className='form' onFinish={handleSubmit}  labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                                <div className='form-items2'> 
                            <Form.Item  label="Title" name="title" style={{color: "white"}}>
                                <Input type="text" style={{color: "white"}} placeholder="Title"/>
                            </Form.Item>
                            <Form.Item label="Quote" name="quote" style={{color: "white"}} >
                                <Input type="text" className='input2'placeholder="Quote"/>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType='submit'> Submit </Button>
                            </Form.Item>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}