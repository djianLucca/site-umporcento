
import { Iyear } from './interfaces/iyear';
import { TimelineItemService } from './timeline-item.service';

// @Injectable({
//   providedIn: 'root'
// })
export class YearService implements Iyear {
  id: number;
  mantra: string;
  year: number;
  yearItems: TimelineItemService[];
  upperItems: TimelineItemService[][];
  lowerItems: TimelineItemService[][];
  constructor(id: number, mantra: string, year: number) {
    this.id = id;
    this.mantra = mantra;
    this.year = year;
    this.yearItems = [];
    this.upperItems = [];
    this.lowerItems = [];
  }
}
