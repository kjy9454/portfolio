import Link from "next/link";
import React from "react";

const Example = () => {
  return (
    <section id="example" className="py-20 bg-white">
      <div className="text-black max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8">
          <h1 className="text-2xl font-bold">
            Next.js 렌더링 예시 페이지 목록
          </h1>
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>
              <Link href="/ssg" className="text-blue-600 underline">
                SSG Example
              </Link>
            </li>
            <li>
              <Link href="/ssr" className="text-blue-600 underline">
                SSR Example
              </Link>
            </li>
            <li>
              <Link href="/csr" className="text-blue-600 underline">
                CSR Example
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Example;
