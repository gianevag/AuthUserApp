# Add Auth Context - Typescript

Yesterday, It was a free meeting day. I've created a react app with a Typescript template. The app handles the authorization user session by using React Context  and react-router library (v.6).

Firstly, I have created a [login page](https://www.figma.com/community/file/836569395944745131) inspired by the Figma mockups library; it is an excellent place to find mockups for user interfaces, and you can fork them into your account and export assets and CSS styling. 

Secondly, I've created a context in react app about user authentication implements the Authorize user interface in context provider.

```tsx
interface AuthorizeUser {
    isAuthorized: () => boolean;
    logInUser: () => void;
    logOutUser: () => void;
    signInUser: () => void; 
}
```

I have created a navigation routing process using the react-router-dom library, and I've also added public routers and protected routers. I found some difficulties understanding the new version of react-router lib and where I can put the protected routers. The protected routes were added under a route component using as an element the ProtectRoutes component.

```tsx
<BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicPage/>} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/publicpage" element={<PublicPage/>} />
        <Route element={<ProtectRouters />}>
          <Route path="/privatepage" element={<PrivatePage/>} />
        </Route>
      </Routes>
  </BrowserRouter>
```

The ProtectRouters component use a context hook and check if a user is authenticated and if not then redirect to login page.

```tsx
 const ProtectRouters = () => {
  const authUser = useContext(AuthorizationContext)
 
  if(!authUser?.isAuthorized()) {
      return <Navigate to="/login"/>
  }
	
	// Used to render their child route elements
  return (<><Outlet/></>)
}
```

On LogIn page was implemented the authorization context method signInUser and added in session storage the user token. 

```tsx
import {AuthorizationContext} from "../../context";
//...
const authUser = useContext(AuthorizationContext)
const navigate = useNavigate();
//...
const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // authenticate user by adding token to sessio storage
				authUser?.signInUser()
				// check if used is authorized and redirect to /privatepage
        if(authUser?.isAuthorized()) {
            navigate("/privatepage", {replace: true})
        }
    };
```