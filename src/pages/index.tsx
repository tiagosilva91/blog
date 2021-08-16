import { GetStaticProps } from 'next';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';
import Head from 'next/head';
import { FiCalendar, FiUser } from 'react-icons/fi'
import React from 'react';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          SpaceTraveling
        </title>
      </Head>
      <main className={commonStyles.container}>
        <div className={styles.posts}>
          <a href="#" className={styles.post}>
            <strong>Como Utilizar Hooks</strong>
            <p>Pensando em sincronização em vez de ciclos de vida.</p>
            <ul>
              <li>
                <FiCalendar /> 15 Março 2021
              </li>
              <li>
                <FiUser />Joseph Oliveira
              </li>
            </ul>
          </a>
          <a href="#" className={styles.post}>
            <strong>Criar uma app CRA do zero</strong>
            <p>Tudo sobre como criar a sua primeira aplicação utilizando Create React App</p>
            <ul>
              <li>
                <FiCalendar /> 15 Março 2021
              </li>
              <li>
                <FiUser />Joseph Oliveira
              </li>
            </ul>


          </a>
          <a href="#" className={styles.post}>
            <strong>Como Utilizar Hooks</strong>
            <p>Pensando em sincronização em vez de ciclos de vida.</p>
            <ul>
              <li>
                <FiCalendar /> 15 Março 2021
              </li>
              <li>
                <FiUser />Joseph Oliveira
              </li>
            </ul>
          </a>
          <a href="#" className={styles.post}>
            <strong>Criar uma app CRA do zero</strong>
            <p>Tudo sobre como criar a sua primeira aplicação utilizando Create React App</p>
            <ul>
              <li>
                <FiCalendar /> 15 Março 2021
              </li>
              <li>
                <FiUser />Joseph Oliveira
              </li>
            </ul>
          </a>
          <button type="button">
            Carregar mais posts
          </button>
        </div>


      </main>
    </>


  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
