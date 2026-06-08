import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { Button } from "../components/ui/Button";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <AlertCircle className="h-16 w-16 text-slate-300 mb-6" />
      <h1 className="text-4xl font-bold text-slate-900 mb-2">404 - Page Not Found</h1>
      <p className="text-lg text-slate-600 mb-8 max-w-md">
        The weather decision tool or page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" tabIndex={-1}>
        <Button size="lg" className="min-h-[48px]">Return to Dashboard</Button>
      </Link>
    </div>
  );
}
