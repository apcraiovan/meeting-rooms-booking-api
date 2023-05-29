import axios from "axios";

export const getUsers = async (req:any,res:any) => {
    let finalUsers : any[] = [];
  await axios
    .get("https://graph.microsoft.com/v1.0/users", {
      headers: {
        Authorization:
            process.env.AUTH_KEY
      },
    })
    .then((response:any) => {
      const users = response.data.value;
      const verifier = (user: any) => {
        if (user.mail != null)
          if (user.mail.includes("doctarigroup.com")) finalUsers.push(user);
      };
      users.some(verifier);
      console.log(finalUsers)
      res.json(finalUsers);
    });
};
export const postEvent = async (req:any,res:any) => {
    console.log(req)
    const data = req.body;
  await axios.post(
    "https://graph.microsoft.com/v1.0/me/events",
    {
      subject: data.title,
      attendees: data.attendees,
      start: {
        dateTime: data.startTime,
        timeZone: "UTC",
      },
      end: {
        dateTime: data.endTime,
        timeZone: "UTC",
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:
            process.env.AUTH_KEY
      },
    }
  ).then(
    res.send(200)
  );
};
