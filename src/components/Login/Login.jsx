import React, { useState } from 'react';
import { Button, PasswordInput, Text, TextInput } from '@mantine/core';
import theme from '../Card/Card.module.css';
import PageHeader from '../PageHeader/PageHeader';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(data => data.json());

}

export default function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  };

  return(
    <section>
      <PageHeader title={'Login'} />
      <div className={'wrapper'}>
        <form onSubmit={handleSubmit}>
          <Text size="lg" weight={500} role={'title'}>Please sign in</Text>
          <TextInput
            label="Username"
            placeholder="Your username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <Button radius="md" type={'submit'} className={theme.cardButton}>sign in</Button>
          </div>
        </form>
      </div>
    </section>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
}