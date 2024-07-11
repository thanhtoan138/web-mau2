"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Carousels from './components/Carousels'
import SearchBox from './components/SearchBox'
import Promotion from './components/Promotion'
import ProductTravel from './components/ProductTravel'
import CardList from './components/CardList'
import SpecialOffers from './components/SpecialOffers'
import FavoriteLocation from './components/FavorireLocation'
import WhyList from './components/WhyList'

export default function Home() {
  return (
    <main>
      <Carousels />
      <Promotion />
      <ProductTravel />
      <CardList />
      <SpecialOffers />
      <FavoriteLocation />
      <WhyList />
    </main>
  )
}
