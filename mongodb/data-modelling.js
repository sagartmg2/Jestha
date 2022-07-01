

// students collection
let obj = {
    "name": "john",
    "age": "12",
    class: {
        name: one,
        section: "A",
    },
    courses: [ // embeded documents
        {
            name: Science,
            points: 80
        },
        {
            name: "Math"
        }
    ]
}




// courses
course_1 = {
    _id: course_id,
    name: "Math"
}


// classes

// documents by Reference

let student1 = {
    "name": "john",
    "age": "12",
    calss: ObjectId("class_id"),
    courses: [
        ObjectId("course_id"),
        ObjectId("course_id2")
    ]
}


// authors




// books





book1 = {
    title: "subtle",
    publisher,
    authors: [
        ObjectId("author1-id"),
        ObjectId("author2-id")
    ],
    authors: [
        {
            name: "One",
            age: 12,
            awards: [
                {
                    name: "awd1"
                }
            ]
        },
        {
            name: "Two",
            age: 12,
            awards: [
                {
                    name: "awd1"
                }
            ]
        },
    ]
}




book2 = {
    title: "subtle two",
    publisher,
    authors: [
        {
            name: "One",
            age: 12,
            awards: [
                {
                    name: "awd1"
                }
            ]
        },
        {
            name: "Three",
            age: 12,
            awards: [
                {
                    name: "awd1"
                }
            ]
        },
    ]
}




// authors

author1 = {
    name: "",
    age: 12,
    awards: [
        {
            name: "awd1"
        }
    ],
    website:"auth1.com"
}

author2 = {}



// products 
product1 = {
    name,
    price,
    mfd, efd
}


// ecommerce

// products 
    {
        price:100
    }

// sales collections

sale_1 = {
    // products[
    //     ObjectId("product-id")
    // ],
    products: [{
        name,
        price,
        mfd, efd
    }, {
        name,
        price,
        mfd, efd
    }
    ]
}



// we can design our database according to our needs
// either documents by embedding or by reference
// webapplication
// reading > update > store 
// reading > store > update 





ObjectId("62bd75b251cd41eeec3f2861"),
ObjectId("62bd75b251cd41eeec3f2862")


author1 ={
    name,
    website
}

book1 ={
    name:"book 1",
    authors:[
        {
            name:123,
            website:"author1.com"
        },
        ObjectId("author-id")
    ]
}

book2 ={
    name:"book 2",
    authors:[
        {
            name:123,
            website:"author1.com"
        }
    ]
}


db.books.insertMany([
    {
        name:"subtle",
        author:ObjectId("62bd75b251cd41eeec3f2861")
    },
    {
        name:"subtle",
        author:ObjectId("62bd75b251cd41eeec3f2862")
    }
])


/// Aggregation framework , Aggregation pipeline   
//  => advance find() method

db.books.aggregate([
    {
        $lookup:{
            from:"authors",
            localField:"author",
            foreignField:"_id",
            as:"authors"
        }
    }
])

$match:{

}


// Aggregation  
// Aggregation Framework  
// Aggregation Pipeline  


// db.books.find
// db.books.aggregate([ <filter>, <filter> ])

// db.books.aggregate([ <pipeline>, <pipeline> ])


// {
//     $match:{ name:{$eq:"subtle"} }
// },

db.books.aggregate([
    {
        $match:{
            _id:{$eq:ObjectId("62bec92f25e9e8b982fb2c1a")}
        }
    },
    {
        $lookup:{
            from:"authors",
            localField:"authors",
            foreignField:"_id",
            as:"authors"
        }
    },
    {
        //  TODO: identify the pipeline that return single object from $lookup pipeline instead of array. 
    }
])


DATA - TYPES 
//  everyting that json supports,

// ObjectId
// Timestamp
// IsoDate



authors = db.authors.find({})


db.books.insert({
    name:"Eat the Frog AGAIN",
    authors: [
        ObjectId("62bd75b251cd41eeec3f2861"),
         ObjectId("62bd75b251cd41eeec3f2862"),
      ]
})









