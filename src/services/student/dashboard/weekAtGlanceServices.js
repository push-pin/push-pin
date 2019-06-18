export function fetchWeek() {
  // const today = new Date();
  // const diff = today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1);
  // const monday =  new Date(today.setDate(diff));
  //date.toString() gives you Mon June 10 2019 ...

  //fetch using monday date
  //map the returned array of assignments into an object of arrays based on day
  return {
    Mon: [
      {
        _id:  '5d07e2db71a8382af43cd975',
        active: true,
        courseId: '5d07e2d971a8382af43cd954',
        type: 'reading',
        title: 'noza',
        instructions: 'Sabzisini uzojivab mulijo opo ofu kimfewnu giberve fez nas izjowga hobum goolji.',
        dateAvailable: '2115-10-21T14:54:38.589Z',
        dateDue:  '2081-09-29T04:19:33.219Z',
        dateClosed: '',
        submitted: false
      },
      {
        _id:  '5d07e2db71a8382af43cd981',
        active: true,
        courseId: '5d07e2d971a8382af43cd954',
        type: 'reading',
        title: 'vab',
        instructions: 'Wakze obus eccejra tih sew retbooj ro itje du agtij si duppaber cavti uf ed dohuej kajte.',
        dateAvailable: '2108-06-30T18:53:05.885Z',
        dateDue:  '2081-09-29T04:19:33.219Z',
        dateClosed: '',
        submitted: false
      }
    ]
  };
}
