import Head from 'next/head';
import Link from 'next/link';
import style from './404.module.css';

const Custom404 = () => {
  return (
    <div className={style.container}>
      <Head>
        <title>404</title>
      </Head>
      <h1>Whoops!</h1>
      <h3>Looks like this page doesn&apos;t exist... yet?</h3>
      <h3>But then what are you looking at right now? 🤔</h3>
      <p>
        Better go{' '}
        <Link href="/">
          <a>back home</a>
        </Link>
      </p>
    </div>
  )
}

export default Custom404;
