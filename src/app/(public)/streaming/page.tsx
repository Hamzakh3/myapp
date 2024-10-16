import Posts from "@/components/posts";
import Users from "@/components/users";
import { Suspense } from "react";
function Steaming() {
  return (
    <div className="grid grid-cols-2 gap-2 w-full">
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Posts />
      </Suspense>
      <Users />
    </div>
  );
}

export default Steaming;
