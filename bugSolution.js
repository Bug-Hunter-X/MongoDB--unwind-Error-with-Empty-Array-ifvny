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
    $addFields: {
      relatedDocuments: {
        $ifNull: ["$relatedDocuments", []] // Handle null cases
      }
    }
  },
  {
    $unwind: {
      path: "$relatedDocuments",
      preserveNullAndEmptyArrays: true // Handle empty arrays
    }
  }
];
```