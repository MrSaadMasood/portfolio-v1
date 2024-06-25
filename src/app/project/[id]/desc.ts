db.data.updateOne({
  name: "Chat Ape"
}, {
  $set: {
    description: {
      frontend: ["RBAC", "Protected Routes", "OAuth with Google", "2 Factor Authentication", "Tanstack Query"
        , "Formik for Form Handling", "Image Lazy Load", "Real Time Update With Web Sockets", "Custom Hooks", "React Context Api",
        "Zod Schema Validation"],
      backend: ["NodeJs Mongo Drivers", "Mongo Aggregation Pipelines", "Redis Caching", "In-house JWT Authentication", "OAuth With Google",
        "Mongo Transactions for Atomicity", "File Upload using Multer", "Winston Logging", "Vertical Scaling with Node Clusters",
        "Web Sockets With Socket I/O"],
      tests: ["Unit Testing with Vitest and Jest", "React Testing Library", "API integration Tests With Mongo-Memory-Server",
        "Integration Tests With Playwright"],
      devops: ["Containerzied With Docker", "Docker Composed For Development and Production"]
    }
  }
})

db.data.updateOne({
  name: "graphql lms"
}, {
  $set: {
    description: {
      backend: ["PostgreSQL", "SQL Transactions", "In-house JWT Role Based Authentication", "OAuth With Google",
        "CSV File Upload Database Population", "Stripe Gateway Integration", "Graphql-Modules for Modular Backend",
        "Graphql-codegen for Auto-Type Generation from .graphql files", "Magidoc for Auto Documented Static Site Generation",
        "Web Socket Integration using PubSubs"],
      tests: ["Unit Testing with Jest", "API integration Tests With SuperTest"],
      devops: ["Containerzied With Docker", "Docker Composed For Development and Production", "CI pipeline For Testing, Linting etc.",
        "CI pipeline for Auto-Tagging"],
      features: ["Free Tokens on First Sign By User", "Reduce Tokens on Solving Tests", "Buy More Tokens On Half Subscription Price",
        "Buy Lifetime Subscription", "Add MCQS to the Database by Admins", "CRUD Operations For Admins",
        "User Test Record Data for User Dashboard", "Pagination for MCQs in Admin Panel"]
    }
  }
})
