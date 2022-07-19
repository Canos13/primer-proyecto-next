import fetch from 'isomorphic-fetch'
import Users from '../components/Users'
import Container from '../components/Container'

const Index = ({users}) => {
    return (
        <>
            <Container title="Homes">
                <h1>Hola nextJS</h1>

                <Users users={users} />
            </Container>
        </>
    )
}

Index.getInitialProps = async (ctx) => {
    const res = await fetch('https://reqres.in/api/users');
    const dat = await res.json();

    return {users: dat.data}
}

export default Index;