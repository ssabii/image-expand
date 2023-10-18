import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/common/product'
import { formatNumber } from '@/utils'

interface ItemProps {
  item: Product
}

function Item({ item }: ItemProps) {
  const { id, name, image, price } = item
  const formattedPrice = formatNumber(price)

  return (
    <Link
      className="w-60 min-h-min px-4 py-6 flex flex-col items-center rounded-xl shadow-xl cursor-pointer"
      href={`/list/${id}`}
    >
      <Image
        className="thumbnail w-full h-auto"
        style={{ viewTransitionName: `thumbnail-${id}` }}
        src={image}
        alt={name}
        width={0}
        height={0}
        sizes="100vw"
      />
      <span className="my-2 block text-sm text-amber-600 ">New</span>
      <div className="text-base font-semibold text-center min-h-[48px]">{name}</div>
      <div className="text-sm mt-2">{formattedPrice}</div>
    </Link>
  )
}

export default Item