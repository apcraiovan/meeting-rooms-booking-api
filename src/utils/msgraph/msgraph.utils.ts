import axios, {AxiosResponse} from "axios";

export class MsGraphUtils {
    async getAccessToken(): Promise<any> {
        return new Promise<AxiosResponse>(async (resolve, reject) => {
            try {

                const msResponse = await axios.post(
                    `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token`,
                    {
                        client_id: process.env.CLIENT_ID,
                        client_secret: process.env.CLIENT_SECRET,
                        grant_type: "client_credentials",
                        scope: "https://graph.microsoft.com/.default",
                    },
                    {headers: {"Content-Type": "application/x-www-form-urlencoded"}}
                );
                resolve(msResponse.data.access_token);
            } catch (err) {
                reject(err);
            }
        });
    }

    headersConfig = {
        headers: {
            Authorization: `Bearer `,
            ConsistencyLevel: "eventual",
            "Content-Type":"application/json",
        },
    };

    async getHeadersConfig() {
        const token = await this.getAccessToken();
        this.headersConfig.headers.Authorization = `Bearer ${token}`;
        return this.headersConfig;
    }
}
