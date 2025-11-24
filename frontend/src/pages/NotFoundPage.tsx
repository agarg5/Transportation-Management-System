import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-4 py-16">
      <div>
        <p className="text-sm font-semibold text-primary tracking-wider">
          404
        </p>
        <h1 className="mt-2 text-3xl font-bold">Page not found</h1>
        <p className="mt-2 text-muted-foreground max-w-md">
          The page you are looking for doesn&apos;t exist or was moved. Use the
          navigation or go back to the dashboard.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          to="/orders"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Go to Orders
        </Link>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium"
        >
          Back to dashboard
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;

