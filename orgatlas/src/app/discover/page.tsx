import { companies } from "@/data/companies";
import { CompanyCard } from "@/components/common/CompanyCard";
import { FilterPill } from "@/components/common/FilterPill";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function DiscoverPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-wrap items-center gap-2">
        <FilterPill label="All industries" />
        <FilterPill label="All locations" />
        <FilterPill label="All ranges" />
        <FilterPill label="All stages" />
        <div className="ml-auto flex items-center gap-2">
          <Select>
            <SelectTrigger className="w-[160px]"><SelectValue placeholder="Sort by" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most popular</SelectItem>
              <SelectItem value="recent">Most recent</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {companies.map((c) => (
          <CompanyCard key={c.id} slug={c.slug} name={c.name} logoUrl={c.logo_url} description={c.description} followers={Math.floor((c.employee_count ?? 1000) / 10)} jobs={Math.floor(Math.random() * 20)} />
        ))}
      </div>
    </div>
  );
}
