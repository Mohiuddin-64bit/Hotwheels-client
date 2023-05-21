

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Blog Page</h1>

        <article className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <p className="text-gray-700 mb-4">
            Answer: Access tokens and refresh tokens are commonly used in
            authentication systems. An access token is a token that is issued to
            a client after a successful authentication process. It is used to
            authenticate and authorize subsequent API requests. Refresh tokens
            are used to obtain new access tokens when the existing one expires.
          </p>
          {/* Add more content if desired */}
        </article>

        <article className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            Compare SQL and NoSQL databases?
          </h2>
          <p className="text-gray-700 mb-4">
            Answer: SQL (Structured Query Language) and NoSQL (Not Only SQL) are
            different types of database management systems. SQL databases are
            relational databases that store data in tables with pre-defined
            schemas, and they use SQL for data manipulation and querying. NoSQL
            databases, on the other hand, store data in various formats like
            key-value pairs, documents, or graphs, and they provide more
            flexibility and scalability for handling unstructured or
            semi-structured data.
          </p>
          {/* Add more content if desired */}
        </article>

        <article className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            What is Express.js? What is Nest.js?
          </h2>
          <p className="text-gray-700 mb-4">
            Answer: Express.js is a popular web application framework for
            Node.js. It provides a simple and minimalist approach to building
            web servers and APIs. Nest.js, on the other hand, is a progressive
            framework for building efficient and scalable server-side
            applications. It is built with TypeScript and incorporates ideas
            from Angular to provide a structured and modular architecture for
            Node.js.
          </p>
          {/* Add more content if desired */}
        </article>

        <article className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            What is MongoDB aggregate and how does it work?
          </h2>
          <p className="text-gray-700 mb-4">
            Answer: MongoDB aggregate function is used for data aggregation
            operations. It allows you to process and transform data within
            MongoDB, performing tasks like grouping, filtering, and computing
            aggregate values. It uses a pipeline of stages, where each stage
            applies a specific operation to the documents passed through it,
            resulting in a final aggregated result.
          </p>
          {/* Add more content if desired */}
        </article>
      </div>
    </div>
  );
};

export default BlogPage;
