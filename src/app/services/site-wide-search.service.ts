import { Injectable } from '@angular/core';
import { IsitewideSearch } from './interfaces/isite-wide-search';
import { SearchResultsService } from './search-results.service';
import { FloatingIconTitle } from './enums/floatingicontitleenum';
import { PageLocationHelperService } from './helper/page-location-helper.service';

@Injectable({
  providedIn: 'root'
})
export class SiteWideSearchService implements IsitewideSearch {
  pageLocationHelper: PageLocationHelperService;
  constructor() {
    this.pageLocationHelper = new PageLocationHelperService;
   }

  availablePages(): SearchResultsService[] {
    return [
      new SearchResultsService(
        FloatingIconTitle.BrandManual, 
        this.pageLocationHelper.getRouterLinkPasedOnLabel(FloatingIconTitle.BrandManual)
        ),
        new SearchResultsService(
          FloatingIconTitle.Colab, 
          this.pageLocationHelper.getRouterLinkPasedOnLabel(FloatingIconTitle.Colab)
        ),
        new SearchResultsService(
          FloatingIconTitle.Compass, 
          this.pageLocationHelper.getRouterLinkPasedOnLabel(FloatingIconTitle.Compass)
        ),
        new SearchResultsService(
          FloatingIconTitle.Contact, 
          this.pageLocationHelper.getRouterLinkPasedOnLabel(FloatingIconTitle.Contact)
        ),
        new SearchResultsService(
          FloatingIconTitle.CultureGuide, 
          this.pageLocationHelper.getRouterLinkPasedOnLabel(FloatingIconTitle.CultureGuide)
        ),
        new SearchResultsService(
          FloatingIconTitle.Gabw, 
          this.pageLocationHelper.getRouterLinkPasedOnLabel(FloatingIconTitle.Gabw)
        ),
        new SearchResultsService(
          FloatingIconTitle.Guardians, 
          this.pageLocationHelper.getRouterLinkPasedOnLabel(FloatingIconTitle.Guardians)
        ),
        new SearchResultsService(
          FloatingIconTitle.Magazine, 
          this.pageLocationHelper.getRouterLinkPasedOnLabel(FloatingIconTitle.Magazine)
        ),
        new SearchResultsService(
          FloatingIconTitle.Network, 
          this.pageLocationHelper.getRouterLinkPasedOnLabel(FloatingIconTitle.Network)
        ),
        new SearchResultsService(
          FloatingIconTitle.Stamp, 
          this.pageLocationHelper.getRouterLinkPasedOnLabel(FloatingIconTitle.Stamp)
        ),
        new SearchResultsService(
          FloatingIconTitle.Talks, 
          this.pageLocationHelper.getRouterLinkPasedOnLabel(FloatingIconTitle.Talks)
        ),
        new SearchResultsService(
          FloatingIconTitle.Timeline, 
          this.pageLocationHelper.getRouterLinkPasedOnLabel(FloatingIconTitle.Timeline)
        ),
        new SearchResultsService(
          FloatingIconTitle.Tree, 
          this.pageLocationHelper.getRouterLinkPasedOnLabel(FloatingIconTitle.Tree)
        ),
        new SearchResultsService(
          FloatingIconTitle.Us, 
          this.pageLocationHelper.getRouterLinkPasedOnLabel(FloatingIconTitle.Us)
        )
      ]
  }
  searchPage(searchString: string | boolean): SearchResultsService[] | undefined {
    if(searchString === false) return undefined;

    const regexp = new RegExp(`${searchString}.*`);
    let result: SearchResultsService[] = [];
    this.availablePages().forEach((element: SearchResultsService) =>{
      if(element.name.match(regexp) || element.url.match(regexp)){
        result.push(element);
      }
    })
    return result;
  }
}
