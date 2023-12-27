import { gql } from '@apollo/client'
import { css } from '@web-application-template-admin/styled-system/css'
import { flex } from '@web-application-template-admin/styled-system/patterns'
import { Button, Icon } from 'ui'

import { getClient } from '@/lib/apollo/client'

const query = gql`
  query {
    pokemon(name: "pikachu") {
      name
    }
  }
`

export default async function Page(): Promise<JSX.Element> {
  const { data } = await getClient().query<{ pokemon: { name: string } }>({
    query,
  })

  return (
    <main>
      <h1 className={css({ color: 'primary' })}>HELLO WORLD</h1>
      <div className={flex({ align: 'center' })}>
        <Icon name="User" size="sm" />
        <span>USER</span>
      </div>
      <div>{data.pokemon.name}</div>
      <div className={flex({ gap: 8, align: 'center' })}>
        <Button size="lg">Button</Button>
        <Button size="md">Button</Button>
        <Button size="sm">Button</Button>
      </div>
    </main>
  )
}
