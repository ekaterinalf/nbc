import Link from 'next/link'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { MainLayout } from '../components/MainLayout'
import { MyPhoto } from '../interfaces/photo'

interface PhotosPageProps {
  allPhotos: MyPhoto[]
}

export default function Home({allPhotos}: PhotosPageProps) {
  
  const [photos, setPohotos] = useState(allPhotos)

  const getMorePhotos = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=${photos.length}&_limit=21`)
    const newPhotos = await res.json()
    setPohotos(photos => [...photos, ...newPhotos])
  }

  return (
  <MainLayout>
    <InfiniteScroll
    dataLength={photos.length}
    next={getMorePhotos}
    hasMore={true}
    loader={<p></p>}
    style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    }}
    >
      {photos.map(photo => {
        return (
        <Link key={photo.id} href={`/photo/${photo.id}`}>
          <a>
            <div style={{margin: '1px 2.5px'}}>
              <img src={photo.thumbnailUrl} alt={photo.title} style={{width: '100%'}} />
            </div>
          </a>
        </Link>
        )
        })}
    </InfiniteScroll>
  </MainLayout>
  )
}

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=21`)
  const allPhotos: MyPhoto[] = await response.json()

  return {
      props: {allPhotos},
  }
}
