import { useState } from 'react'
import './App.css'
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react';

function App() {

  return (
    <>
      <h1>Hello World</h1>

      <SignedOut>
        <SignInButton  mode="modal" />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>

    </>
  )
}

export default App
