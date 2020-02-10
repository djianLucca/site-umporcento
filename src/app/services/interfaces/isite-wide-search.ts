import { SearchResultsService } from '../search-results.service';

export interface IsitewideSearch {
    availablePages(): SearchResultsService[];
    searchPage(searchString: string): SearchResultsService[] | undefined;
}
