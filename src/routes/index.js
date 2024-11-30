import React from "react";
import { Navigate } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
import AuthLockScreen from "../pages/Authentication/AuthLockScreen";

// Dashboard
import Dashboard from "../pages/Dashboard/index";



//Ecommerce Pages



//Utility
import StarterPage from "../pages/Utility/StarterPage";
import Maintenance from "../pages/Utility/Maintenance";
import CommingSoon from "../pages/Utility/CommingSoon";
import Timeline from "../pages/Utility/Timeline";
import FAQs from "../pages/Utility/FAQs";
import Pricing from "../pages/Utility/Pricing";
import Error404 from "../pages/Utility/Error404";
import Error500 from "../pages/Utility/Error500";





// Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login";
import Register1 from "../pages/AuthenticationInner/Register";
import ForgetPwd1 from "../pages/AuthenticationInner/ForgetPassword";
import EditBlog from "../pages/Blog/EditBlog";
import AllBlogs from "../pages/Blog/AllBlogs";
import AddBlog from "../pages/Blog/AddBlog";
import ViewBlog from "../pages/Blog/ViewBlog";
import EditPodcast from "../pages/Podcasts/EditPodcast";
import AddPodcast from "../pages/Podcasts/AddPodcast";
import AllPodcast from "../pages/Podcasts/AllPodcast";
import ViewPodcast from "../pages/Podcasts/ViewPodcast";

const authProtectedRoutes = [



	//Blogs

	{ path: "/editBlog", component: <EditBlog /> },
	{ path: "/addBlog", component: <AddBlog /> },
	{ path: "/blogs", component: <AllBlogs /> },
	{ path: "/ViewBlog", component: <ViewBlog /> },

	//Podcasts
	{ path: "/editPodcast", component: <EditPodcast /> },
	{ path: "/addPodcast", component: <AddPodcast /> },
	{ path: "/Podcast", component: <AllPodcast /> },
	{ path: "/ViewPodcast", component: <ViewPodcast /> },



	{ path: "/dashboard", component: <Dashboard /> },

	// this route should be at the end of all other routes
	{ path: "/", exact: true, component: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
	{ path: "/logout", component: <Logout /> },
	{ path: "/login", component: <Login /> },
	{ path: "/forgot-password", component: <ForgetPwd /> },
	{ path: "/register", component: <Register /> },
	{ path: "/lock-screen", component: <AuthLockScreen /> },

	// Authentication Inner
	{ path: "/auth-login", component: <Login1 /> },
	{ path: "/auth-register", component: <Register1 /> },
	{ path: "/auth-recoverpw", component: <ForgetPwd1 /> },

	{ path: "/maintenance", component: <Maintenance /> },
	{ path: "/comingsoon", component: <CommingSoon /> },
	{ path: "/404", component: <Error404 /> },
	{ path: "/500", component: <Error500 /> },
];

export { authProtectedRoutes, publicRoutes };
