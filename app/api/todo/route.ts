import { dbConnect } from "@/lib/mongodb"
import { ObjectId } from "mongodb"
import mongoose from "mongoose"
import { NextResponse, NextRequest } from "next/server"

export async function GET() {

    try{
        await dbConnect()
        const todos = await mongoose.connection.collection("todos").find({}).toArray()
        return NextResponse.json(todos, {status: 200})
    }catch(error) {
        return NextResponse.json(error, {status: 500})
    }
}

export async function POST(req: NextRequest){

try{
    await dbConnect();
    const collection = mongoose.connection.collection("todos");
    const { text } = await req.json()
    const todo = {text: text, completed: false}
    await collection.insertOne(todo)
    return NextResponse.json(todo, {status: 201})

}catch(error) {
        return NextResponse.json(error, {status: 500})
    }
}

export async function PUT(req: NextRequest){

   try{
    const { id, text, completed } = await req.json();
    await dbConnect();
    const collection = mongoose.connection.collection("todos")
    await collection.updateOne(
        {_id: new ObjectId(id)},
        {$set: {text, completed}} //setting new text and completed values
    )
    return NextResponse.json({message: "Todo updated successfully"}, {status: 200})
   }catch(error) {
        return NextResponse.json(error, {status: 500})
    }
}

export async function DELETE (req: NextRequest){

    try{
        const { id } = await req.json();
        await dbConnect();
        const collection = mongoose.connection.collection("todos");
        await collection.deleteOne({_id: new ObjectId(id)})
        return NextResponse.json({message: "Todo deleted successfully"}, {status: 200})
    }catch(error) {
        return NextResponse.json(error, {status: 500})
    }
}