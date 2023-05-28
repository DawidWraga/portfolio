import { LandingPage } from 'app/_landing';

export default function RootPage() {
	return <LandingPage />;
}

/**
 * root page is separated from landing page to allow for future flexibility
 * eg if signed in, show dashboard, if not, show landing page
 * ^ in this case, would need to remove _ from landing directory
 */
