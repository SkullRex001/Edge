import { Hono } from 'hono'
import { prisma } from './prismaclient'

const app = new Hono()

app.get('/',  (c) => {
  return c.text('Hello Hono!')
})

app.post('/' , async(c)=>{
  const {email , name } = await c.req.json();

  const response = await prisma.user.create({
    data :{
      email,
      name
    }
  })

  return c.json({
    message : "User Created",
    response
  })

} )

export default app
