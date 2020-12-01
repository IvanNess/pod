import { Row, Col } from 'antd'

const UserInfoRow = ({name}) => {
    return (
        <Row>
            <Col span={4} offset={8}>
                <p className="">{name}</p>
            </Col>
        </Row>
    )
}

export default UserInfoRow
