import fetch from 'isomorphic-fetch'
import {useRouter} from 'next/router'
import Container from '../../components/Container';

const User = ({User}) => {

  const router = useRouter();
  const {id} = router.query;

  return (
    <Container>
        <div className='row'>
           <div className='col-md-6 offset-md-3' >
                <div className='card'>
                    <div className='card-header text-center'>
                        <img src={User.avatar} style={{borderRadius:'50%'}} />
                    </div>
                    <div className='card-body text-center'>
                        <p className='h3'> {User.first_name +" "+ User.last_name} </p>
                        <p className='h5'> Correo: {User.email} </p>
                    </div>
                </div>
           </div>
        </div>
    </Container>
  )
}

User.getInitialProps = async (ctx) => {
    const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
    const dat = await res.json();
    return {User: dat.data}
}

export default User