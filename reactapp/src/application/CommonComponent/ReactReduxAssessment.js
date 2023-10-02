//Assessment #4
//1. Create a class component and show all the life cycle hooks
//2. Make a state change, the state should be duplicate and then stop it to call render method to improve efficiency.
//3. Create a product component using functional component and hooks (try using use state to read default values from reducer)
// 	 Create a form to allow user to submit Product Details - name, price, desc, rating
// 	 Create an action method to add the detail to database using a server api
// 	 Server Side - Create product router and api to save the product using productdatamodel
//4. Create a route and navigation to show product component
//5. Explain various hooks in functional component (at least 5)

//useState: add state management to functional components,returns an array with two 
//      elements: the current state value and a function to update it

//useEffect: allows you to perform side effects in your functional components.
//      make it work as shouldComponentUpdate, componentDidMount, componentWillUnmount

//useDispatch - replacement of mapDispatchToProps makes component able to dispatch the action

//useSelector - makes our component capable of being subscriber to store like mapStatToProps

//useContext - access the context (state or functions) defined by a Context.Provider ancestor in the component tree