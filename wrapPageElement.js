import PageLayout from './src/components/PageLayout'

const wrapPageElement = ({ element, props }) => {
    return <PageLayout {...props}>{element}</PageLayout>
}

export default wrapPageElement