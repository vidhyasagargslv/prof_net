'use client'
import React, {useState} from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import Head from 'next/head'
import '../heropage/page.scss'

function homepage() {
    
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  
  return (
    <div className='bg-black'>

      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Bungee+Inline&display=swap" rel="stylesheet"/>

      
      </Head>
      
      
      <Header setSearchTerm={setSearchTerm} setSelectedDomain={setSelectedDomain} />
      
      <Card  searchTerm={searchTerm} selectedDomain={selectedDomain} />
      
      

    </div>
  )
}

export default homepage