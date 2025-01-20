```javascript
const pipeline = [
  {
    $lookup:
      {
        from: "collection2",
        localField: "_id",
        foreignField: "foreignKey",
        as: "relatedDocuments",
      }
  },
  {
    $unwind: "$relatedDocuments" // This will cause an error if relatedDocuments is empty
  }
];
```