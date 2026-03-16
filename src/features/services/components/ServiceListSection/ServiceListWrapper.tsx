import { serviceInstance } from "@/features/services/api";
import { ServiceCategorySection } from "./ServiceList";
import { getTranslations } from "next-intl/server";
import { ErrorState } from "@/shared/components/ui/error";

export default async function ServiceListWrapper({ query }: { query: string }) {
  const t = await getTranslations("services");
  // Handle data with seach params
  const result = await serviceInstance.getServiceCategories();
  if (!result.success || result.error) {
    return <ErrorState />;
  }

  //  Fomat data here
  const filteredCategories = (result.data || [])
    .map((cat) => ({
      ...cat,
      services: cat.services.filter(
        (s: { name: string; description: string }) =>
          s.name.toLowerCase().includes(query.toLowerCase()) ||
          s.description.toLowerCase().includes(query.toLowerCase()),
      ),
    }))
    .filter((cat) => cat.services.length > 0);

  return (
    // List service here (use ServiceCategorySection)
    <div className="space-y-12">
      {filteredCategories.length > 0 ? (
        filteredCategories.map((category, index) => (
          <ServiceCategorySection
            key={category.id}
            category={category}
            index={index}
            searchQuery={query}
          />
        ))
      ) : (
        <div className="text-center py-20 text-white/50 font-heading text-xl">
          {t("noService")}
        </div>
      )}
    </div>
  );
}
