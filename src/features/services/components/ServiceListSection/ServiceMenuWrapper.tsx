import { serviceInstance } from "@/features/services/api";
import ServiceMenu from "./ServiceMenu";
import { ErrorState } from "@/shared/components/ui/error";

export default async function ServiceMenuWrapper() {
  const result = await serviceInstance.getServiceCategories();
  if (!result.success || result.error) {
    return <ErrorState />;
  }
  const categories = result.data || [];

  return <ServiceMenu categories={categories} />;
}
