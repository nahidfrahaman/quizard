

const Blog = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="70326c9b-4a0f-429b-9c76-792941e326d5"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Welcome My Blogs</span>
              </span>{' '}
              
            </h2>
            
          </div>
        </div>
        <div className="max-w-screen-xl sm:mx-auto">
          <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-bold">
                 Qus: What is the perpose fo React Router
                </p>
                <p className="text-gray-700">
                React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React. 
                  <br />
                  <br />
                  The major advantage of react-router is that the page does not have to be refreshed when a link to another page is clicked, for example. Moreover, it is fast, very fast compared to traditional page navigation. This means that the user experience is better and the app has overall better performance.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-bold">
                 Qus: How Does Contex API works
                </p>
                <p className="text-gray-700">
                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also  as an easier, lighter approach to state management.
                  <br />
                  <br />
                  At First We Need to Deaclare a Context then and then set provider  and pass the value ....
                </p>
              </div>
              
            </div>
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-bold">
                  Qus: Write About UseEffect ???
                </p>
                <p className="text-gray-700">
                  UseEffect in an React router hook , This Hook Hooks are a new addition in React 16.8.

                  The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM,
                  <br />
                  <br />
                  Common side effects include:

                 Making a request to an API for data from a backend server <br />
                 To interact with browser APIs (that is, to use document or window directly) <br />
                 Using unpredictable timing functions like setTimeout or setInterval 
                </p>
              </div>
              
             
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Blog;