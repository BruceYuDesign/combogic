import { MetaObject } from 'nuxt/schema'


interface ObjectType {
  [ key: string ]: any
}

export const useHeadConfig = ({ title , description , image }: ObjectType ) => {

  const { BASE_URL } = useRuntimeConfig().public
  const imageUrl = ( image && image.startsWith( 'http' ) )
    ? image
    : BASE_URL + image

  useHead(<MetaObject>{

    ...( title ? { title } : '' ),

    meta: [

      ...( title ? [
        { name: 'og:title' , content: title },
        { name: 'og:site_name', content: title },
        { name: 'twitter:title' , content: title },
      ] : '' ),

      ...( description ? [
        { name: 'description' , content: description },
        { name: 'og:description' , content: description },
        { name: 'twitter:description' , content: description },
      ] : '' ),

      ...( image ? [
        { name: 'og:image' , content: imageUrl },
        { name: 'twitter:image' , content: imageUrl },
      ] : '' ),

    ]

  })
}