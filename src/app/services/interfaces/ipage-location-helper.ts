import { Page } from '../enums/pageenum';

export interface IPageLocationHelper {
    getPageLabelBasedOnPage(page: Page): string;
}
