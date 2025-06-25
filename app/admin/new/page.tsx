import NewMotorcycleForm from "@/components/form/NewMotorcycleForm"
import { Button } from "@heroui/button";
import Link from "next/link";

const NewProductsPage = () => {
  return (
    <div>
      <div className="flex justify-center p-4">
        <NewMotorcycleForm />
      </div>
      <div className="flex justify-center m-4">
        <Link className="" href={"/admin"}>
          <Button variant="light">
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default NewProductsPage