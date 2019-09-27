import { StateService } from '../state.service';
import { Page } from '../enums/pageenum';
import { PageSectionStatus } from '../enums/pageSectionStatusenum';

export interface IstateManipulator {

    state: StateService;

    changePage(newPage: Page): StateService;
    changePageSection(pageSection: PageSectionStatus): StateService;
    changePageBackground(pageSection: PageSectionStatus): StateService;

}
