import { companies } from "@/data/companies";
import { EmptyState } from "@/components/common/EmptyState";
import { CompanyCard } from "@/components/common/CompanyCard";
import { FilterPill } from "@/components/common/FilterPill";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

export default function DiscoverPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Discover Companies</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore thousands of organizations and their team structures to find your next target or research subject.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Filter className="h-4 w-4" />
              Filters:
            </div>
            <FilterPill label="All industries" />
            <FilterPill label="All locations" />
            <FilterPill label="All ranges" />
            <FilterPill label="All stages" />
            <div className="ml-auto flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search companies..." 
                  className="pl-10 pr-4 py-2 rounded-lg bg-muted/50 border border-border/50 focus:bg-background focus:border-primary/50 transition-all duration-200 w-64"
                />
              </div>
              <Select>
                <SelectTrigger className="w-[160px] bg-muted/50 border-border/50">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most popular</SelectItem>
                  <SelectItem value="recent">Most recent</SelectItem>
                  <SelectItem value="employees">Company size</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results */}
        {companies.length === 0 ? (
          <div className="mt-12">
            <EmptyState title="No companies found" description="Try changing your filters" actionHref="/app/explore" actionLabel="Reset filters" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Company results">
            {companies.map((c, index) => (
              <div role="listitem" key={c.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CompanyCard 
                  slug={c.slug} 
                  name={c.name} 
                  logoUrl={c.logo_url} 
                  description={c.description} 
                  followers={Math.floor((c.employee_count ?? 1000) / 10)} 
                  jobs={Math.floor(Math.random() * 20)} 
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
