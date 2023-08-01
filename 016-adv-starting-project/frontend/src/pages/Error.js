import PageContent from "../components/PageContent";
import { useRouteError} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "Error occurred!";
  let message = "Something went wrong.";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "404 Error";
    message = "Page Not Found";
  }

  return (
    <>
        <MainNavigation/>
        <PageContent title={title}>{message}</PageContent>
    </>
  );
};

export default ErrorPage;
