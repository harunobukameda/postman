import { Fromspec, NewRequestRequest } from 'fromspec';

(async () => {
  const fromspec = new Fromspec({});

  const newRequestRequest: NewRequestRequest = {
    userid: 'kameda',
  };

  const data = await fromspec.root.newRequest(newRequestRequest, {
    userid: 'string',
    time: '1484',
    accept: 'application/json',
  });

  console.log(data);
})();
