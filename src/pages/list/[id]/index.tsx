import { items } from '@/common/product'
import BoxTruckIcon from '@/components/BoxTruckIcon'
import PickUpIcon from '@/components/PickUpIcon'
import { formatNumber } from '@/utils'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const id = Number(params?.id)
  const item = items.find((item) => item.id === id)

  return {
    props: {
      item
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: items.map((item) => {
      return {
        params: {
          id: String(item.id),
        },
      }
    }),
    fallback: false
  }
}

function DetailPage({ item }: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!item) {
    return notFound()
  }

  const { id, name, image, price } = item
  const formattedNumber = formatNumber(price)

  return (
    <div className="w-8/12 mx-auto my-24">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <span className="badge my-2 block text-sm text-amber-600 ">New</span>
          <h1 className="title text-4xl font-semibold">{name}</h1>
          <div className="price my-4 text-base">{formattedNumber}</div>
          <div className="flex gap-2">
            <BoxTruckIcon />
            <div className="text-sm">
              <span>Delivery:</span>
              <ul className="mt-1">
                <li>In Stock</li>
                <li>Free Shipping</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-2 pt-2">
            <PickUpIcon />
            <div className="text-sm">
              <span className="block">Pickup:</span>
              <span className="block">Check availability</span>
            </div>
          </div>
          <button className="w-full rounded-md mt-16 py-2 px-4 bg-blue-500 text-white hover:bg-blue-600 text-base font-normal">
            Add to Bag
          </button>
        </div>
        <div className="col-span-8">
          <Link href="/list">
            <Image
              className="thumbnail w-full h-auto"
              style={{ viewTransitionName: `thumbnail-${id}` }}
              src={image}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DetailPage