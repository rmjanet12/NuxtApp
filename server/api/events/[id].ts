import event1 from "~/assets/api/home/1.json";
import event2 from "~/assets/api/home/2.json";
import event3 from "~/assets/api/home/3.json";


export default defineEventHandler(event => {
    const id = getRouterParam(event, 'id')


    if(id == 1)
        return event1;
    else if(id == 2)
        return event2;
    else
        return event3;
  
  })