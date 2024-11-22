import { Link } from "@remix-run/react";

interface BreadcrumbProps {
  pageName: string;
}

export default function Breadcrumb({ pageName }: BreadcrumbProps) {
  return (
    <nav className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4 py-4">
        <li>
          <div>
            <Link to="/" className="text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
              Home
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="h-5 w-5 flex-shrink-0 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
            <span className="ml-4 text-sm font-medium text-gray-700 dark:text-gray-200">
              {pageName}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}