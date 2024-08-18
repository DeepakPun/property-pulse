import mongoose from 'mongoose'

let connected = false

const connectDB = async () => {
	mongoose.set('strictQuery', true)

	// If the database is already connected, don't connect again
	if (connected) {
		console.log('MongoDB is connected')
		return
	}

	// Connect to MongoDB
	try {
		await mongoose.connect(process.env.MONGODB_URI)
		connected = true
		console.log('MongoDB connected ...')
	} catch (error) {
		console.log(error)
	}
}

export default connectDB
// I think I am lost or missing something
// In lecture 22, Brad talks about creating API routes in the next lecture. However, lecture 23 is about creating models. I am looking at his screen and apparently there is a folder called api with lots of content in it. I am also looking at the github repo and it is a lot. I skipped over to lecture 27 which says Intro To API Routes and that lecture should about 10 minutes on intro to API routes but it looks like a 3 minute video on adding a Spinner.