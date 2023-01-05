const SERVER_IP = process.env.REACT_APP_SERVER_API_ADDRESS;

const post = async (url:string, data: any) => {
    const options: RequestInit = {
      method: 'POST',
      credentials: 'omit',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const res = await fetch(`https://${SERVER_IP}/${url}`, options);
    return res.json();
  };

  export default post;
