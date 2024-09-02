const mongodb = require("mongodb");

const connectString =
  "mongodb+srv://sanklpkaushik21:sanklpkaushik21@cluster0.otkshsy.mongodb.net/";

const connect = new mongodb.MongoClient(connectString);
const dName = "User";

const connectDB = async () => {
  try {
    // Connect to the MongoDB server
    await connect.connect();
    console.log("Connection Successful to Server");

    // Access the database
    const db = connect.db(dName);

    // Access the collection from the database
    const collection = db.collection("documents");

    // Define the criteria to check for existence
    const filter = { name: "Sankalp" };

    // Define the document to insert if it doesn't exist
    const updateDocument = {
      $setOnInsert: {
        name: "Sankalp",
        Education: "BKBIET",
        PhoneNo: 1233445566,
        Gender: "M",
      },
    };

    // Use upsert to insert if not exists
    const result = await collection.updateOne(filter, updateDocument, {
      upsert: true,
    });

    // Check if a new document was inserted
    if (result.upsertedCount > 0) {
      console.log("Document inserted:", result.upsertedId);
    } else {
      console.log("Document already exists. No insertion performed.");
    }

    // Find documents with name "Sankalp"
    const cursor = collection.find({ name: "Sankalp" });

    // Convert the cursor to an array to get all documents
    const documents = await cursor.toArray();

    // Log the documents found
    console.log(documents);

    return "done.";
  } catch (err) {
    console.error("Connection failed: ", err);
    throw err;
  } finally {
    // Close the connection
    await connect.close();
  }
};

// Call the function to test the connection and conditional insertion
connectDB().then(console.log).catch(console.error);
