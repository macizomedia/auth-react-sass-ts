import React from 'react'
import Progress from 'components/Commons/Progress'
import Main from 'components/Fragments/Main'
import Message from 'components/Commons/Message'

import content from '../../content.json'
import Form from 'components/Commons/Form'

const Index = () => {
    return (
        <div>
            <Main>
                <Progress porcentage={20} />
            </Main>
            <Message
                title={content[0].hero}
                span={content[0].span}
                content={content[0].message}
                foot={content[0].foot}
            />
            <Form />
        </div>
    )
}

export default Index
