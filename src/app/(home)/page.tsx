import IndexPage from '.'
import Layout from '../../components/MainLayout'

export default function Page() {
  return <IndexPage />
}

Page.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}