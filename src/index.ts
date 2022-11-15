import { CharecterCollections } from './CharecterCollections';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const Number = new NumbersCollection([232, -1, -4, 99, 6, 9, 9]);
const charecter = new CharecterCollections('zwelcomez');
const sorts = new Sorter(charecter);
sorts.sort();
console.log(charecter.data);
