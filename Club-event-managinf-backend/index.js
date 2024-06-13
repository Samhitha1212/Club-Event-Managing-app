const express=require('express')
const app=express()
const cors=require('cors')

const {connectToDb,getDb} =require('./db')

app.use(cors())
app.use(express.json())

connectToDb(()=>{
  console.log("connection establised")
})


app.post('/',(req,res)=>{
  console.log(req.body)
})

app.listen(3000,()=>{
  console.log('listening to port 3000')
})
