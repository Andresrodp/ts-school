import { subDays, format } from 'date-fns';

const date = new Date(1998, 1, 28);

const rta = subDays(date, 10)

const str = format(rta, 'dd/MM/yyyy')

console.log(str);
