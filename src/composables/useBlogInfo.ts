import { BlogCardType } from '~/components/BlogCard.vue'


interface ObjectType {
  [ key: string ]: any
}

export const useBlogInfo = ( blogResult: ObjectType[] ): BlogCardType[] => {

  return blogResult.map( ({ title , description , image , _path }) =>
    ({
      title,
      description,
      image: image || '/images/combogic.png',
      href: `/blog/${ _path.split( '/' )[ 2 ] }`,
    })
  )

}