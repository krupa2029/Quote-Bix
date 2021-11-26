import { Route, useParams } from "react-router";
import { Fragment } from "react/cjs/react.production.min";

import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>QuoteDetail page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
          <Comments />
      </Route>
    </Fragment>
  );
};
export default QuoteDetail;
