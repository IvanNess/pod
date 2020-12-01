import { Form } from 'antd'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { useRouter } from 'next/router'
import { createRegion } from '../../src/graphql/mutations'
import { createCity } from '../../src/graphql/mutations';
import InputItem from '../../components/form-items/input-item';
import ButtonItem from '../../components/form-items/button';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 },
    },
}
const tailFormItemLayout = {
    wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 16, offset: 8 },
    },
}

const createFunctions = {
    city: createCity,
    region: createRegion
}

const titles = {
    city: 'City',
    region: 'Region'
}

const Create = () => {

const [form] = Form.useForm()

const router = useRouter()

console.log('router', router)

const { stringid } = router.query

const onFinish = async values => {
    console.log('Received values of form: ', values)
    const { name, stringCode } = values
    try {
        const cur = await Auth.currentAuthenticatedUser()
        console.log(cur)
        
        const data = await API.graphql(graphqlOperation(createFunctions[stringid], {input: {name, stringCode}}))
        console.log(data)
    } catch (error) {
        console.log('creation error:', error);
    }
}

return (
    <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
    >
        <InputItem name="name" label="Name" message="There is no empty field allowed."/>

        <InputItem name="stringCode" label="String Code" message="There is no empty field allowed."/>

        <ButtonItem layout={tailFormItemLayout} title={`Create ${titles[stringid]}`}/>

    </Form>
)}

export async function getStaticPaths() {
    console.log(Object.keys(createFunctions))
    const paths = Object.keys(createFunctions).map(key=>({params: {stringid: key}}))
    return {
        paths, fallback: false
    };
  }
  
export async function getStaticProps(context) {
    console.log(context)
    //const id = context.params.id;
    //const post = await API.graphql({ query: getPost, variables: { id } });
    return {
        props: {
        //    post: post.data.getPost
        }
    }
}

export default Create