type Testimonials = {
  id: number,
  content: string,
  client: string,
  project: string,
  profession: string,
  clientSrc: string,
  projectSrc: string,
  stars: {
    id: number,
    fill: boolean
  }[]
}[]

export default Testimonials;