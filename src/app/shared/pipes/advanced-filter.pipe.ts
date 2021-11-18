import {Pipe, PipeTransform} from '@angular/core';
import {ICongressMember} from "../interfaces/congress.interface";
import {EFilterFields} from "../enum/filter-fields.enum";

@Pipe({
  name: 'advancedFilter'
})
export class AdvancedFilterPipe implements PipeTransform {

  constructor() {
  }

  transform(items: ICongressMember[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    if (this.isJson(filter)) {
      let searchTerms = JSON.parse(filter);

      const results = items.filter((item: ICongressMember) =>
        item
          ? (searchTerms[EFilterFields.first_name] ? item.first_name.toLowerCase().indexOf(searchTerms[EFilterFields.first_name]) !== -1 : true)
          && (searchTerms[EFilterFields.last_name] ? item.last_name.toLowerCase().indexOf(searchTerms[EFilterFields.last_name]) !== -1 : true)
          && (searchTerms[EFilterFields.state] ? item.state.toLowerCase().indexOf(searchTerms[EFilterFields.state]) !== -1 : true) : true
      )

      return results;
    }
  }

  isJson(str: string) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
}
