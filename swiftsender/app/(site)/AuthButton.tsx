import Link from 'next/link'
import React from 'react'
import { authUrl } from './actions'

export default function AuthButton() {
  return (
    <Link
        href={authUrl}
    >Authorize</Link>
  )
}
