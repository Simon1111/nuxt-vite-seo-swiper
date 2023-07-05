export default function meta(title: string, description?: string){
  return {
    title,
    meta: [{
      name: 'description',
      content: description
    },{
      name: "twitter:title",
      content: title
    },{
      name: 'twitter:description',
      content: description
    },{
      property: "og:title",
      content: title
    }]
  }
}