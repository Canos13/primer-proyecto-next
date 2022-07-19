import Navigation from './navigation'
import Head from 'next/head'

const Container = (props) => {
  return (
    <div>
        <Head>
            <title> {props.title} </title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css" integrity="sha384-qF/QmIAj5ZaYFAeQcrQ6bfVMAh4zZlrGwTPY7T/M+iTTLJqJBJjwwnsE5Y0mV7QK" crossorigin="anonymous"></link>
        </Head>
        <Navigation />
        <div className='container p-4' >
            {props.children}
        </div>
    </div>
  )
}

export default Container