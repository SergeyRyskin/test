import React from 'react'
import dynamic from 'next/dynamic'
import { SessionAuth } from 'supertokens-auth-react/recipe/session'
import Upload from './upload'


export default function Home() {
  return (
    // we protect ProtectedPage by wrapping it with SessionAuth

    <SessionAuth>
      <Upload />
    </SessionAuth>
  )
}